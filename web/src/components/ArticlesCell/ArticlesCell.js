export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
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

import ArticleItem from '../ArticleItem/ArticleItem'
export const Success = ({ articles }) => {
  return (
    <div className="">
      {articles.map((article) => (
        // eslint-disable-next-line react/jsx-key
        <ArticleItem article={article} />
      ))}
    </div>
  )
}
