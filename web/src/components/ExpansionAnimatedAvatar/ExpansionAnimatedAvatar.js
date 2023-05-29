import { motion } from 'framer-motion'

import aaron from './aaron.jpeg'
const ExpansionAnimatedAvatar = ({ blurb, image }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <div className="m-12 hidden w-1/3 flex-row sm:hidden sm:flex-row  md:block lg:block  lg:flex-col xl:block 2xl:block ">
      <div className="flex min-h-[360px] shrink sm:min-h-[480px] md:min-h-[490px] lg:min-h-[490px]">
        {' '}
        <div className=""></div>
        <div className=" "></div>
        <motion.div
          layout
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute rounded-full border-0 border-[#F97E19] sm:m-8 sm:border-2 sm:p-32 md:m-8 md:border-2 md:p-32 lg:m-16 lg:border-2 lg:p-40"
        />
        <motion.div
          layout
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 0.6 }}
          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          className=" absolute rounded-full border-0 border-[#F97E19] sm:m-16 sm:border-2 sm:p-24 md:m-16 md:border-2 md:p-24 lg:m-24 lg:border-2 lg:p-32"
        />
        <img
          src={image}
          className=" absolute w-44 rounded-full border-4 border-[#F97E19] sm:m-[76px] sm:w-44 sm:p-0 md:m-[76px] md:w-44 md:p-0 lg:m-[124px] lg:w-52 lg:p-0"
          alt=""
        />
      </div>
      <div className="whitespance-pre ">
        <p className=" text-center ">{blurb}</p>
      </div>
    </div>
  )
}

export default ExpansionAnimatedAvatar
