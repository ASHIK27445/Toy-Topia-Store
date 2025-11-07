import { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router';
const Login = () => {
    const {loginUser, user} = use(AuthContext)
    const handleLogin = (e) =>{
        e.preventDefault()
        
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        if(!user){
            loginUser(email, password)
                .then(res => console.log(res.user))
                .catch(e=> console.log(e.message)) 
        }
        else{
            toast('user is alredy logged in')
        }


    }
  return (
    <div className="w-11/12 mx-auto">
      <div className="hero bg-base-200 min-h-screen rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
            <div className="card-body border border-dotted px-16 rounded-2xl">
              <h1 className="text-4xl font-bold mt-4">Login now!</h1>
                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">
                        <label className="label text-blue-800 font-semibold">Email</label>
                        <input type="email" className="input input-ghost border-b-blue-800 mb-2" placeholder="Email" name='email' required />
                        <label className="label text-blue-800 font-semibold">Password</label>
                        <input
                        type="password"
                        className="input input-ghost border-b-blue-800 mb-2"
                        placeholder="Password"
                        name='password'
                        required
                        />
                        <div>New user? 
                        <NavLink to="/register" className="link link-hover text-blue-700 font-semibold"> Register here!</NavLink>
                        </div>
                        <button className="btn btn-neutral mt-4 mb-4">Login</button>
                    </fieldset>
                </form>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
