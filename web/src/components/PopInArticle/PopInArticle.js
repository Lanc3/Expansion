import { useEffect } from 'react'

import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import styles from './styles.css'
const PopInArticle = ({ image, textArray, animateSide }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0 },
  }
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      },
    },
  }
  // initial={{ opacity: 0, scale: 0.5 }}
  // animate={{ opacity: 1, scale: 1 }}
  // transition={{
  //   duration: 0.3,
  //   ease: [0, 0.71, 0.2, 1.01],
  //   scale: {
  //     type: 'spring',
  //     damping: 5,
  //     stiffness: 100,
  //     restDelta: 0.001,
  //   },
  // }}
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="slantedBG mt-6 grid grid-cols-1 py-0  text-lg text-ternary-dark shadow-lg  sm:grid-cols-1 sm:gap-10 sm:px-2 sm:py-2 md:px-12 md:py-8 lg:grid-cols-1 lg:px-24 lg:py-16"
    >
      {image ? (
        <div className="display-linebreak flex flex-col justify-center sm:flex-row md:flex-row lg:flex-row ">
          {animateSide ? (
            <motion.div variants={variants} className=" rounded-full">
              {image ? (
                <img
                  src={image}
                  className="justtify-center  mb-7 flex  items-center rounded-full sm:w-2/4 md:w-2/4 lg:w-3/4 "
                  alt=""
                />
              ) : null}
            </motion.div>
          ) : null}

          <div className="flex flex-col">
            {textArray.map((bio) => (
              <p
                className="  sm:whitespace-pre-linemd:whitespace-pre mb-12 whitespace-pre-line text-lg text-ternary-dark  lg:whitespace-pre "
                key={bio.id}
              >
                {bio.bio}
              </p>
            ))}
          </div>
          {!animateSide ? (
            <motion.div variants={variants} className=" rounded-full">
              {image ? (
                <img
                  src={image}
                  className="mb-7  rounded-full sm:ml-24 sm:w-2/4  md:ml-24 md:w-2/4 lg:ml-24 lg:w-3/4"
                  alt=""
                />
              ) : null}
            </motion.div>
          ) : null}
        </div>
      ) : (
        <div className="display-linebreak flex flex-col">
          {textArray.map((bio) => (
            <p
              className="display-linebreak mb-12 whitespace-pre-line text-lg text-ternary-dark "
              key={bio.id}
            >
              {bio.bio}
            </p>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default PopInArticle
