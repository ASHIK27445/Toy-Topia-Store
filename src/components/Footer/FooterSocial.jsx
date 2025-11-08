import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
const FooterSocial = () => {
    return(
        <div className='flex justify-between border-t-2 border-t-amber-500 py-5 px-3'>
                <h2 className='text-white'>Follow us on:</h2>
                <div className='text-white flex gap-3'>
                    <FaFacebook></FaFacebook>
                    <FaInstagram></FaInstagram>
                    <FaX></FaX>
                    <FaLinkedin></FaLinkedin>
                </div>
        </div>
    )
}
export default FooterSocial