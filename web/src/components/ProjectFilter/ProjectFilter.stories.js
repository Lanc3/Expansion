// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ProjectFilter {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ProjectFilter from './ProjectFilter'

export const generated = () => {
  return <ProjectFilter />
}

export default {
  title: 'Components/ProjectFilter',
  component: ProjectFilter,
}
