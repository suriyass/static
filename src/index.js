import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Header from "./header"
import MainContent from "./mainContent"
import Footer from "./footer"
// const page = (
//   <div>
//     <img src="./logo192.png" width="40px" />
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100l stars in github</li>
//       <li>Is maintained by facebook</li>
//       <li>Powers tousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>

// )





function TempName() {
	return (
		<div>
			<Header />
			<MainContent />
			<Footer />
		</div>
	)
}
ReactDOM.render(<TempName />, document.getElementById('root'))
