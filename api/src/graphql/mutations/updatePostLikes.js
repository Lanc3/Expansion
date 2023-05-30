// api/src/graphql/mutations/updatePostLikes.js

import { db } from 'src/lib/db'

export const updatePostLikes = async ({ id }) => {
  const post = await db.post.update({
    where: { id },
    data: {
      likeAmount: {
        increment: 1,
      },
    },
  })

  return post
}
