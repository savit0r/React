import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'   // Ensure this file exists
import Chai from './Chai.jsx' // Ensure this file exists

function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}

const anotherUser = 'react is reacting'

const anotherElement = (
  <a href="https://google.com" target='_blank'> visit google </a>
)
const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'click here to visit google',
  anotherUser
)


createRoot(document.getElementById('root')).render(
  reactElement
)
