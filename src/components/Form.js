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
	const [address, setAddress] = useState("")
	const [phone, setPhone] = useState("")
	const [phoneError, setPhoneError] = useState("")
	const [contactMethod, setContactMethod] = useState("phone")
	const [gender, setGender] = useState("noChoice")
	const [powers, setPowers] = useState([])
	const [harmedInnocents, setHarmedInnocents] = useState("no")
	const [wellKnown, setWellKnown] = useState("no")
	const [benefitSelf, setBenefitSelf] = useState("no")
	const [experienceError, setExperienceError] = useState("")
	const [essay, setEssay] = useState("")
	const [applicationDate, setApplicationDate] = useState("")
	const [dateError, setDateError] = useState("")

	const powersCheckboxes = [
		{
			name: "power",
			value: "Flight",
			label: "Flight",
		},
		{
			name: "power",
			value: "Invisibility",
			label: "Invisibility",
		},
		{
			name: "power",
			value: "Super Strength",
			label: "Super Strength",
		},
		{
			name: "power",
			value: "X-Ray Vision",
			label: "X-Ray Vision",
		},
		{
			name: "power",
			value: "Super Flexibility",
			label: "Super Flexibility",
		},
		{
			name: "power",
			value: "Shape Shifting",
			label: "Shape Shifting",
		},
		{
			name: "power",
			value: "Super Speed",
			label: "Super Speed",
		},
		{
			name: "power",
			value: "Telekinesis",
			label: "Telekinesis",
		},
	]

	function addToPowers() {
		let checkBoxes = document.querySelectorAll(`input[name=power]:checked`)
		checkBoxes = Array.from(checkBoxes)
		let newPowers = []
		for (let i = 0; i < checkBoxes.length; i++) {
			newPowers.push(checkBoxes[i].value)
		}
		setPowers(newPowers)
	}

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

		if (applicationDate === "") {
			valid = false
			setDateError(` -- Please select a valid date`)
		} else {
			setDateError("")
		}

		if (
			harmedInnocents === "yes" ||
			wellKnown === "yes" ||
			benefitSelf === "yes"
		) {
			valid = false
			setExperienceError(
				` -- Sorry, one of the questions you answered in this section disqualifies you`
			)
		} else {
			setExperienceError("")
		}

		if (valid) {
			addHero({
				firstName,
				lastName,
				email,
				address,
				phone,
				contactMethod,
				gender,
				powers,
				harmedInnocents,
				wellKnown,
				benefitSelf,
				essay,
				applicationDate,
			}).then(() => {
				props.history.push("/thanks")
			})
		}
	}

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
								Prefer contact method:
							</p>
							<input
								name="bestContact"
								type="radio"
								id="contactPhone"
								checked={contactMethod === "phone" ? true : false}
								value={phone}
								onChange={(e) => setContactMethod("phone")}
							/>
							<label htmlFor="contactPhone">Phone</label>
							<input
								name="bestContact"
								type="radio"
								id="contactEmail"
								checked={contactMethod === "email" ? true : false}
								value={email}
								onChange={(e) => setContactMethod("email")}
							/>
							<label htmlFor="contactEmail">Email</label>
							<input
								name="bestContact"
								type="radio"
								id="contactAddress"
								checked={contactMethod === "address" ? true : false}
								value={address}
								onChange={(e) => setContactMethod("address")}
							/>
							<label htmlFor="contactAddress">Address</label>
						</div>
					</div>
					<div className="rowsDiv">
						<label htmlFor="gender">Gender:</label>
						<select
							name="gender"
							id="gender"
							defaultValue="noChoice"
							onChange={(e) => setGender(e.target.value)}
						>
							<option value="female">Female</option>
							<option value="male">Male</option>
							<option value="non-binary">Non-Binary</option>
							<option value="noChoice">Decline to answer</option>
						</select>
					</div>
				</div>
				<div className="powersDiv">
					<p>Super Powers</p>
					<h2>Check all that apply</h2>
					{powersCheckboxes.map((box, i) => (
						<div key={box.name + i}>
							<input
								type="checkbox"
								name={box.name}
								value={box.value}
								onClick={() => addToPowers()}
							></input>
							<label>{box.label}</label>
						</div>
					))}
				</div>
				<div className={`experienceDiv ${experienceError ? "errorBox" : ""}`}>
					<p className={experienceError ? "error" : ""}>
						Experience {experienceError && experienceError}
					</p>
					<div className="rowsDiv">
						<label htmlFor="harmedInnocents">
							Have you hurt any innocent people or animals?{" "}
						</label>
						<select
							name="harmedInnocents"
							id="harmedInnocents"
							defaultValue="no"
							onChange={(e) => setHarmedInnocents(e.target.value)}
						>
							<option value="no">No</option>
							<option value="yes">Yes</option>
						</select>
					</div>
					<div className="rowsDiv">
						<label htmlFor="wellKnown">
							Does anyone outside of your family know about your abilities?
						</label>
						<select
							name="wellKnown"
							id="wellKnown"
							defaultValue="no"
							onChange={(e) => setWellKnown(e.target.value)}
						>
							<option value="no">No</option>
							<option value="yes">Yes</option>
						</select>
					</div>
					<div className="rowsDiv">
						<label htmlFor="benefitSelf">
							Are you applying in hopes of benefiting yourself?
						</label>
						<select
							name="benefitSelf"
							id="benefitSelf"
							defaultValue="no"
							onChange={(e) => setBenefitSelf(e.target.value)}
						>
							<option value="no">No</option>
							<option value="yes">Yes</option>
						</select>
					</div>
				</div>
				<div className="essayDiv">
					<p>Essay</p>
					<label htmlFor="essay">{`Why do you want to join? (optional)`}</label>
					<textarea
						name="essay"
						id="essay"
						rows={4}
						value={essay}
						placeholder="Tell us about yourself. Don't be afraid to be creative."
						onChange={(e) => setEssay(e.target.value)}
					></textarea>
				</div>
				<div className="submitDiv">
					<label htmlFor="applicationDate" className={dateError ? "error" : ""}>
						Today's date: {dateError && dateError}
					</label>
					<input
						type="date"
						name="applicationDate"
						id="applicationDate"
						value={applicationDate}
						className={dateError ? "errorBox" : ""}
						onChange={(e) => setApplicationDate(e.target.value)}
					></input>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	)
}
