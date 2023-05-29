// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Route, Router, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import AdminLayout from './layouts/AdminLayout/AdminLayout'
import HeaderFooterLayout from './layouts/HeaderFooterLayout/HeaderFooterLayout'
const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
        <Private unauthenticated="home">
          <Set wrap={AdminLayout}>
            <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
            <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
            <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
            <Route path="/posts" page={PostPostsPage} name="posts" />
            <Route path="/nicola-posts/new" page={NicolaPostNewNicolaPostPage} name="newNicolaPost" />
            <Route path="/nicola-posts/{id:Int}/edit" page={NicolaPostEditNicolaPostPage} name="editNicolaPost" />
            <Route path="/nicola-posts/{id:Int}" page={NicolaPostNicolaPostPage} name="nicolaPost" />
            <Route path="/nicola-posts" page={NicolaPostNicolaPostsPage} name="nicolaPosts" />
            <Route path="/project-datas/new" page={ProjectDataNewProjectDataPage} name="newProjectData" />
            <Route path="/project-datas/{id:Int}/edit" page={ProjectDataEditProjectDataPage} name="editProjectData" />
            <Route path="/project-datas/{id:Int}" page={ProjectDataProjectDataPage} name="projectData" />
            <Route path="/project-datas" page={ProjectDataProjectDatasPage} name="projectDatas" />
            <Route path="/client" page={ClientPage} name="client" />
            <Route path="/blog-admin" page={BlogAdminPage} name="blogAdmin" />
            <Route path="/signup" page={SignupPage} name="signup" />
          </Set>
        </Private>
      </Set>
      <Set wrap={HeaderFooterLayout}>
        <Private unauthenticated="home"></Private>
        <Route path="/contactus" page={ContactusPage} name="contactus" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/nicolas-blog" page={NicolasBlogPage} name="nicolasBlog" />
        <Route path="/aarons-blog" page={AaronsBlogPage} name="aaronsBlog" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
