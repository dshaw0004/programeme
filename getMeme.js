
const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9d47421c03msh44bd460da2aa854p162b07jsn18cb3388fbc9',
    'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com',
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