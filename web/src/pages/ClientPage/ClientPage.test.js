import { render } from '@redwoodjs/testing/web'

import ClientPage from './ClientPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ClientPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClientPage />)
    }).not.toThrow()
  })
})
