export const RIDER_DATA="RIDER_DATA";
export const getRiderData =(rider)=>{
    return {type: RIDER_DATA, rider}
}

export const CUSTOMER_DATA="CUSTOMER_DATA";
export const getCustomerData= (customer)=>{
    return {type: CUSTOMER_DATA, customer}
}

export const ADMIN_DATA="ADMIN_DATA";
export const getAdminData= (admin)=>{
    return {type: ADMIN_DATA, admin}
}

export const SINGLE_CUSTOMER="SINGLE_CUSTOMER";
export const getSingleCustomer = (singleCust)=>{
    return {type: SINGLE_CUSTOMER, singleCust}
}


export const SINGLE_RIDER="SINGLE_RIDER";
export const getSignleRider =(singleRide)=>{
    return {type: SINGLE_RIDER, singleRide}
}