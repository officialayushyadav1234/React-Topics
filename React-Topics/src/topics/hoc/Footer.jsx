import React from 'react'
import Hoc from './Hoc'
const Footer = (x) => {
    console.log(x.users[0].ename);
    
  return (
    <div>
      <h1>I am Footer</h1>
    </div>
  )
}

export default Hoc(Footer)
