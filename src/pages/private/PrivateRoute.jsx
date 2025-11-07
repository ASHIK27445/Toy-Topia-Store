import { use } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Navigate, useNavigate } from "react-router"

const PrivateRoute = ({children}) => {
    const {user} = use(AuthContext)
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
    
}
export default PrivateRoute