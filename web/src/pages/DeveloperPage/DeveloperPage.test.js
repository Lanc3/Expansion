import { render } from '@redwoodjs/testing/web'

import DeveloperPage from './DeveloperPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DeveloperPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeveloperPage />)
    }).not.toThrow()
  })
})
