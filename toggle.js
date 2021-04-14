const minicard = document.querySelector(".minicard");
const card = document.querySelector('.card');

const checkbox = document.querySelector("#checkbox")
checkbox.addEventListener('change', () => {
  card.classList.add("hide");
  minicard.classList.remove("hide");
});

const moreOptions = document.querySelector("#down")
moreOptions.addEventListener('click', () => {
  minicard.classList.add("hide");
  card.classList.remove("hide");
});
