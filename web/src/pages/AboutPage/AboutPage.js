import { useState } from 'react'

import { motion, useScroll } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AboutCounter from 'src/components/AboutCounter/AboutCounter'
import PopInArticle from 'src/components/PopInArticle/PopInArticle'

import logo from './logoNoText.png'
import nicolaImage from './nicola.jpg'
import aaronImage from './profile.png'

const aboutMeData = [
  {
    id: 2,
    bio: `Welcome to Expansion!

       Expansion was founded by Aaron Keating, a talented software engineer, and Nicola Byrne, a
    creative graphic designer. We created Expansion to work together doing what we love. We are
    a dedicated team focused on empowering businesses to expand into the online world. This
    website is here to showcase our projects and promote us to any potential employers or clients.`,
  },
  {
    id: 3,
    bio: `While we aim to build our client list and continue to grow our business we are also currently
    looking for work within the industry. Why look for employment when we have started our
    business, which we hold so dear? We want to work hard in our respective fields so that we
    ensure that Expansion never has to go anywhere, even if we are not taking on further work at
    any point.`,
  },
  {
    id: 4,
    bio: `We decided to create this space for us to have a shared portfolio as we have worked together
    on multiple projects within Expansion. It just didn’t make sense to us to separate out our
    achievements. We hope you find our website a refreshing example of like minded individuals
    coming together to help expand each other further in the design and development fields.`,
  },
]
const second = [
  {
    id: 5,
    bio: `You will find throughout this website a detailed list of all our projects and information on what
    role each of us played within them.`,
  },
  {
    id: 6,
    bio: `Now let's get into the specifics! Read on to find out more about Aaron and Nicola’s Individual
    skills and achievements`,
  },
]
const aaron = [
  {
    id: 7,
    bio: `Aaron Keating`,
  },
  {
    id: 8,
    bio: `Aaron brings his expertise in software engineering to the table with over 10 years experience in
      the development industry. With a deep understanding of coding languages and cutting-edge
      technologies.

      Aaron develops robust and customized digital solutions that cater to the unique
      needs of each business. His passion for problem-solving and knack for innovation ensure that
      our clients receive the most effective and efficient solutions for their online ventures.`,
  },
]
const nicola = [
  {
    id: 9,
    bio: `Nicola Byrne`,
  },
  {
    id: 10,
    bio: `Nicola, our talented graphics designer, has a keen eye for aesthetics and a passion for visual
      storytelling. She understands the power of branding and how it can elevate a business's online
      presence. Nicola collaborates closely with our clients to create visually stunning and cohesive
      branding elements, such as logos, websites, and marketing materials. Her designs help convey
      the essence of each business, helping to establish a strong and memorable brand identity.`,
  },
  {
    id: 11,
    bio: `Nicola has 5 years of experience in the design industry. Through working closely with Aaron as
      his designer she has gained invaluable insights into the industry that help her work in a team
      and also to have understanding to solely create projects to hand off for the development stage.
      Her skill set includes a vast range of apps within the adobe suite. She has a creative streak like
      no other, with attention to detail that can drive others mad! She has been drawing since she
      could pick up a pencil and no medium scares her away. This creativity streak shows why the
      design industry suits her so well.`,
  },
]
const mission = [
  {
    id: 12,
    bio: `Our Mission`,
  },
  {
    id: 13,
    bio: `At Expansion, we firmly believe that every small business deserves a chance to thrive in the
      digital world. Our mission is to empower entrepreneurs by providing them with the tools,
      knowledge, and support necessary to expand their business online successfully.

      We work closely with our clients, guiding them through every step of the process, from initial ideation to
      the final launch. Our collaborative approach ensures that we deliver tailored solutions that align
      with their goals and aspirations.`,
  },
]

const AboutPage = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.1,
      }}
      className="flex flex-col justify-center mx-2"
    >
      <MetaTags title="About" description="About page" />

      <div className="flex w-full flex-col justify-center">
        <div className="font-general-regular w-full text-center">
          <p className="mb-12 text-lg text-ternary-dark ">
            <PopInArticle
              textArray={aboutMeData}
              image={logo}
              animateSide={true}
            />
          </p>
          <p className="mb-12 text-lg text-ternary-dark ">
            <PopInArticle textArray={second} image={null} animateSide={false} />
          </p>
          <p className="mb-12  text-lg text-ternary-dark ">
            <PopInArticle
              textArray={aaron}
              image={aaronImage}
              animateSide={false}
            />
          </p>
          <p className="mb-12 text-lg text-ternary-dark ">
            <PopInArticle
              textArray={nicola}
              image={nicolaImage}
              animateSide={true}
            />
          </p>
          <p className="mb-12 text-lg text-ternary-dark ">
            <PopInArticle
              textArray={mission}
              image={logo}
              animateSide={false}
            />
          </p>
        </div>
      </div>
      <AboutCounter />
    </motion.div>
  )
}

export default AboutPage
