import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <footer style={{width: 1512, paddingTop: 25}}>
        <p>This is our first react app ever made by me &copy; {date.getFullYear()}</p>
    </footer>
    
  )
}

export default Footer