import { useCountUp } from 'react-countup'

import CounterItem from '../CounterItem/CounterItem'
const AboutCounter = () => {
  useCountUp({ ref: 'experienceCounter', end: 15, duration: 2 })
  useCountUp({ ref: 'githubStarsCounter', end: 4, duration: 2 })
  useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 })
  useCountUp({ ref: 'projectsCounter', end: 30, duration: 2 })
  return (
    <div className="mt-10 bg-primary-light shadow-sm sm:mt-20">
      <div className="font-general-medium container mx-auto block items-center py-20 sm:flex sm:justify-between">
        <CounterItem
          title="Combined Years of experience"
          counter={<span id="experienceCounter" />}
          measurement=""
        />

        <CounterItem
          title="Projects Completed"
          counter={<span id="githubStarsCounter" />}
          measurement=""
        />

        <CounterItem
          title="Positive feedback"
          counter={<span id="feedbackCounter" />}
          measurement="%"
        />

        <CounterItem
          title="Projects we Consulted on"
          counter={<span id="projectsCounter" />}
          measurement=""
        />
      </div>
    </div>
  )
}

export default AboutCounter
