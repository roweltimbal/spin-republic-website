import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/User.context";



export const ProtectedRoute = ({children}) => {
    const {currentUser} = useContext(UserContext);
    if(!currentUser) {
        return <Navigate to='/login' replace/>
    }
    return children;
}