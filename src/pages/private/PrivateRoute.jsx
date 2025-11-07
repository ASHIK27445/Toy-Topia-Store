import { use } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Navigate, useLocation} from "react-router"

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
    
}
export default PrivateRoute