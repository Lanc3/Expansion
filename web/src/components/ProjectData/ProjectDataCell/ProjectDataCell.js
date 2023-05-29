import ProjectData from 'src/components/ProjectData/ProjectData'

export const QUERY = gql`
  query FindProjectDataById($id: Int!) {
    projectData: projectData(id: $id) {
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

export const Empty = () => <div>ProjectData not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ projectData }) => {
  return <ProjectData projectData={projectData} />
}
