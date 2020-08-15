import React, { useState } from "react"
import validator from "validator"
import "../styles/Form.css"
import { addCandidate } from "../actions/candidates"

export default (props) => {
	const [firstName, setFirstName] = useState("")
	const [firstNameError, setFirstNameError] = useState("")
	const [lastName, setLastName] = useState("")
	const [lastNameError, setLastNameError] = useState("")
	const [email, setEmail] = useState("")
	const [emailError, setEmailError] = useState("")
	const [address, setAddress] = useState("")
	const [city, setCity] = useState("")
	const [stateAbbr, setStateAbbr] = useState("")
	const [zipCode, setZipCode] = useState("")
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
		{
			name: "power",
			value: "Durability",
			label: "Durability",
		},
		{
			name: "power",
			value: "Regeneration",
			label: "Regeneration",
		},
		{
			name: "power",
			value: "Teleportation",
			label: "Teleportation",
		},
		{
			name: "power",
			value: "Prophecy",
			label: "Prophecy",
		},
		{
			name: "power",
			value: "Time Travel",
			label: "Time Travel",
		},
		{
			name: "power",
			value: "Super Intelligence",
			label: "Super Intelligence",
		},
		{
			name: "power",
			value: "Mind-Control",
			label: "Mind-Control",
		},
		{
			name: "power",
			value: "Immortality",
			label: "Immortality",
		},
		{
			name: "power",
			value: "Indomitable Will",
			label: "Indomitable Will",
		},
		{
			name: "power",
			value: "Quantum Manipulation",
			label: "Quantum Manipulation",
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
			addCandidate({
				firstName,
				lastName,
				email,
				address,
				city,
				stateAbbr,
				zipCode,
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
					</div>
					<div className="rowsDiv">
						<div>
							<label htmlFor="address">Address:</label>
							<input
								type="text"
								id="address"
								placeholder="200 Park Avenue"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
						</div>
					</div>
					<div className="rowsDiv">
						<div>
							<label htmlFor="city">City:</label>
							<input
								type="text"
								id="city"
								placeholder="
						Manhattan"
								value={city}
								onChange={(e) => setCity(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="state">State:</label>
							<select
								type="text"
								id="state"
								defaultValue="New York"
								onChange={(e) => setStateAbbr(e.target.value)}
							>
								<option value="Alabama">Alabama</option>
								<option value="Alaska">Alaska</option>
								<option value="Arizona">Arizona</option>
								<option value="Arkansas">Arkansas</option>
								<option value="California">California</option>
								<option value="Colorado">Colorado</option>
								<option value="Connecticut">Connecticut</option>
								<option value="Delaware">Delaware</option>
								<option value="District of Columbia">
									District of Columbia
								</option>
								<option value="Florida">Florida</option>
								<option value="Georgia">Georgia</option>
								<option value="Guam">Guam</option>
								<option value="Hawaii">Hawaii</option>
								<option value="Idaho">Idaho</option>
								<option value="Illinois">Illinois</option>
								<option value="Indiana">Indiana</option>
								<option value="Iowa">Iowa</option>
								<option value="Kansas">Kansas</option>
								<option value="Kentucky">Kentucky</option>
								<option value="Louisiana">Louisiana</option>
								<option value="Maine">Maine</option>
								<option value="Maryland">Maryland</option>
								<option value="Massachusetts">Massachusetts</option>
								<option value="Michigan">Michigan</option>
								<option value="Minnesota">Minnesota</option>
								<option value="Mississippi">Mississippi</option>
								<option value="Missouri">Missouri</option>
								<option value="Montana">Montana</option>
								<option value="Nebraska">Nebraska</option>
								<option value="Nevada">Nevada</option>
								<option value="New Hampshire">New Hampshire</option>
								<option value="New Jersey">New Jersey</option>
								<option value="New Mexico">New Mexico</option>
								<option value="New York">New York</option>
								<option value="North Carolina">North Carolina</option>
								<option value="North Dakota">North Dakota</option>
								<option value="Ohio">Ohio</option>
								<option value="Oklahoma">Oklahoma</option>
								<option value="Oregon">Oregon</option>
								<option value="Pennsylvania">Pennsylvania</option>
								<option value="Puerto Rico">Puerto Rico</option>
								<option value="Rhode Island">Rhode Island</option>
								<option value="South Carolina">South Carolina</option>
								<option value="South Dakota">South Dakota</option>
								<option value="Tennessee">Tennessee</option>
								<option value="Texas">Texas</option>
								<option value="Utah">Utah</option>
								<option value="Vermont">Vermont</option>
								<option value="Virginia">Virginia</option>
								<option value="Virgin Islands">Virgin Islands</option>
								<option value="Washington">Washington</option>
								<option value="West Virginia">West Virginia</option>
								<option value="Wisconsin">Wisconsin</option>
								<option value="Wyoming">Wyoming</option>
							</select>
						</div>
						<div>
							<label htmlFor="zipCode">Zip Code:</label>
							<input
								type="number"
								id="zipCode"
								placeholder="10116"
								value={zipCode}
								onChange={(e) => setZipCode(e.target.value)}
							/>
						</div>
					</div>
					<div className="rowsDiv">
						<div>
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
						<div>
							<p className="bestContact" htmlFor="phone">
								Preferred contact method:
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
				</div>
				<div className="powersDiv">
					<p>Super Powers</p>
					<h2>Check all that apply</h2>
					<ul>
						{powersCheckboxes.map((box, i) => (
							<li key={box.name + i}>
								<input
									type="checkbox"
									name={box.name}
									value={box.value}
									onClick={() => addToPowers()}
								></input>
								<label>{box.label}</label>
							</li>
						))}
					</ul>
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
