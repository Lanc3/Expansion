import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProjectDataForm from 'src/components/ProjectData/ProjectDataForm'

export const QUERY = gql`
  query EditProjectDataById($id: Int!) {
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
const UPDATE_PROJECT_DATA_MUTATION = gql`
  mutation UpdateProjectDataMutation(
    $id: Int!
    $input: UpdateProjectDataInput!
  ) {
    updateProjectData(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ projectData }) => {
  const [updateProjectData, { loading, error }] = useMutation(
    UPDATE_PROJECT_DATA_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProjectData updated')
        navigate(routes.projectDatas())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateProjectData({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ProjectData {projectData?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProjectDataForm
          projectData={projectData}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
