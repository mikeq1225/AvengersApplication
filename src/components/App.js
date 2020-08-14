import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Form from "./Form"
import Home from "./Home"
import Thankyou from "./Thankyou"

export default (props) => {
	return (
		<Router>
			<Route exact path="/" component={Home}></Route>
			<Route exact path="/apply" component={Form}></Route>
			<Route path="/thanks" component={Thankyou}></Route>
		</Router>
	)
}
