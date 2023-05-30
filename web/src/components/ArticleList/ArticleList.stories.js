// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ArticleList {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ArticleList from './ArticleList'

export const generated = () => {
  return <ArticleList />
}

export default {
  title: 'Components/ArticleList',
  component: ArticleList,
}
