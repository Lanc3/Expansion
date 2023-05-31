import React, { useState } from 'react'

import { Player, Controls } from '@lottiefiles/react-lottie-player'

import { motion, AnimatePresence, useCycle } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'

import ExpansionButton from '../ExpansionButton/ExpansionButton'

import animation from './upAnimation.json'
const ExpandingText = ({ data, toggleCallback, notAaron }) => {
  const [expanded, setExpanded] = useState(false)
  const paragraphs = data.body.split('\n')
  const toggleExpand = () => {
    setExpanded(!expanded)
    toggleCallback(!expanded)
  }
  const [height, cycleHeight] = useCycle(0, 50, 100)
  const renderText = () => {
    if (expanded) {
      return data.body
    } else {
      // Split the text into lines and show only the first 3 lines
      const lines = data.body.split('\n')
      const truncatedText = lines.slice(0, 3).join('\n')
      return truncatedText
    }
  }
  return (
    <div className="article">
      {expanded ? (
        <div
          className="-mt-20 mb-8 flex w-full justify-end"
          onClick={toggleExpand}
        >
          <Player
            autoplay
            speed={1.5}
            loop
            src={animation}
            style={{ height: '80px', width: ' 80px' }}
          ></Player>
        </div>
      ) : null}
      <AnimatePresence>
        {!expanded ? (
          <div className="display-linebreak">
            {' '}
            <p className="font-general-regular mb-8 text-white ">
              {renderText()}
            </p>{' '}
          </div>
        ) : null}

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8 }}
          >
            {paragraphs.map((section) => (
              // eslint-disable-next-line react/jsx-key
              <div className="display-linebreak">
                {' '}
                <p className="font-general-regular mb-8 text-white ">
                  {section}
                </p>{' '}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-row items-center justify-center">
        {expanded ? (
          <ExpansionButton lable={'Collapse'} onClickCallback={toggleExpand} />
        ) : (
          <div className="flex flex-row">
            <ExpansionButton
              lable={'Quick View'}
              onClickCallback={toggleExpand}
            />
            {!notAaron ? (
              <Link to={routes.aaronsArticle({ id: data.id })}>
                <ExpansionButton lable={'Full Article'} />
              </Link>
            ) : (
              <Link to={routes.nicolasArticle({ id: data.id })}>
                <ExpansionButton lable={'Full Article'} />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ExpandingText
