export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
      likeAmount
    }
  }
`
import AnimatedLoading from '../AnimatedLoading/AnimatedLoading'
export const Loading = () => (
  <div>
    <AnimatedLoading />
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import ArticleList from '../ArticleList/ArticleList'
export const Success = ({ articles }) => {
  return (
    <div className="">
      <ArticleList articles={articles} />
    </div>
  )
}
