import React, { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import ExpansionButton from '../ExpansionButton/ExpansionButton'
const ExpandingText = ({ data }) => {
  const [expanded, setExpanded] = useState(false)
  const paragraphs = data.body.split('\n')
  const toggleExpand = () => {
    setExpanded(!expanded)
  }

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
      <AnimatePresence>
        {!expanded ? (
          <div className="display-linebreak">
            {' '}
            <p className="font-general-regular mb-8 text-primary-dark ">
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
                <p className="font-general-regular mb-8 text-primary-dark ">
                  {section}
                </p>{' '}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col items-center justify-center">
        {expanded ? (
          <ExpansionButton lable={'Collapse'} onClickCallback={toggleExpand} />
        ) : (
          <ExpansionButton lable={'Read More'} onClickCallback={toggleExpand} />
        )}
      </div>
    </div>
  )
}

export default ExpandingText
