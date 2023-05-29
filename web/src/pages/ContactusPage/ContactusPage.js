import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AnimatedLogo from 'src/components/AnimatedLogo/AnimatedLogo'
import Contact from 'src/components/Contact/Contact'
const ContactusPage = () => {
  return (
    <div className="mx-12 flex flex-col justify-center">
      <Contact />
    </div>
  )
}

export default ContactusPage
