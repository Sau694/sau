function expandCard(card) {
    document.getElementById("expandedCard").style.display = "flex";
    document.getElementById("expandedImage").src = card.getAttribute("data-image");
    document.getElementById("expandedTitle").textContent = card.querySelector("h3").textContent;
    document.getElementById("expandedDescription").textContent = card.getAttribute("data-description");
    document.getElementById("expandedFee").textContent = "Service Fee: " + card.getAttribute("data-fee");
}

function closeCard() {
    document.getElementById("expandedCard").style.display = "none";
}