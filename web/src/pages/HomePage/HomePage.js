import { useState } from 'react'

import { motion } from 'framer-motion'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

import { MetaTags } from '@redwoodjs/web'

import AppBanner from 'src/components/AppBanner/AppBanner'
import ProjectCell from 'src/components/ProjectCell/ProjectCell'
import ProjectsGrid from 'src/components/ProjectsGrid/ProjectsGrid'
import { ProjectsProvider } from 'src/context/ProjectsContext'

import logoDark from './logoText.png'
const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="mx-4 sm:mx-4 md:mx-24 lg:mx-24 xl:mx-24 flex flex-col justify-center">
      <AppBanner></AppBanner>

      <ProjectCell></ProjectCell>

      <MetaTags title="Home" description="Home page" />
    </div>
  )
}

export default HomePage
