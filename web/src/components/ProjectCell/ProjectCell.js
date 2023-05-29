import AnimatedLoading from '../AnimatedLoading/AnimatedLoading'
export const QUERY = gql`
  query FindProjectDatas {
    project: projectDatas {
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
export const Loading = () => (
  <div>
    <AnimatedLoading />
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)
import ProjectFilter from '../ProjectFilter/ProjectFilter'
import ProjectSingle from '../ProjectSingle/ProjectSingle'
export const Success = ({ project }) => {
  return (
    <>
      <div className="mt-12 text-center">
        <p className="font-general-medium  mb-1 text-2xl text-expansion-orange sm:text-4xl">
          Our Projects
        </p>
      </div>
      <ProjectFilter projects={project} />
    </>
  )
}
