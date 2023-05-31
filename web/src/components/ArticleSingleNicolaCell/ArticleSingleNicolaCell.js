import NicolaSinglePage from '../NicolaSinglePage/NicolaSinglePage'

import AnimatedLoading from '../AnimatedLoading/AnimatedLoading'

export const QUERY = gql`
  query ArticleQuery($id: Int!) {
    article: nicolaPost(id: $id) {
      id
      title
      body
      createdAt
      likeAmount
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

export const Success = ({ article }) => {
  return (
    <div>
      <NicolaSinglePage article={article} />
    </div>
  )
}
