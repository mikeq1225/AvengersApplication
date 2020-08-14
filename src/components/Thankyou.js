import React from "react"
import "../styles/Form.css"
import { Link } from "react-router-dom"

export default (props) => {
	return (
		<div className="thankYou">
			<h2>Thank You!</h2>
			<h2>Your application to join the Avengers will be processed quickly!</h2>
			<Link to="/">
				<button type="button">Return Home</button>
			</Link>
		</div>
	)
}
