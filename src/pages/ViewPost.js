import React from 'react'
import DefaultFooter from '../components/footer/default/DefaultFooter'
import Header from '../components/header/navbar/Header'
import ViewAddPost from '../components/main/post/posts/viewPost/ViewAddPost'

const ViewPost = () => {
  return (
    <>
      <Header/>
      <ViewAddPost />
      <DefaultFooter/>
    </>
  )
}

export default ViewPost
