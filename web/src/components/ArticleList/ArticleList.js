import ArticleItem from '../ArticleItem/ArticleItem'
import ExpansionButton from '../ExpansionButton/ExpansionButton'
const ArticleList = ({ articles }) => {
  const MAX_ARTICLES_PER_PAGE = 3
  const [currentPage, setCurrentPage] = React.useState(1)

  const totalPages = Math.ceil(articles.length / MAX_ARTICLES_PER_PAGE)
  const startIndex = (currentPage - 1) * MAX_ARTICLES_PER_PAGE
  const endIndex = startIndex + MAX_ARTICLES_PER_PAGE
  const currentArticles = articles.slice(startIndex, endIndex)

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }
  return (
    <div>
      {currentArticles.map((article) => (
        <div key={article.id}>
          <ArticleItem article={article} />
        </div>
      ))}
      {articles.length > MAX_ARTICLES_PER_PAGE && (
        <div className="flex w-full flex-row justify-center">
          <ExpansionButton
            lable={'Previous'}
            onClickCallback={() => {
              if (currentPage === 1) {
              } else {
                handlePrevPage()
              }
            }}
          />

          <span className="p-2"> {currentPage}</span>
          <ExpansionButton
            lable={'Next'}
            onClickCallback={() => {
              if (currentPage === totalPages) {
              } else {
                handleNextPage()
              }
            }}
          />
        </div>
      )}
    </div>
  )
}

export default ArticleList
