// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AnimatedPopUpModal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AnimatedPopUpModal from './AnimatedPopUpModal'

export const generated = () => {
  return <AnimatedPopUpModal />
}

export default {
  title: 'Components/AnimatedPopUpModal',
  component: AnimatedPopUpModal,
}
