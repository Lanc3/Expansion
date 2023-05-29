import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ClientPage = () => {
  return (
    <>
      <MetaTags title="Client" description="Client page" />

      <h1>ClientPage</h1>
      <p>
        Find me in <code>./web/src/pages/ClientPage/ClientPage.js</code>
      </p>
      <p>
        My default route is named <code>client</code>, link to me with `
        <Link to={routes.client()}>Client</Link>`
      </p>
    </>
  )
}

export default ClientPage
