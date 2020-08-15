import axios from "axios"

export function addCandidate(candidate) {
	return new Promise((resolve, reject) => {
		axios.post("/candidates", candidate).then((resp) => {
			resolve()
		})
	})
}
