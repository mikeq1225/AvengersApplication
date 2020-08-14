import React from "react"
import { Link } from "react-router-dom"

export default (props) => {
	return (
		<div>
			<h1>Avengers Initiative</h1>
			<Link to="/apply">
				<button type="button">Apply to the Avengers</button>
			</Link>
		</div>
	)
}
