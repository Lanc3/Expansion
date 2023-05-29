export const QUERY = gql`
  query NicolasArticlesQuery {
    articles: nicolaPosts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)
import ArticleItem from '../ArticleItem/ArticleItem'
export const Success = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => (
        // eslint-disable-next-line react/jsx-key
        <ArticleItem article={article} />
      ))}
    </ul>
  )
}