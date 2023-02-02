import React from 'react'
import Footer from '../components/footer/Footer'
import Description from '../components/header/Description/Description'
import DescriptionMenu from '../components/header/Description/description-menu/DescriptionMenu'
import Header from '../components/header/navbar/Header'
import ErrorPage from '../components/main/post/error/ErrorPage'

const Error = () => {
  return (
      <>
      <Header />
      <Description />
      {/* <DescriptionMenu/> */}
      <ErrorPage />
      <Footer/>
    </>
  )
}

export default Error