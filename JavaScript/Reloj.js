export function Reloj(mode) {
  const $reloj = document.querySelector(".reloj"),
    $containerMemorama = document.querySelector(".memorama-content"),
    $modal = document.querySelector(".modal"),
    $sound = document.getElementById("sound");
  mode = Number(mode);
  let date = new Date("December 1, 2022 0:00:0");
  let seconds;
  if (mode === 2) {
    seconds = 240;
  }
  if (mode === 4) {
    seconds = 120;
  }
  if (mode > 4) {
    seconds = 10;
  }
  setInterval(() => {
    seconds--;
    date.setMinutes(0);
    date.setSeconds(seconds);
    $reloj.innerHTML = date.toLocaleTimeString().slice(2);
    if ($reloj.innerHTML === "00:00") {
      let childs = Array.from($containerMemorama.children);
      childs.forEach((e) => $containerMemorama.removeChild(e));
      $sound.src = "assets/audios/LoseGamer.flac";
      $sound.play();
      $modal.classList.remove("opacity");
      $modal.classList.remove("visibility");
      $reloj.innerHTML = "00:00";
      return;
    }
  }, 1000);
}
