// My api key
const apiKey = {
  key: "1560acd2-d447-42b7-88cb-f2ae758bc40a",
};

// GET Fetch Requesition
function formatDate(date) {
  const fullDate = new Date(date);
  const year = fullDate.getFullYear();
  const month = fullDate.getMonth() + 1;
  const day = fullDate.getDate() + 1;

  return `${day}/${month}/${year}`;
}

fetch(
  `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apiKey.key}`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro ao executar requisição, status ${response.status}`);
    }
    return response.json();
  })
  .then((api) => {
    let result = "";

    // Show api information
    for (let i = 0; i < 10; i++) {
      result += `
        <div class="container">
          <img src="./img/coin.jpg" alt="" with="100" height="100" />
          <div class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
            <span>${formatDate(api.data[i].first_historical_data)}</span>
          </div>
        </div> <hr/>`;

      document.getElementById("#coins").innerHTML = result;
    }
  })
  .catch((error) => {
    console.log(error);
  });
