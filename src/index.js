// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
// // import reportWebVitals from './reportWebVitals'
// import '@fortawesome/fontawesome-free/css/all.css'



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )



import React from 'react'
import { createRoot } from 'react-dom'
import App from './App'
import './index.css'
// import reportWebVitals from './reportWebVitals'
import '@fortawesome/fontawesome-free/css/all.css'


const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

)
// reportWebVitals()
