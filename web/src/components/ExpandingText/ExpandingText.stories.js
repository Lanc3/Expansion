// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ExpandingText {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ExpandingText from './ExpandingText'

export const generated = () => {
  return <ExpandingText />
}

export default {
  title: 'Components/ExpandingText',
  component: ExpandingText,
}
