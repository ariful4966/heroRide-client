import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


export function PrivateRoute({ children, ...rest }) {
    let auth = useSelector(state=>state.user)
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from:  location }
              }}
            />
          )
        }
      />
    );
  }

  