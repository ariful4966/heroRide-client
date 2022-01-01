const { RIDER_DATA, ADMIN_DATA, CUSTOMER_DATA } = require("./actions");

const initState = {
  rider: [],
  customer: [],
  user: {},
};

export const reducers = (state = initState, action) => {
  switch (action.type) {
    case CUSTOMER_DATA:
      const customer = action.customer;
      return {...state, customer: customer}
    case RIDER_DATA:
      const rider = action.rider;
      return { ...state, rider: rider };
    case ADMIN_DATA:
      const admin = action.admin;
      return { ...state, user: admin };
    
   
    default:
      return state;
  }
};
