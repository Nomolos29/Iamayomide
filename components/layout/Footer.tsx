import Link from 'next/link';
import { SOCIAL_ICONS, FOOTER_NAV_MENU } from "@/lib/constants";
import { SocialIcon, NavMenuItem } from "@/lib/types";

const Footer = () => {

    const socialIcons: SocialIcon[] = SOCIAL_ICONS;

  const navMenu: NavMenuItem[] = FOOTER_NAV_MENU;

  return (
    <footer className='w-full bg-gray-900 py-16'>
        <div className='max-w-[1440px] w-full mx-auto px-5 md:px-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
            {/* Brand Section */}
            <div className='space-y-6'>
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-red-700 to-red-600 text-white flex justify-center items-center font-bold text-sm shadow-lg">
                  AA
                </div>
                <div className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                  IamTheAyomide
                </div>
              </Link>
              
              <p className='text-gray-300 leading-relaxed max-w-md'>
                EdTech innovator, AI literacy advocate, and blockchain educator dedicated to expanding access to emerging technologies for underserved communities worldwide.
              </p>
              
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                  <Link 
                    href={social.link} 
                    key={index} 
                    target="_blank"
                    className="text-2xl text-gray-400 hover:text-red-400 transition-colors duration-300 hover:scale-110 transform"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Navigation */}
            <div className='space-y-6'>
              <h3 className='text-xl font-bold text-white'>Quick Links</h3>
              <div className='space-y-4'>
                {navMenu.map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.navURL} 
                    className='block text-gray-300 hover:text-red-400 transition-colors duration-300 hover:translate-x-2 transform'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div className='space-y-6'>
              <h3 className='text-xl font-bold text-white'>Connect</h3>
              <div className='space-y-4 text-gray-300'>
                <p>Ready to collaborate on educational technology initiatives?</p>
                <Link 
                  href="https://outlook.office.com/bookwithme/user/7d3c3f6ee4e9414296cdcdc8704495b6@gse.harvard.edu?anonymous&ep=plink"
                  target="_blank"
                  className='inline-block py-3 px-6 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>

          <div className='border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} Ayomide Arowolo-Ayodeji. All rights reserved.
            </p>
            <p className='text-gray-400 text-sm mt-4 md:mt-0'>
              Empowering communities through technology education
            </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer