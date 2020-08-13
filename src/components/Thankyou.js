import React from "react"
import "../styles/Form.css"
import { Link } from "react-router-dom"

export default (props) => {
	return (
		<div className="thankYou">
			<h2>Thank You!</h2>
			<h2>Your account has been updated</h2>
			<Link to="/">
				<button type="button">Add Another User</button>
			</Link>
		</div>
	)
}
