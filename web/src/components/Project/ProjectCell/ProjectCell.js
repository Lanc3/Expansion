import Project from 'src/components/Project/Project'

export const QUERY = gql`
  query ProjectQuery {
    projects: project {
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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Project not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ projects }) => {
  return <Project project={projects} />
}
