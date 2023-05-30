import { Link, routes } from '@redwoodjs/router'

import NicolaPosts from 'src/components/NicolaPost/NicolaPosts'

export const QUERY = gql`
  query FindNicolaPosts {
    nicolaPosts {
      id
      title
      body
      createdAt
      likeAmount
      Image
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No nicolaPosts yet. '}
      <Link to={routes.newNicolaPost()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ nicolaPosts }) => {
  return <NicolaPosts nicolaPosts={nicolaPosts} />
}
