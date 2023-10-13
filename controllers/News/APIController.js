const apiKey = "6bcc40100c94445297fd54d38ac8e470";
let country = "us";
let category = "general";
let pageSize = 5;
const getUrlAPI = async (page) => {
  const urlAPI = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;
  console.log(urlAPI);
  try {
    const response = await fetch(urlAPI);
    if (!response) {
      throw new Error(`Http request error: ${response}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getUrlAPI;
