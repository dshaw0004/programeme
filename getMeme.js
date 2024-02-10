const url = "https://programming-memes-images.p.rapidapi.com/v1/memes";
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "",
		"X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
	},
};

async function getMemes() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		// console.log(result)
		return result;
	} catch (error) {
		console.error(error);
	}
}

export default getMemes;
