// web/src/components/LikeButton.js

import { useMutation } from '@redwoodjs/web'
import { gql } from 'graphql-tag'

const UPDATE_POST_LIKES = gql`
  mutation updatePostLikes($id: Int!, $likeAmount: String!) {
    updatePost(id: $id, likeAmount: $likeAmount) {
      id
      likeAmount
    }
  }
`

const LikeButton = ({ postId }) => {
  const [updatePostLikes] = useMutation(UPDATE_POST_LIKES)

  const handleLike = async () => {
    updatePostLikes({
      variables: { postId },
      optimisticResponse: {
        __typename: 'Mutation',
        updatePostLikes: { postId },
      },
    })
  }

  return (
    <button onClick={handleLike} className="text-white">
      Like
    </button>
  )
}

export default LikeButton
