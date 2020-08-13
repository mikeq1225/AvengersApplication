import React, { useState } from "react"
import validator from "validator"
import "../styles/Form.css"
import { addHero } from "../actions/heros"

export default (props) => {
	const [firstName, setFirstName] = useState("")
	const [firstNameError, setFirstNameError] = useState("")
	const [lastName, setLastName] = useState("")
	const [lastNameError, setLastNameError] = useState("")
	const [email, setEmail] = useState("")
	const [emailError, setEmailError] = useState("")
	const [username, setUsername] = useState("")
	const [usernameError, setUsernameError] = useState("")
	const [password, setPassword] = useState("")
	const [passwordError, setPasswordError] = useState("")
	const [confirm, setConfirm] = useState("")
	const [confirmError, setConfirmError] = useState("")
	const [website, setWebsite] = useState("")
	const [websiteError, setWebsiteError] = useState("")

	function trySubmit(e) {
		e.preventDefault()

		let valid = true
		if (!validator.isAlpha(firstName, "en-US")) {
			valid = false
			setFirstNameError(` -- Can't be blank & can only contain letters`)
		} else {
			setFirstNameError("")
		}

		if (!validator.isAlpha(lastName, "en-US")) {
			valid = false
			setLastNameError(` -- Can't be blank & can only contain letters`)
		} else {
			setLastNameError("")
		}

		if (!validator.isEmail(email)) {
			valid = false
			setEmailError(` -- Must be a valid email address`)
		} else {
			setEmailError("")
		}

		if (!validator.isAlphanumeric(username, "en-US")) {
			valid = false
			setUsernameError(` -- Can't be blank or have special characters`)
		} else {
			setUsernameError("")
		}

		if (!validator.isAlphanumeric(password, "en-US")) {
			valid = false
			setPasswordError(` -- Can't be blank`)
		} else {
			setPasswordError("")
		}

		if (!validator.equals(confirm, password)) {
			valid = false
			setConfirmError(` -- Must match password`)
		} else {
			setConfirmError("")
		}

		if (!validator.isURL(website)) {
			valid = false
			setWebsiteError(` -- Must be a valid website address`)
		} else {
			setWebsiteError("")
		}

		if (valid) {
			addHero({
				firstName,
				lastName,
				email,
				username,
				website,
			}).then(() => {
				props.history.push("/thanks")
			})
		}
	}

	// const card = {
	// 	suits: ["clubs", "spades", "hearts", "diamonds"],
	// 	faces: [2, 3, 4, 5, 6, 7, 8, 9, 10],
	// }

	// const cards = card.suits.map((suit) => {
	// 	return card.faces.map((face) => {
	// 		return face + " " + suit
	// 	})
	// })

	// const deck = [...cards[0], ...cards[1], ...cards[2], ...cards[3]]
	// console.log(cards)
	// console.log(deck)

	// function makeDeck(card) {
	// 	let cards = []
	// 	card.suits.map((suit) => {
	// 		return card.faces.map((face) => {
	// 			cards.push(face + " " + suit)
	// 			return cards
	// 		})
	// 	})
	// 	console.log(cards)
	// }

	// makeDeck(card)

	return (
		<div>
			<form onSubmit={trySubmit} className="formBox">
				<h1>Profile Form - All Fields Required</h1>
				<div>
					<label className={firstNameError ? "error" : ""} htmlFor="firstName">
						First Name {firstNameError && firstNameError}
					</label>
					<input
						type="text"
						id="firstName"
						placeholder="ex. John"
						className={firstNameError ? "errorBox" : ""}
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div>
					<label className={lastNameError ? "error" : ""} htmlFor="lastName">
						Last Name {lastNameError && lastNameError}
					</label>
					<input
						type="text"
						id="lastName"
						placeholder="ex. Doe"
						className={lastNameError ? "errorBox" : ""}
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div>
					<label className={emailError ? "error" : ""} htmlFor="email">
						Email {emailError && emailError}
					</label>
					<input
						type="email"
						id="email"
						placeholder="ex. johndoe@example.com"
						className={emailError ? "errorBox" : ""}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label className={usernameError ? "error" : ""} htmlFor="username">
						Username {usernameError && usernameError}
					</label>
					<input
						type="text"
						id="username"
						placeholder="ex. JDoe12"
						className={usernameError ? "errorBox" : ""}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label className={passwordError ? "error" : ""} htmlFor="password">
						Password {passwordError && passwordError}
					</label>
					<input
						type="password"
						id="password"
						placeholder="Enter Your Password"
						className={passwordError ? "errorBox" : ""}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<label className={confirmError ? "error" : ""} htmlFor="confirm">
						Confirm Password {confirmError && confirmError}
					</label>
					<input
						type="password"
						id="confirm"
						placeholder="Confirm Your Password"
						className={confirmError ? "errorBox" : ""}
						value={confirm}
						onChange={(e) => setConfirm(e.target.value)}
					/>
				</div>
				<div>
					<label className={websiteError ? "error" : ""} htmlFor="website">
						Website Address {websiteError && websiteError}
					</label>
					<input
						type="url"
						id="website"
						placeholder="Enter a Website URL"
						className={websiteError ? "errorBox" : ""}
						value={website}
						onChange={(e) => setWebsite(e.target.value)}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
