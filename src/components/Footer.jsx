import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <section className={`flex flex-col border-t-[1px] border-dimmerWhite`}>
      <div className={`flex-col md:flex-row my-8 flex`}>
        <div className="flex flex-1 flex-col items-center md:items-start md:mb-8">
          <img src={logo} alt="bluestar bank" className="h-[45px] flex object-contain mt-8 sm:mt-0" />
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-center sm:justify-between text-center sm:text-start flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-neue font-medium text-[18px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-2">
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`font-neue font-normal text-[14px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? "mb-2" : "mb-0"}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex sm:flex-row flex-col py-6 border-t-[1px] border-dimmerWhite justify-between items-center ">
        <p className="font-neue font-normal text-[12px] text-dimWhite">
          Bluestar Bank 2023. All rights reserved
        </p>
        <div className="flex flex-row md:mt-0 mt-4 sm:mt-0">
          {socialMedia.map((social, index) => (
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[28px] h-[28px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer