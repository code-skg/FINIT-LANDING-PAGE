//toggle menu js for resopnsiveness -- -
const menu = document.getElementById("menu-bar");
const toggle = document.querySelector(".menu-toggle");
console.log(toggle);


toggle.addEventListener("click" , (e) => {
  menu.classList.add("active");
})

document.addEventListener("click", (e)=>{
  if(!(menu.contains(e.target)) && !(toggle.contains(e.target))){
    menu.classList.remove("active");
  }
})



// js of typing text animation 
document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.getElementById("typing-text");
  const textArray = ["FiNIT","Finance", "MaNIT" ," ₣1₦1₮"];
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenTexts = 2000;
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textIndex].length) {
      typingText.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenTexts);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(type, typingSpeed);
    }
  }

  type(); // Start the typing effect
});


// Function to remove local storage and show loader animation
function resetLoader() {
  localStorage.removeItem("hasSeenLoader");
  const loader = document.getElementById("loader");
  const content = document.getElementById("site-content");

  loader.style.display = "flex";
  content.style.display = "none";

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.6s ease";
  }, 3499);

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 3500);
}

// Example usage: Call resetLoader() to trigger the animation
resetLoader();
