//پیام عاشقانه با افکت تایپ شدن
let message = "عشق من ، ولنتاین مبارک💕";
let index = 0;
let messageElement = document.getElementById("message");


function typeMessage() {
    if (index < message.length) {
        messageElement.innerHTML += message[index];
        index++;
        setTimeout(typeMessage, 100);
    }
}
typeMessage();

//پخش موزیک
function playMusic() {
    document.getElementById("loveSong").play();
}

//ایجاد قلب های متحرک
setInterval(() =>{
    let heart = document.createElement("div");
    heart.innerHTML = "❤"
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-10px";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDirection = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);

}, 300)