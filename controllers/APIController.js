const apiKey = "6bcc40100c94445297fd54d38ac8e470";
const getUrlAPI = async () => {
  const urlAPI = `https://newsapi.org/v2/everything?q=tesla&from=2023-09-12&sortBy=publishedAt&apiKey=${apiKey}`;
  console.log(urlAPI);
  try {
    const response = await fetch(urlAPI);
    if (!response) {
      throw new Error(`Http request error: ${response}`);
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.log(error);
  }
};

export default getUrlAPI;
