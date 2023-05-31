import { FiClock, FiTag } from 'react-icons/fi'

import { useState } from 'react'

import ExpandingText from '../ExpandingText/ExpandingText'
import LikeButton from '../LikeButton'
const ArticleItem = ({ article, notAaron }) => {
  const [show, setShow] = useState(false)
  const toggleIcon = (value) => {
    setShow(value)
  }
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
    <div className="mb-8 flex w-full rounded-xl border-b-2 border-l-2 border-r-2 border-t-2 border-expansion-orange bg-[#0D2438]  px-8 sm:mr-2 lg:mr-24">
      <div className="w-full justify-center">
        <div className="flex flex-row">
          <p className="font-general-medium mb-2 mt-14  text-left text-3xl font-bold text-expansion-orange sm:mt-20 sm:text-4xl">
            {article.title}
          </p>
        </div>

        <ExpandingText
          data={article}
          notAaron={notAaron}
          toggleCallback={(value) => {
            toggleIcon(value)
          }}
        />

        <div className="flex">
          <div className="mb-6 mr-10  flex items-center rounded-xl border-2 border-expansion-orange p-2">
            <FiClock className="text-lg text-white " />
            <span className="font-general-regular ml-2 leading-none text-white ">
              {convertToReadableDate(article.createdAt)}
            </span>
          </div>
          <div className="mb-6 flex items-center rounded-xl border-2 border-expansion-orange p-2">
            <FiTag className="text-lg text-white " />
            <span className="font-general-regular ml-2  leading-none text-white">
              Expansion.ie
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleItem
