const BtnEl = document.getElementById("btn");
const factEl = document.getElementById("fact");

const apiKey = "ASkhKl4RIFaQX3ZmG/sp9A==lNvqvram3Rfx6IWl";
const apiURL = "https://api.api-ninjas.com/v1/facts?limit=1";

const option = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function funFact() {
  try {
    factEl.innerText = "Updating...";
    BtnEl.disabled = true;
    BtnEl.innerText = "Updating ...";
    const response = await fetch(apiURL, option);
    const data = await response.json();
    factEl.innerText = data[0].fact;
    BtnEl.disabled = false;
    BtnEl.innerText = "Refresh";
  } catch (error) {
    factEl.innerText = "An Error Happen, try again later";
    BtnEl.disabled = false;
    BtnEl.innerText = "Refresh";
  }
}

BtnEl.addEventListener("click", funFact);
