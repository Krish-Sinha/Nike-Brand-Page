import React from 'react'

const MainBody = () => {
  return (
    <main className='main'>
      <div className='main-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className='main-btn'>
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className='shopping'>
          <p>Also available On</p>

          <div className='main-icons'>
            <img src='/images/flipkart.png' alt='flipkart'/>
            <img src='/images/amazon.png' alt='amazon'/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainBody