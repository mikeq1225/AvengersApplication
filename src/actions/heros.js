import axios from "axios"

export function addHero(hero) {
	return new Promise((resolve, reject) => {
		axios.post("/heros", hero).then((resp) => {
			resolve()
		})
	})
}

export function getCount() {
	axios.get("/heros").then((resp) => {
		const count = resp.data.length
		console.log(count)
	})
}
