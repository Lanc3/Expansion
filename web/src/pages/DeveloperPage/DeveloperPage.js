import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import CodeRenderer from 'src/components/CodeRenderer/CodeRenderer'
const DeveloperPage = () => {
  return (
    <>
      <MetaTags title="Developer" description="Developer page" />

      <h1>DeveloperPage</h1>
      <p>
        Find me in <code>./web/src/pages/DeveloperPage/DeveloperPage.js</code>
      </p>
      <p>
        My default route is named <code>developer</code>, link to me with `
        <Link to={routes.developer()}>Developer</Link>`
      </p>
      <CodeRenderer code={'(num) => num + 1'} />
    </>
  )
}

export default DeveloperPage
