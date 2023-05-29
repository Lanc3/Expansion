import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { FiClock, FiTag } from 'react-icons/fi'
import ReactPlayer from 'react-player'

import { Link, navigate, routes } from '@redwoodjs/router'

import AnimatedPopUpModal from '../AnimatedPopUpModal/AnimatedPopUpModal'
const ProjectSingle = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const {
    id,
    title,
    category,
    image,
    video,
    by,
    body,
    clientName,
    objective,
    clientWebsite,
    tools,
  } = data
  const paragraphs = body.split('\n')
  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.7,
          delay: 0.15,
        }}
        whileHover={{ scale: 0.8 }}
        onClick={openModal}
        className="min-h-min rounded-xl rounded-t-xl"
      >
        <div>
          <div className="mb-10 min-h-max cursor-pointer rounded-xl rounded-t-xl bg-secondary-light shadow-lg hover:shadow-xl sm:mb-0">
            <div className="justify-center rounded-xl rounded-t-xl">
              {video ? (
                <div className="flex h-96 rounded-xl rounded-t-xl border-none">
                  <ReactPlayer
                    controls={false}
                    loop={true}
                    playing={true}
                    volume={0}
                    playbackRate={1}
                    url={video}
                  ></ReactPlayer>
                </div>
              ) : (
                <div className="flex w-full justify-center rounded-xl rounded-t-xl">
                  <img
                    src={image}
                    className="flex h-96 justify-center rounded-xl rounded-t-xl border-none pl-2"
                    alt="Single Project"
                  />
                </div>
              )}
            </div>
            <div className="px-4 py-6 text-center">
              <p className="font-general-large mb-2 text-xl text-ternary-dark  md:text-3xl">
                {title}
              </p>
              <span className="text-lg text-ternary-dark ">{category}</span>
            </div>
            <span className="flex justify-center pb-4 text-sm text-expansion-orange ">
              {by}
            </span>
          </div>
        </div>
      </motion.div>
      <AnimatedPopUpModal isOpen={isOpen} onClose={closeModal}>
        <div className="flex">
          <div className="flex w-1/3 flex-col">
            <div>
              <p className="font-general-medium mb-2 mt-0 flex  w-full items-center justify-center text-left text-3xl font-bold text-expansion-orange  sm:text-4xl">
                {title}
              </p>
              <div className="mb-10 flex  justify-center sm:mb-0" key={id}>
                {video ? (
                  <div className="flex h-96 rounded-xl rounded-t-xl border-none">
                    <ReactPlayer
                      controls={false}
                      loop={true}
                      playing={true}
                      volume={0}
                      playbackRate={1}
                      url={video}
                    ></ReactPlayer>
                  </div>
                ) : (
                  <img
                    src={image}
                    className="cursor-pointer rounded-xl shadow-lg sm:shadow-none"
                    alt={title}
                    key={id}
                  />
                )}
              </div>
            </div>
            <div className="mb-7 flex flex-col items-center">
              <p className="font-general-regular mb-2 text-2xl font-semibold text-secondary-dark ">
                Client
              </p>
              <ul className="leading-loose">
                <li
                  className="font-general-regular text-ternary-dark "
                  key={id}
                >
                  <a
                    href={clientWebsite}
                    className="cursor-pointer duration-300 hover:text-expansion-orange hover:underline "
                    aria-label="Project Website and Phone"
                  >
                    {clientName}
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-7 flex flex-col items-center">
              <p className="font-general-regular mb-2 text-2xl font-semibold text-ternary-dark ">
                Our Objectives
              </p>
              <p className="font-general-regular text-primary-dark ">
                {objective}
              </p>
            </div>

            {/* Single project technologies */}
            <div className="mb-7 flex flex-col items-center">
              <p className="font-general-regular mb-2 text-2xl font-semibold text-ternary-dark ">
                Tools and Technologies
              </p>
              <p className="font-general-regular text-primary-dark ">{tools}</p>
            </div>
          </div>

          <div className="mt-4 flex w-2/3">
            {/*  Single project right section */}
            <div className=" ml-44   text-left ">
              <p className="font-general-regular text-2xl font-bold text-primary-dark ">
                {title}
              </p>
              {paragraphs.map((section) => (
                // eslint-disable-next-line react/jsx-key
                <div className="display-linebreak">
                  {' '}
                  <p className="font-general-regular mb-8 text-primary-dark ">
                    {section}
                  </p>{' '}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedPopUpModal>
    </>
  )
}

export default ProjectSingle
