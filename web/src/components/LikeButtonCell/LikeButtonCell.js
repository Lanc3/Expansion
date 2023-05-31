import { useMutation } from '@redwoodjs/web'
import { gql } from 'graphql-tag'
import { toast } from '@redwoodjs/web/toast'

export const QUERY = gql`
  query EditPostById($id: Int!) {
    post: post(id: $id) {
      id
      title
      body
      createdAt
      likeAmount
      Image
    }
  }
`

const LIKE_POST_MUTATION = gql`
  mutation LikePostMutation($id: Int!) {
    updatePost(where: { id: $id }, data: { likeAmount: { increment: 1 } }) {
      id
      likeAmount
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ likeAmount }) => {
  const [updatePost, { loading, error }] = useMutation(LIKE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post updated')
      //navigate(routes.posts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updatePost({ variables: { id, input } })
  }
  return (
    <div>
      <button onClick={onSave} className="text-white">
        Like
      </button>
    </div>
  )
}
