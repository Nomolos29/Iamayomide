import Link from 'next/link';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {

    type SocialIconProp = {
      icon: React.ReactNode;
      link: string;
    };
  
    const socialIcons: SocialIconProp[] = [
      {
        icon: <FaFacebook />,
        link: "#"
      },
      {
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/ayomidearowoloayodeji?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        icon: <FaSquareXTwitter />,
        link: "https://x.com/knowtheblocks_?t=VNjLr__AVfJPoU219GCj1w&s=08"
      },
      {
        icon: <FaFacebook />,
        link: "#"
      }
    ]

  const navMenu = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "More About Me",
      url: "/"
    },
    {
      name: "KBM Official",
      url: "/"
    },
    {
      name: "DAOit",
      url: "/"
    },
  ]

  return (
    <footer className='w-full bg-red-700 flex justify-center h-fit py-5 items-center overflow-hidden relative'>
        <main className='max-w-[1440px] w-full margin-auto flex flex-col justify-center items-center text-white gap-10'>
          <section className='flex flex-col w-fit justify-center items-center gap-10 py-10'>
            <Link href="/" className="w-full">
              <div className="flex items-center text-3xl">
                <div className="h-16 w-16 rounded-full bg-white flex justify-center items-center text-red-700">Iam</div>theayomide
              </div>
            </Link>
          </section>
          
          <section className='flex flex-col w-full gap-5 px-5 md:px-10'>
            <div className='flex flex-col md:flex-row w-full justify-between pt-5'>
              {navMenu.map((Category, index) => (
                <div key={index}>
                  <Link key={index} href={Category.url} className='text-lg cursor-pointer text-white'>{Category.name}</Link>
                </div>
              ))}
            </div>

            <div className='h-[2px] w-full bg-[#d2d2d2]'></div>

            <div className='flex justify-between items-center'>
              <p className='font-medium'>copywrite</p>

              <div className="flex justify-between items-center gap-5">
                {socialIcons.map((social, index) => (
                  <Link href={social.link} key={index} className="text-2xl text-red-200">{social.icon}</Link>
                ))}
              </div>
            </div>
          </section>
        </main>
    </footer>
  )
}

export default Footer