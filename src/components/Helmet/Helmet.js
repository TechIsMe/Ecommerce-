


import React from 'react'

function Helmet(props) {
    document.title = " Pursuit of bag -" + props.title
  return (
    <div className='w-100'>{props.children}</div>

    // <Helmet title={'Home'}></Helmet>
  )
}

export default Helmet