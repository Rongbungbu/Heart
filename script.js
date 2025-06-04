document.addEventListener("DOMContentLoaded", function () {
  // Ẩn trái tim ban đầu
  const mainHeart = document.querySelector(".heart");
  const heartMini = document.querySelector(".heart-mini");
  const heartMini2 = document.querySelector(".heart-mini-1");
  if (mainHeart) mainHeart.style.display = "none";
  if (heartMini) heartMini.style.display = "none";
  if (heartMini2) heartMini2.style.display = "none";

  // Phát âm thanh khi trái tim hiện lên
  const audio = document.createElement("audio");
  audio.src = "heartbeat-sound-effect-111218.mp3";
  audio.volume = 0.5;
  document.body.appendChild(audio);

  // Số lượng chữ LOVE rơi
  const count = 30;
  for (let i = 0; i < count; i++) {
    const love = document.createElement("div");
    love.className = "love-rain";
    love.textContent = "Love";
    love.style.position = "fixed";
    // Random vị trí ngang trên toàn viewport
    love.style.left = Math.random() * (window.innerWidth - 80) + "px";
    love.style.top = -60 - Math.random() * 100 + "px";
    love.style.zIndex = 10;
    love.style.opacity = 0.8 + Math.random() * 0.2;
    love.style.fontSize = 24 + Math.random() * 32 + "px";
    love.style.color = `hsl(${Math.floor(Math.random() * 360)},80%,60%)`;
    love.style.fontWeight = "bold";
    love.style.fontFamily = "Arial, sans-serif";
    love.style.animation = "rain-fall 2.5s linear infinite";
    love.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(love);
  }

  // Sau 5 giây, làm mờ dần hiệu ứng mưa rơi nhưng KHÔNG hiện trái tim ngay
  setTimeout(() => {
    document.querySelectorAll(".love-rain").forEach((e) => {
      e.style.transition = "opacity 5s";
      e.style.animation = "none";
      e.style.opacity = 0;
      setTimeout(() => e.remove(), 5000);
    });
    // Hiện trái tim sau khi hiệu ứng mưa đã biến mất (thêm 3s)
    setTimeout(() => {
      if (mainHeart) mainHeart.style.display = "flex";
      if (heartMini) heartMini.style.display = "flex";
      if (heartMini2) heartMini2.style.display = "flex";
      audio.play(); // Phát nhạc khi trái tim hiện lên
    }, 1000);
  }, 5000);
});
