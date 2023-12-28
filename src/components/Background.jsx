import React from 'react'
import Navigation from './Navigation'
import ChatBot from './ChatBot'
import Header from './Header'
import Footer from './Footer'
function Background() {
  return (
    <div className='parent-container'>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 container container-part'>
            <Navigation />
          </div>
          <div className='col-md-6 container container-part'>
            <ChatBot />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Background