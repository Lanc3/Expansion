import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Project/ProjectsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_PROJECT_MUTATION = gql`
  mutation DeleteProjectMutation($id: Int!) {
    deleteProject(id: $id) {
      id
    }
  }
`

const ProjectsList = ({ projects }) => {
  const [deleteProject] = useMutation(DELETE_PROJECT_MUTATION, {
    onCompleted: () => {
      toast.success('Project deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete project ' + id + '?')) {
      deleteProject({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Created at</th>
            <th>Image</th>
            <th>Video</th>
            <th>Client name</th>
            <th>Client website</th>
            <th>Objective</th>
            <th>Tools</th>
            <th>Body</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{truncate(project.id)}</td>
              <td>{truncate(project.title)}</td>
              <td>{truncate(project.category)}</td>
              <td>{timeTag(project.createdAt)}</td>
              <td>{truncate(project.image)}</td>
              <td>{truncate(project.video)}</td>
              <td>{truncate(project.clientName)}</td>
              <td>{truncate(project.clientWebsite)}</td>
              <td>{truncate(project.objective)}</td>
              <td>{truncate(project.tools)}</td>
              <td>{truncate(project.body)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.project({ id: project.id })}
                    title={'Show project ' + project.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProject({ id: project.id })}
                    title={'Edit project ' + project.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete project ' + project.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(project.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectsList
