import { use } from "react"
import { NavLink, useLocation, useNavigate } from "react-router"
import { AuthContext } from "../../context/AuthContext"
import { toast } from "react-toastify"

const ForgetPassword = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {resetPassword} = use(AuthContext)
    const emailFromLogin = location.state?.email || ''
    console.log(emailFromLogin)
    const handleResetPassword = (e) =>{
        e.preventDefault()
        const email = e.target.email.value
                if (!email || !email.includes('@')) {
            toast.error("Please enter a valid email address!");
            return;
        }
        resetPassword(email)
            .then(()=>{
                toast.success("Check Your mail now")
                e.target.reset()
                setTimeout(()=> {
                    window.open("https://mail.google.com", "_blank")
                    navigate('/login')
                },2000)
            })
            .catch(error =>{
                toast.error(error.message)
            })
    } 
    return(
    <div className="w-11/12 mx-auto">
      <div className="hero bg-base-200 min-h-screen rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
            <div className="card-body border border-dotted px-16 rounded-2xl">
              <h1 className="text-2xl lg:text-3xl font-bold mt-4 text-left">Sent Reset Password Email!</h1>
                <form onSubmit={handleResetPassword}>
                    <fieldset className="fieldset">
                        <label className="label text-blue-800 font-semibold">Email</label>
                        <input type="email" 
                        className="input input-ghost border-b-blue-800 mb-2" 
                        placeholder="Email" 
                        name='email' 
                        required />
                        <div>New user? 
                        <NavLink to="/register" className="link link-hover text-blue-700 font-semibold"> Register here!</NavLink>
                        </div>
                        <button className="btn btn-neutral mt-2 mb-4">Reset Password</button>
                    </fieldset>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default ForgetPassword