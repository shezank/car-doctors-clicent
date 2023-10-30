import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {


    const {user, loadding} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)
    if(loadding){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user?.email){
        return children ;
    }


    return <Navigate state={location.pathname} to='/login' replace></Navigate>
        
};

export default PrivateRoute;