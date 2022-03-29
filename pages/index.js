// TYPEWRITER EFFECT -------------------------
var messageArray = ["Hello... I'm Caitlyn, an aspiring web developer from California. Welcome to my website."];
var textPosition = 0;
var speed = 95; // lower is faster in ms

typewriter = () => {
  document.querySelector("#message").innerHTML =
    messageArray[0].substring(0, textPosition) + "<span> \u25ae</span>";

  if (textPosition++ != messageArray[0].length) setTimeout(typewriter, speed);
};

window.addEventListener("load", typewriter);

