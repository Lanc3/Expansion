import NicolaPost from 'src/components/NicolaPost/NicolaPost'

export const QUERY = gql`
  query FindNicolaPostById($id: Int!) {
    nicolaPost: nicolaPost(id: $id) {
      id
      title
      body
      createdAt
      likeAmount
      Image
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>NicolaPost not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ nicolaPost }) => {
  return <NicolaPost nicolaPost={nicolaPost} />
}
