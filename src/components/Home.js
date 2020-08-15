import React from "react"
import { Link } from "react-router-dom"
import "../styles/Home.css"

export default (props) => {
	return (
		<div className="home">
			<h1>Avengers Initiative Portal</h1>
			<Link to="/apply">
				<button type="button">Apply to the New Avengers</button>
			</Link>
		</div>
	)
}
