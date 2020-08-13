import axios from "axios"

export function addHero(hero) {
	return new Promise((resolve, reject) => {
		axios.post("/heros", hero).then((resp) => {
			resolve()
		})
	})
}
