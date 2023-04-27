import axios from "axios";


export const request = async (method, url, data) => {
	return await axios({
		method,
		url,
		data
	})
		.then(res => res.data)
		.catch(err => console.log(err));
}
