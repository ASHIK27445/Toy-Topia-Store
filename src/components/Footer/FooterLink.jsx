import { Link } from "react-router"
import FooterSocial from "./FooterSocial"

const footerList = 
[
  {
    "menu": "Platform",
    "submenu": ["About", "Features", "Pricing & Plans", "Contact"]
  },
  {
    "menu": "Resources",
    "submenu": ["Account", "Tools", "Newsletter", "FAQ"]
  },
  {
    "menu": "Legals",
    "submenu": ["Guides", "Terms & Conditions", "Privacy Policy", "Licensing"]
  }
]

const FooterLink = () => {
    return(
            <div className='mx-10 bg-[#0D0245] rounded-2xl py-10 px-10 lg:w-3/5'>
                <div className='grid grid-cols-2 lg:grid-cols-3 justify-items-center'>
                                    {
                    footerList.map((list, index)=> 
                    <div key={index} className='text-white mb-10'>
                        <h4 className='mb-5 font-bold'>{list.menu}</h4>
                        <ul className='p-0 m-0'>
                            <li className='flex flex-col gap-3'>
                                {
                                    list.submenu.map((sublist, subindex)=> {
                                      if (sublist === "Terms & Conditions") {
                                      return (
                                          <Link
                                            to="/terms"
                                            className="hover:underline"
                                            key={subindex}>
                                            {sublist}
                                          </Link>)
                                    }else if (sublist === "Privacy Policy") {
                                            return (
                                              <Link to="/policy" className="hover:underline" key={subindex}>
                                                {sublist}
                                              </Link>
                                            )
                                    } else { 
                                      return(
                                      <a className='hover:underline' key={subindex}>{sublist}</a>
                                    )}
                                })}
                            </li>
                        </ul>
                    </div>)
                }
                </div>
                <FooterSocial></FooterSocial>
            </div>
    )
}
export default FooterLink