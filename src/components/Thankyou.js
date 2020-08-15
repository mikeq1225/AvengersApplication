import React from "react"
import "../styles/Thankyou.css"
import { Link } from "react-router-dom"

export default (props) => {
	return (
		<div className="thankYou">
			<h2>Thank You!</h2>
			<h2>
				If you are good enough to join the newAvengers, we will reach out to
				you!
			</h2>
			<Link to="/">
				<button type="button">Home</button>
			</Link>
		</div>
	)
}
