import { MetaTags } from '@redwoodjs/web'

import ArticleSingleAaronCell from 'src/components/ArticleSingleAaronCell/ArticleSingleAaronCell'

import { motion, useScroll } from 'framer-motion'

const AaronsArticlePage = ({ id }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.1,
      }}
      className="mx-2 flex flex-col justify-center"
    >
      <ArticleSingleAaronCell id={id} />
    </motion.div>
  )
}

export default AaronsArticlePage
