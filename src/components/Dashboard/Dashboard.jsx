import { use, useState } from "react";
import ProfileCard from "../../../../../Practise/firebase-auth/src/components/ProfileCard/ProfileCard";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { RotatingTriangles } from "react-loader-spinner";
import avatar from '../../assets/avatar.svg'

const Dashboard = () => {
    const {user, profileUpdate} = use(AuthContext)
    const [loading, setLoading] = useState(false)
    
    const handleProfileUpdate = (e) => {
        e.preventDefault()
        if(!user) return;
        
        const name = e.target.name.value || user.displayName
        const photoURL = e.target.photoURL.value.trim() || user.photoURL

        // if(!photoURL){
        //     photoURL = avatar
        // }
        
        if(user.displayName !== name || user.photoURL !== photoURL){
            setLoading(true)
            profileUpdate(name, photoURL)
                .then(() => {
                    setTimeout(()=> {
                        setLoading(false)
                        toast.success("Profile Updated successfully!")
                    },1250)
                })
                .catch(e=> {
                    setLoading(false)
                    toast.error(e.message)
                }) 
        } else {
            toast.warning("Already Exist!", {
                autoClose: 1200
            })
        }
    }
    
    if(loading){
      return <div className="my-40 flex justify-center items-center">
                <RotatingTriangles
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="rotating-triangles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""/> 
            </div>
    }
    
    return (
        <div className="flex justify-center items-center mt-10 gap-4 bg-blue-950 ">
            <div>
                <ProfileCard
                    name={user.photoURL ? '' : 'No Photo'}
                    title=''
                    handle={user.displayName} 
                    status={user.email}
                    contactText="Logout"
                    avatarUrl={user.photoURL || avatar}
                    showUserInfo={true}
                    enableTilt={true}
                    iconUrl={avatar}
                    enableMobileTilt={false}
                    behindGlowEnabled={true}
                    mobileTiltSensitivity={1}
                    onContactClick='contact'
                    className="scale-75"
                />
            </div>
            <div className="bg-amber-100 px-10 py-17 rounded-2xl">
                <form onSubmit={handleProfileUpdate}>
                    <fieldset className="fieldset">
                        <label className="label">PhotoURL</label>
                        <input type="text" className="input row-span-3" placeholder={user.photoURL} name="photoURL" />
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder={user.displayName} name="name"/>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Update</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;