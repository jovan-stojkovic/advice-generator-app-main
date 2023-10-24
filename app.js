const button = document.querySelector("button");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");

const api = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const res = await fetch(api);
  const {
    slip: { id, advice },
  } = await res.json();
  adviceId.innerText = id;
  adviceText.innerText = advice;
}

button.addEventListener('click', () => getAdvice());