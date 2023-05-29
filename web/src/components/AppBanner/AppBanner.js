import { motion } from 'framer-motion'
import { FiArrowDownCircle } from 'react-icons/fi'

import logoLight from './logoText.png'
import logoDark from './logoText.png'
import developerDark from './nicola.jpg'
import developerLight from './profile.png'
const AppBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className="mt-12 flex flex-col items-center sm:flex-row sm:justify-between md:mt-2"
    >
      <div className="flex flex-col px-6 sm:w-1/3">
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
          className="float-right mt-8 w-full text-right sm:mt-0"
        >
          <img src={developerLight} className="w-38" alt="Dark Logo" />
        </motion.div>
        <div className="mx-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.9,
              delay: 0.3,
            }}
            className="flex w-full justify-center"
          >
            <a
              download="Aaron Keating Resume.pdf"
              href="/files/Aaron Keating Resume.pdf"
              className="font-general-medium mb-6 mt-12 flex w-36 items-center justify-center rounded-lg border border-indigo-200 bg-indigo-50 py-2.5 text-lg text-gray-500 shadow-lg duration-500 hover:bg-expansion-orange hover:text-white focus:ring-1 focus:ring-indigo-900  sm:mb-0 sm:w-48 sm:py-3"
              aria-label="Download Resume"
            >
              <FiArrowDownCircle className="sn:w-6 mr-2 h-5 w-5 duration-100 sm:mr-3 sm:h-6"></FiArrowDownCircle>
              <span className="font-general-medium text-sm duration-100 sm:text-lg">
                Download CV
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="w-full text-center md:w-1/3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.1,
          }}
          className="flex w-full flex-row"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.9,
              delay: 0.2,
            }}
            className="w-full text-center"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                delay: 0.1,
              }}
              className="font-general-semibold shrink-0 p-2 text-center text-2xl  text-ternary-dark sm:text-center  md:text-xl lg:text-2xl xl:text-3xl "
            >
              We are
            </motion.h1>
            <div className="flex w-full items-center justify-center">
              <img
                src={logoDark}
                className="w-38 content-center"
                alt="Dark Logo"
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 text-center text-lg leading-normal text-gray-500  sm:text-center md:text-xl lg:text-2xl xl:text-3xl"
        >
          A Duo, Full Stack Developer & Graphic Designer
        </motion.p>
      </div>
      <div className="flex w-full flex-col px-6 sm:w-1/3">
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
          className="float-right mt-8 w-full text-right sm:mt-0"
        >
          <img src={developerDark} alt="Developer" />
        </motion.div>
        <div className="">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.9,
              delay: 0.3,
            }}
            className="flex w-full justify-center "
          >
            <a
              download="Aaron Keating Resume.pdf"
              href="/files/Aaron Keating Resume.pdf"
              className="font-general-medium mb-6 mt-12 flex w-36 items-center justify-center rounded-lg border border-indigo-200 bg-indigo-50 py-2.5 text-lg text-gray-500 shadow-lg duration-500 hover:bg-expansion-orange hover:text-white focus:ring-1 focus:ring-indigo-900  sm:mb-0 sm:w-48 sm:py-3"
              aria-label="Download Resume"
            >
              <FiArrowDownCircle className="sn:w-6 mr-2 h-5 w-5 duration-100 sm:mr-3 sm:h-6"></FiArrowDownCircle>
              <span className="font-general-medium text-sm duration-100 sm:text-lg">
                Download CV
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default AppBanner
