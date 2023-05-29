// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ContactDetails {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ContactDetails from './ContactDetails'

export const generated = () => {
  return <ContactDetails />
}

export default {
  title: 'Components/ContactDetails',
  component: ContactDetails,
}
