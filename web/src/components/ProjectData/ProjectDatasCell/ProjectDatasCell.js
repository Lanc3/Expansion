import { Link, routes } from '@redwoodjs/router'

import ProjectDatas from 'src/components/ProjectData/ProjectDatas'

export const QUERY = gql`
  query FindProjectDatas {
    projectDatas {
      id
      title
      category
      createdAt
      image
      video
      clientName
      clientWebsite
      objective
      tools
      body
      by
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No projectDatas yet. '}
      <Link to={routes.newProjectData()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ projectDatas }) => {
  return <ProjectDatas projectDatas={projectDatas} />
}
