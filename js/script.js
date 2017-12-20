/* General ******************** */

document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

const sections = {
  loading: document.getElementById("section-loading"),
  actions: document.getElementById("section-actions"),
  address: document.getElementById("section-address"),
  status: document.getElementById("section-status")
}

function showSection(section) {
  for (let key in sections) {
    sections[key].setAttribute("hidden", "hidden");
  }
  sections[section].removeAttribute("hidden");
}

/* Generate Wallet Address ******************** */

const generateAddressButton = document.getElementById("generate-address-button");
generateAddressButton.addEventListener("click", (event) => {
  showSection("loading");

  // Call API to get address
  setTimeout(() => {

    // Add address to HTML
    document.getElementById("new-address").textContent = "4i3thn3480thn43otn";
    showSection("address");

  }, 2000);
})


/* Check Status ******************** */

const checkStatusButton = document.getElementById("check-status-button");
checkStatusButton.addEventListener("click", (event) => {
  event.preventDefault();
  showSection("loading");

  const address = document.getElementById("address").value;
  
  // Call API to get transactions
  setTimeout(() => {

    // Add info to HTML

    document.getElementById("status-address").textContent = address;
    document.getElementById("status-amount").textContent = "0.01 BTC";
    document.getElementById("status-from-address").textContent = "elknfgi348hfno34";
    showSection("status");

  }, 2000);

})

