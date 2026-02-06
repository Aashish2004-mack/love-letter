// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 80;
    const max = 150;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "sreekuti.jpeg";
    catImg.style.width = "100%";
    catImg.style.height = "auto";
    catImg.style.objectFit = "contain";
    catImg.style.borderRadius = "10px";
    catImg.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    catImg.style.border = "3px solid white";

    buttons.style.display = "none";

    // Style and move text outside the box
    finalText.style.display = "block";
    finalText.style.color = "white";
    finalText.style.fontSize = "1.5rem";
    finalText.style.maxWidth = "400px";
    finalText.style.textShadow = "2px 2px 4px rgba(0,0,0,0.5)";

    letter.style.flexDirection = "row";
    letter.style.alignItems = "center";
    letter.style.gap = "50px";
    letter.insertBefore(finalText, document.querySelector(".letter-window"));

    document.querySelector(".letter-window").classList.add("final");
});
