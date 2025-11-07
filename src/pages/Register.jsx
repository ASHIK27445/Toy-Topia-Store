import { use } from 'react';
import reg from '../assets/reg.png'
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
const Register = () => {
    const {createUserEP, profileUpdate} = use(AuthContext)
    const handleRegister = (e) =>{
        e.preventDefault()
        
        const name = e.target.name.value
        const photoURL = e.target.photoURL.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, photoURL, email, password)
        createUserEP(email, password)
            .then(res=> {
                console.log(res.user)
                profileUpdate(name, photoURL)
                    .then(()=> {})
                    .catch(error => console.log(error.mesaage))
                toast("Create User Successfully!", {
                    autoClose: 1200
                })
            })
            .catch(e=> console.log(e.mesaage))
    }
  return (
    <div className="w-11/12 mx-auto">
      <div className="hero bg-base-200 min-h-screen rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
            <div className="card-body border border-dotted px-16 rounded-2xl">
              <h1 className="text-4xl font-bold mt-4">Register now!</h1>
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        <label className="label text-blue-800 font-semibold">Name</label>
                        <input type="text" className="input input-ghost border-b-blue-800 mb-2" placeholder="Name" name="name" required />
                        <label className="label text-blue-800 font-semibold">PhotoURL</label>
                        <input type="text" className="input input-ghost border-b-blue-800 mb-2" placeholder="photoURL" name='photoURL' required />
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
                        <div>
                        <a className="link link-hover">Forgot password?</a>
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
export default Register;
