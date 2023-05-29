import { useState } from 'react'

import { motion } from 'framer-motion'
import { FiSearch } from 'react-icons/fi'

import ProjectSingle from '../ProjectSingle/ProjectSingle'
const selectOptions = [
  'All Projects',
  'React Native',
  'React',
  'Design',
  'Game Development',
  'Larvel',
  'Shopify',
  'WordPress',
  'RedwoodJS',
  'Design',
]
const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
    display: 'block',
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
    transitionEnd: {
      display: 'none',
    },
  },
}
const ProjectFilter = ({ projects }) => {
  const [searchProject, setSearchProject] = useState('')
  const [selectProject, setSelectProject] = useState('')
  const [searchProjectsByTitle, setSearchProjectsByTitle] = useState([])
  const [selectProjectsByCategory, setSelectProjectsByCategory] = useState([])
  const [isHover, toggleHover] = useState(false)

  const toggleHoverMenu = () => {
    toggleHover(!isHover)
  }

  const [isMouse, toggleMouse] = useState(false)
  const toggleMouseMenu = () => {
    toggleMouse(!isMouse)
  }

  const handleSearch = (option) => {
    setSearchProject(option)
    console.log(searchProject)
    const searchProjectsByTitle = projects.filter((item) => {
      const result = item.title
        .toLowerCase()
        .includes(searchProject.toLowerCase())
        ? item
        : searchProject === ''
        ? item
        : ''
      return result
    })
    setSearchProjectsByTitle(searchProjectsByTitle)
  }
  const handleSelect = (option) => {
    setSelectProject(option)
    if (option === 'All Projects') {
      setSelectProjectsByCategory(projects)
    } else {
      const selectProjectsByCategory = projects.filter((item) => {
        let category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1)

        return category.includes(option)
      })
      setSelectProjectsByCategory(selectProjectsByCategory)
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div className="mt-10 sm:mt-16">
        <h3
          className="font-general-regular
                        text-md mb-3
                        text-center
                        text-secondary-dark

                        sm:text-xl
                        "
        >
          Search projects by title or filter by category
        </h3>
        <div
          className="
                        flex
                        justify-between
                        gap-3 border-b
                        border-primary-light
                        pb-3

                        "
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                                hidden
                                cursor-pointer
                                rounded-xl
                                bg-primary-light
                                p-2.5
                                shadow-sm

                                sm:block
                                "
            >
              <FiSearch className="h-5 w-5 text-ternary-dark "></FiSearch>
            </span>
            <input
              onChange={(e) => {
                handleSearch(e.target.value)
              }}
              className="font-general-medium
                                sm:text-md
                                rounded-lg
                                border
                                border-gray-200
                                bg-secondary-light
                            py-2
                                pl-3
                                pr-1
                                text-sm
                                text-primary-dark
                                sm:px-4
                                "
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>
          <select
            onChange={(e) => {
              handleSelect(e.target.value)
            }}
            className="font-general-medium
                sm:text-md
                rounded-lg
                border
                bg-secondary-light
                px-4
                py-2

                sm:px-6
            "
          >
            {selectOptions.map((option) => (
              <option
                className="text-normal sm:text-md rounded-lg hover:bg-white"
                key={option}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {selectProject
          ? selectProjectsByCategory.map((project) => (
              <ProjectSingle data={project} />
            ))
          : searchProject
          ? searchProjectsByTitle.map((project) => (
              <ProjectSingle data={project} />
            ))
          : projects.map((project) => <ProjectSingle data={project} />)}
      </div>
    </motion.div>
  )
}

export default ProjectFilter
