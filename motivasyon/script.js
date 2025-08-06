const sozler = [
  "Başarı, konfor alanının dışında başlar.",
  "Bugün yapabildiğin en iyi şeyi yap!",
  "Hayal ettiğin hayatı yaşa.",
  "Her şey seninle başlar.",
  "İmkansız, sadece biraz daha zaman alır.",
  "Düşün, planla, harekete geç!",
  "Kendine inan, çünkü kimse senin yerinde yürüyemez."
];

function rastgeleSozGetir() {
  const randomIndex = Math.floor(Math.random() * sozler.length);
  return sozler[randomIndex];
}

function yenile() {
  document.getElementById("quote").textContent = rastgeleSozGetir();
}

// Sayfa ilk yüklendiğinde bir söz göster
window.onload = yenile;