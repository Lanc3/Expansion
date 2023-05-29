import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import NicolaPostsCell from 'src/components/NicolaPost/NicolaPostsCell'
import PostsCell from 'src/components/Post/PostsCell'
import ProjectDatasCell from 'src/components/ProjectData/ProjectDatasCell'
const BlogAdminPage = () => {
  return (
    <>
      <MetaTags title="BlogAdmin" description="BlogAdmin page" />
    </>
  )
}

export default BlogAdminPage
