import { FiClock, FiTag } from 'react-icons/fi'

import ExpandingText from '../ExpandingText/ExpandingText'
const ArticleItem = ({ article }) => {
  function convertToReadableDate(dateString) {
    const date = new Date(dateString)

    if (isNaN(date)) {
      console.error('Invalid date string')
      return null
    }

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }

    return date.toLocaleString(undefined, options)
  }

  return (
    <div className="mb-8 flex w-full rounded-xl border-b-2 border-l-2 border-r-2 border-t-2 border-[#94877c98] pl-8 sm:mr-2 lg:mr-24">
      <div className="w-full justify-center">
        <p className="font-general-medium mb-2 mt-14 text-left text-3xl font-bold text-expansion-orange sm:mt-20 sm:text-4xl">
          {article.title}
        </p>
        <ExpandingText data={article} />

        <div className="flex">
          <div className="mb-6 mr-10  flex items-center">
            <FiClock className="text-lg text-ternary-dark " />
            <span className="font-general-regular ml-2 leading-none text-primary-dark ">
              {convertToReadableDate(article.createdAt)}
            </span>
          </div>
          <div className="mb-6 flex items-center">
            <FiTag className="text-lg text-ternary-dark " />
            <span className="font-general-regular ml-2 leading-none text-primary-dark">
              Expansion.ie
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleItem
