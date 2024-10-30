import React from 'react'

function layout({children}) {
  return (
    <>
    <h2>Home</h2>
    <div>{children}</div>
    </>
  )
}

export default layout