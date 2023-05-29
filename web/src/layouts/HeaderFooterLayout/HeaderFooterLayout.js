import { useState } from 'react'

import { motion } from 'framer-motion'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import AppFooter from 'src/components/AppFooter/AppFooter'

import logoLight from './logoText.png'
import logoDark from './logoText.png'

const HeaderFooterLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="nav"
        className=" "
      >
        <div className="z-10 flex  py-6 shadow-lg sm:flex sm:items-center sm:justify-between ">
          <div className="mx-4">
            <Link to={routes.home()}>
              <img src={logoDark} className="w-38 " alt="Dark Logo" />
            </Link>
          </div>
          <div className="right-2  sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className=" focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className=" absolute right-2 top-6 h-7 w-7 fill-current text-secondary-dark "
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>

          {/* Header links small screen */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={
              showMenu
                ? ' visible absolute top-16 z-50 w-full flex-col items-center justify-center bg-white p-5 shadow-lg sm:ml-4 sm:mt-3 sm:flex sm:hidden sm:p-0 sm:shadow-none md:hidden lg:hidden'
                : 'hidden'
            }
          >
            {/* <Link
              to={routes.home()}
              className="mb-2 block text-left text-lg text-primary-dark hover:text-[#F97E19]   sm:mx-4 sm:py-2"
              aria-label="Projects"
            >
              Home
            </Link> */}
            <Link
              to={routes.about()}
              onClick={toggleMenu}
              className="mb-2 block border-t-2 border-primary-light pt-3 text-left text-lg text-primary-dark  hover:text-[#F97E19]   sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2"
              aria-label="About Us"
            >
              About Us
            </Link>
            <Link
              to={routes.contactus()}
              onClick={toggleMenu}
              className="mb-2 block border-t-2 border-primary-light pt-3 text-left text-lg text-primary-dark  hover:text-[#F97E19]  sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2"
              aria-label="Contact"
            >
              Contact
            </Link>
            <Link
              to={routes.aaronsBlog()}
              onClick={toggleMenu}
              className="mb-2 block border-t-2 border-primary-light pt-3 text-left text-lg text-primary-dark  hover:text-[#F97E19]   sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2"
              aria-label="Contact"
            >
              Aarons Blog
            </Link>
            <Link
              to={routes.nicolasBlog()}
              onClick={toggleMenu}
              className="mb-2 block border-t-2 border-primary-light pt-3 text-left text-lg text-primary-dark  hover:text-[#F97E19]   sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2"
              aria-label="Contact"
            >
              Nicola's Blog
            </Link>
            {isAuthenticated ? (
              <Link
                to={routes.blogAdmin()}
                onClick={toggleMenu}
                className="mb-2 block border-t-2 border-primary-light pt-3 text-left text-lg text-primary-dark  hover:text-[#F97E19]   sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2"
              >
                Admin
              </Link>
            ) : null}
            {isAuthenticated ? (
              <div>
                <button
                  type="button"
                  className="mb-2 mr-2 rounded-lg bg-[#0D2438] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#F97E19] hover:text-[#F97E19] focus:outline-none focus:ring-4 focus:ring-blue-300 "
                  onClick={logOut}
                >
                  logout
                </button>
              </div>
            ) : (
              <Link to={routes.login()}>
                {' '}
                <button
                  type="button"
                  className="mb-2 mr-2 rounded-lg bg-[#0D2438] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#F97E19] hover:text-[#F97E19] focus:outline-none focus:ring-4 focus:ring-blue-300 "
                >
                  login
                </button>
              </Link>
            )}
            <div className="border-t-2 border-primary-light pt-3  sm:border-t-0 sm:pt-0"></div>
          </motion.nav>

          {/* MAIN HEADER */}
          <div className="font-general-medium right-0 m-0 mt-5 hidden items-center justify-center p-5 shadow-lg sm:ml-4 sm:mt-3 sm:flex sm:p-0 sm:shadow-none">
            {/* <Link
              to={routes.home()}
              className="mb-2 block text-left text-lg text-primary-dark hover:text-[#F97E19]  sm:mx-4 sm:py-2"
              aria-label="Projects"
            >
              Home
            </Link> */}
            <Link
              to={routes.about()}
              className="mb-2 block shrink-0 border-t-2 border-primary-light pt-3 text-left text-lg text-primary-dark  hover:text-[#F97E19]   sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2"
              aria-label="About Us"
            >
              About Us
            </Link>
            <Link
              to={routes.contactus()}
              className="mb-2 block shrink-0 border-t-2 border-primary-light pt-3 text-left text-lg text-primary-dark  hover:text-[#F97E19]   sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2"
              aria-label="Contact"
            >
              Contact
            </Link>
            <div className=" flex  w-full items-center justify-center ">
              <div className="group relative cursor-pointer ">
                <div className="flex items-center justify-between space-x-5 rounded-b-lg bg-white px-4">
                  <div className="menu-hover my-2 mb-4 rounded-b-lg py-2  text-left text-lg text-primary-dark  hover:text-[#F97E19]">
                    Our Blogs
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>
                <div className="invisible absolute z-50 flex w-full flex-col rounded-b-lg bg-white px-4 py-1 text-gray-800 shadow-xl group-hover:visible">
                  <Link
                    to={routes.aaronsBlog()}
                    className="mb-2 block shrink-0 border-t-2 border-primary-light pt-3 text-left text-lg text-primary-dark  hover:text-[#F97E19]   sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2"
                    aria-label="Contact"
                  >
                    Aaron's Blog
                  </Link>
                  <Link
                    to={routes.nicolasBlog()}
                    className="mb-2 block border-t-2 border-primary-light pt-3 text-left text-lg text-primary-dark  hover:text-[#F97E19]   sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2"
                    aria-label="Contact"
                  >
                    Nicola's Blog
                  </Link>
                </div>
              </div>
            </div>

            {isAuthenticated ? (
              <Link
                to={routes.blogAdmin()}
                className="mb-2 block shrink-0 border-t-2 border-primary-light pt-3 text-left text-lg text-primary-dark  hover:text-[#F97E19]   sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2"
              >
                Admin
              </Link>
            ) : null}
            {isAuthenticated ? (
              <div>
                <button
                  type="button"
                  className="mb-2 mr-2 rounded-lg bg-[#0D2438] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#F97E19] focus:outline-none focus:ring-4 focus:ring-blue-300 "
                  onClick={logOut}
                >
                  logout
                </button>
              </div>
            ) : (
              <Link to={routes.login()}>
                {' '}
                <button
                  type="button"
                  className="mb-2 mr-2 rounded-lg bg-[#0D2438] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#F97E19] focus:outline-none focus:ring-4 focus:ring-blue-300 "
                >
                  login
                </button>
              </Link>
            )}
          </div>
        </div>
      </motion.nav>

      <main>{children}</main>

      <AppFooter />
    </>
  )
}

export default HeaderFooterLayout
