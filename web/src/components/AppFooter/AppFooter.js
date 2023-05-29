import { motion } from 'framer-motion'
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from 'react-icons/fi'

import { Link, routes } from '@redwoodjs/router'

import AppFooterCopyright from '../AppFooterCopyright/AppFooterCopyright'

const socialLinks = [
  {
    id: 1,
    icon: <FiGlobe />,
    url: 'https://www.expansion.ie/',
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: 'https://github.com/Lanc3',
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: 'https://www.linkedin.com/in/aaron-keating-a4228985/',
  },
  {
    id: 4,
    icon: <FiYoutube />,
    url: 'https://www.youtube.com/@AaronKeatingLanc3/',
  },
]
const AppFooter = () => {
  return (
    <div className="container mx-auto ">
      <div className="sm:pt-30 mb-24 mt-20 flex flex-col items-center justify-center border-t-2 border-primary-light pb-8 pt-20 sm:flex-col md:flex-row lg:flex-row">
        {/* Footer social links */}
        <div className="font-general-regular mx-44 flex flex-col items-center justify-center sm:mx-44">
          <p className="mb-5 text-3xl text-primary-dark  sm:text-4xl">
            Follow Aaron
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              // eslint-disable-next-line react/jsx-key
              <motion.div whileHover={{ scale: 1.8 }}>
                <a
                  href={link.url}
                  target="__blank"
                  key={link.id}
                  className="mt-12 cursor-pointer rounded-lg bg-gray-50 text-gray-400 shadow-sm duration-300 hover:bg-gray-100 hover:text-[#F97E19] "
                >
                  <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
                </a>
              </motion.div>
            ))}
          </ul>
        </div>
        <div className="font-general-regular mx-44 flex flex-col items-center justify-center sm:mx-44">
          <p className="z-55 mb-5 text-3xl text-primary-dark  sm:text-4xl">
            Follow Nicola
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              // eslint-disable-next-line react/jsx-key
              <motion.div whileHover={{ scale: 1.8 }}>
                <a
                  href={link.url}
                  target="__blank"
                  key={link.id}
                  className="z-1 mt-12 cursor-pointer rounded-lg bg-gray-50 text-gray-400 shadow-sm duration-300 hover:bg-gray-100 hover:text-[#F97E19] "
                >
                  <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
                </a>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
      <AppFooterCopyright />
    </div>
  )
}

export default AppFooter
