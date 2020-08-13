import axios from "axios"

export function addUser(hero) {
	return new Promise((resolve, reject) => {
		axios.post("/heros", hero).then((resp) => {
			resolve()
		})
	})
}
