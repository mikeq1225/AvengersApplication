import React, { useState, useEffect } from "react"
import validator from "validator"
import "../styles/Form.css"
import { addHero } from "../actions/heros"
import axios from "axios"

export default (props) => {
	const [firstName, setFirstName] = useState("")
	const [firstNameError, setFirstNameError] = useState("")
	const [lastName, setLastName] = useState("")
	const [lastNameError, setLastNameError] = useState("")
	const [email, setEmail] = useState("")
	const [emailError, setEmailError] = useState("")
	const [address, setAddress] = useState("")
	const [addressError, setAddressError] = useState("")
	const [phone, setPhone] = useState("")
	const [phoneError, setPhoneError] = useState("")
	const [contactMethod, setContactMethod] = useState("phone")
	const [gender, setGender] = useState("")
	const [website, setWebsite] = useState("")
	const [websiteError, setWebsiteError] = useState("")
	const [count, setCount] = useState("")

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

		if (!validator.isAlphanumeric(address, "en-US")) {
			valid = false
			setAddressError(` -- Can't be blank or have special characters`)
		} else {
			setAddressError("")
		}

		if (!validator.isAlphanumeric(phone, "en-US")) {
			valid = false
			setPhoneError(` -- Can't be blank`)
		} else {
			setPhoneError("")
		}

		// if (!validator.equals(confirm, phone)) {
		// 	valid = false
		// 	setConfirmError(` -- Must match phone`)
		// } else {
		// 	setConfirmError("")
		// }

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
				address,
				website,
			}).then(() => {
				props.history.push("/thanks")
			})
		}
	}
	useEffect(() => {
		axios.get("/heros").then((resp) => {
			setCount(resp.data.length)
		})
	}, [count])

	// const card = {
	// 	suits: ["clubs", "spades", "hearts", "diamonds"],
	// 	faces: [2, 3, 4, 5, 6, 7, 8, 9, 10],
	// }
	// let deck = []
	// const cards = card.suits.map((suit) => {
	// 	return card.faces.map((face) => {
	// 		return deck.push(face + " " + suit)
	// 	})
	// })

	// console.log(deck)
	// console.log(cards)

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
		<div id="avengersApplication">
			<h1>Avengers Application</h1>
			<form onSubmit={trySubmit} className="formBox">
				<div className="personalDiv">
					<p>Personal Details</p>
					<div className="rowsDiv">
						<div>
							<label
								className={firstNameError ? "error" : ""}
								htmlFor="firstName"
							>
								First Name: {firstNameError && firstNameError}
							</label>
							<input
								type="text"
								id="firstName"
								placeholder="John"
								className={firstNameError ? "errorBox" : ""}
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</div>
						<div>
							<label
								className={lastNameError ? "error" : ""}
								htmlFor="lastName"
							>
								Last Name: {lastNameError && lastNameError}
							</label>
							<input
								type="text"
								id="lastName"
								placeholder="Smith"
								className={lastNameError ? "errorBox" : ""}
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
					</div>
					<div className="rowsDiv">
						<div>
							<label className={emailError ? "error" : ""} htmlFor="email">
								Email: {emailError && emailError}
							</label>
							<input
								type="email"
								id="email"
								placeholder="captianawesome@email.com"
								className={emailError ? "errorBox" : ""}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label className={addressError ? "error" : ""} htmlFor="address">
								Address: {addressError && addressError}
							</label>
							<input
								type="text"
								id="address"
								placeholder="200 Park Avenue
						Manhattan, New York 10166"
								className={addressError ? "errorBox" : ""}
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
						</div>
					</div>
					<div className="rowsDiv">
						<div>
							<label className={phoneError ? "error" : ""} htmlFor="phone">
								Phone: {phoneError && phoneError}
							</label>
							<input
								type="tel"
								id="phone"
								placeholder="555-867-5309"
								className={phoneError ? "errorBox" : ""}
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
						<div>
							<p className="bestContact" htmlFor="phone">
								Choose contact method:
							</p>
							<label htmlFor="contactPhone">Phone</label>
							<input
								name="bestContact"
								type="radio"
								id="contactPhone"
								checked={contactMethod === "phone" ? true : false}
								value={phone}
								onChange={(e) => setContactMethod("phone")}
							/>
							<label htmlFor="contactEmail">Email</label>
							<input
								name="bestContact"
								type="radio"
								id="contactEmail"
								checked={contactMethod === "email" ? true : false}
								value={email}
								onChange={(e) => setContactMethod("email")}
							/>
							<label htmlFor="contactAddress">Address</label>
							<input
								name="bestContact"
								type="radio"
								id="contactAddress"
								checked={contactMethod === "address" ? true : false}
								value={address}
								onChange={(e) => setContactMethod("address")}
							/>
						</div>
					</div>
				</div>
				<div>
					{/* <label className={confirmError ? "error" : ""} htmlFor="confirm">
						Confirm Password {confirmError && confirmError}
					</label>
					<input
						type="password"
						id="confirm"
						placeholder=""
						className={confirmError ? "errorBox" : ""}
						value={confirm}
						onChange={(e) => setConfirm(e.target.value)}
					/> */}
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
