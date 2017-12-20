/* General ******************** */

document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

Array.from(document.querySelectorAll('.btc-amount')).forEach((el) => {
  el.textContent = window.location.search.split('amount=')[1] || 0.01;
});

const sections = {
  loading: document.getElementById("section-loading"),
  actions: document.getElementById("section-actions"),
  transaction: document.getElementById("section-transaction")
};

function showSection(section) {
  for (let key in sections) {
    sections[key].setAttribute("hidden", "hidden");
  }
  sections[section].removeAttribute("hidden");
}

function checkTransaction(address) {
  return new Promise((resolve) => {

    // @todo
    setTimeout(() => {
      document.getElementById("address").textContent = address;
      document.getElementById("transaction-status").textContent = "Pending";
      document.getElementById("transaction-amount").textContent = "1 BTC";
      document.getElementById("transaction-from-address").textContent = "954hng9n45";
      resolve();
    }, 1000);

  });
}

function generateWalletAddress() {
  return new Promise((resolve) => {

    // @todo 
    setTimeout(() => {
      resolve('sample-wallet-address');
    }, 1000);

  });
}

document.getElementById("generate-address-button").addEventListener("click", (event) => {
  showSection("loading");
  generateWalletAddress()
    .then((address) => checkTransaction(address))
    .then(() => showSection("transaction"));
});
