import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router'
const FooterSocial = () => {
    return(
        <div className='flex justify-between border-t-2 border-t-amber-500 py-5 px-3'>
                <h2 className='text-white'>Follow us on:</h2>
                <div className='text-white flex gap-3'>
                    <Link to='https://www.facebook.com/'><FaFacebook></FaFacebook></Link>
                    <Link to='https://www.instragram.com'><FaInstagram></FaInstagram></Link>
                    <Link to='https://www.fax.com'><FaX></FaX></Link>
                    <Link to='https://www.linkedin.com'><FaLinkedin></FaLinkedin></Link>
                </div>
        </div>
    )
}
export default FooterSocial