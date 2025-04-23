import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className={`border-dimmerWhite flex flex-col border-t-[1px]`}>
      <div className={`my-8 flex flex-col md:flex-row`}>
        <div className="flex flex-1 flex-col items-center md:mb-8 md:items-start">
          <img
            src={logo}
            alt="bluestar bank"
            className="mt-8 flex h-[45px] object-contain sm:mt-0"
          />
        </div>
        <div
          key={footerLinks.key}
          className="mt-10 flex w-full flex-[1.5] flex-row flex-wrap justify-center text-center sm:justify-between sm:text-start md:mt-0"
        >
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className="ss:my-0 my-4 flex min-w-[150px] flex-col">
              <h4 className="font-neue text-[18px] font-medium text-white">{footerLink.title}</h4>
              <ul className="mt-2 list-none">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-neue hover:text-secondary cursor-pointer text-[14px] font-normal text-white/50 ${
                      index !== footerLink.links.length - 1 ? 'mb-2' : 'mb-0'
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-dimmerWhite flex w-full flex-col items-center justify-between border-t-[1px] py-6 sm:flex-row">
        <p className="font-neue text-[12px] font-normal text-white/50">
          Bluestar Bank 2023. All rights reserved
        </p>
        <div className="mt-4 flex flex-row sm:mt-0 md:mt-0">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`h-[28px] w-[28px] cursor-pointer object-contain ${
                index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
