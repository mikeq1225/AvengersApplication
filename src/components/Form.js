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
	const [phone, setPhone] = useState("")
	const [phoneError, setPhoneError] = useState("")
	const [contactMethod, setContactMethod] = useState("phone")
	const [gender, setGender] = useState("")
	const [website, setWebsite] = useState("")
	const [websiteError, setWebsiteError] = useState("")
	const [count, setCount] = useState("")

	const powersCheckboxes = [
		{
			name: "Flight",
			key: "Flight",
			label: "Flight",
		},
		{
			name: "Invisibility",
			key: "Invisibility",
			label: "Invisibility",
		},
		{
			name: "Super Strength",
			key: "Super Strength",
			label: "Super Strength",
		},
		{
			name: "X-Ray Vision",
			key: "X-Ray Vision",
			label: "X-Ray Vision",
		},
		{
			name: "Super Flexibility",
			key: "Super Flexibility",
			label: "Super Flexibility",
		},
		{
			name: "Shape shifting",
			key: "Shape shifting",
			label: "Shape shifting",
		},
		{
			name: "Super Speed",
			key: "Super Speed",
			label: "Super Speed",
		},
		{
			name: "Telekinesis",
			key: "Telekinesis",
			label: "Telekinesis",
		},
	]

	function trySubmit(e) {
		e.preventDefault()

		let valid = true
		if (!validator.isAlpha(firstName, "en-US")) {
			valid = false
			setFirstNameError(` -- Required - can only contain letters`)
		} else {
			setFirstNameError("")
		}

		if (!validator.isAlpha(lastName, "en-US")) {
			valid = false
			setLastNameError(` -- Required - can only contain letters`)
		} else {
			setLastNameError("")
		}

		if (!validator.isEmail(email)) {
			valid = false
			setEmailError(` -- Must be a valid email address`)
		} else {
			setEmailError("")
		}

		if (!validator.isMobilePhone(phone, "en-US")) {
			valid = false
			setPhoneError(` -- Enter phone number`)
		} else {
			setPhoneError("")
		}

		// if (!validator.equals(confirm, phone)) {
		// 	valid = false
		// 	setConfirmError(` -- Must match phone`)
		// } else {
		// 	setConfirmError("")
		// }

		// if (!validator.isURL(website)) {
		// 	valid = false
		// 	setWebsiteError(` -- Must be a valid website address`)
		// } else {
		// 	setWebsiteError("")
		// }

		if (valid) {
			addHero({
				firstName,
				lastName,
				email,
				address,
				phone,
				contactMethod,
				gender,
			}).then(() => {
				setEmail("")
				setWebsite("")
				setFirstName("")
				setLastName("")
				setAddress("")
				setContactMethod("")
				setGender("")
				props.history.push("/thanks")
			})
		}
	}
	useEffect(() => {
		axios.get("/heros").then((resp) => {
			setCount(resp.data.length)
		})
	}, [count])

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
							<label htmlFor="address">Address:</label>
							<input
								type="text"
								id="address"
								placeholder="200 Park Avenue
						Manhattan, New York 10166"
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
					<div className="rowsDiv">
						<label htmlFor="gender">Gender:</label>
						<select
							name="gender"
							id="gender"
							onChange={(e) => setGender(e.target.value)}
						>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
							<option value="noChoice">Choose not to answer</option>
						</select>
					</div>
				</div>
				<div className="powersDiv">
					<p>Super Powers</p>
					<h2>Check all that apply</h2>
					{powersCheckboxes.map((box, i) => (
						<div key={box.key + i}>
							<input type="checkbox" name={box.name} value={box.value}></input>
							<label>{box.label}</label>
						</div>
					))}
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
