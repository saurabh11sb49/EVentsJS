const loadd = document.getElementById("load");

window.addEventListener("load", () => {
    setTimeout(() => {
        loadd.classList.remove("loading");
    }, 2000);
});


function addContent() {
    const contentOnClick = document.getElementById("contentOnClick");
    contentOnClick.innerHTML = "Hello, you clicked the button!";
}

const doubleclick=document.getElementById("dblclick");
doubleclick.addEventListener('dblclick',()=>{
document.getElementById("doubleclick-card").style.backgroundColor="red";
document.getElementById("doubleclick").innerHTML="its Hakar :)"
});

const mouseoverCard = document.getElementById("mouseover");

mouseoverCard.addEventListener("mouseover", () => {
    document.getElementById("mouseover-card").style.backgroundColor = "lightgreen";
    mouseoverCard.innerHTML = "You hovered over me!";
});



const focusInput = document.getElementById("focus-input");

focusInput.addEventListener("focus", () => {
    document.getElementById("focus-card").style.backgroundColor = "blue";
    document.getElementById("focus-message").innerHTML = "Input is focused! this command works with input , textarea";
});


const scrollBody = document.getElementById("scroll-body");

scrollBody.addEventListener("scroll", () => {
    document.getElementById("scroll-card").style.backgroundColor = "lightblue";
    document.getElementById("scroll-message").innerHTML = "You are scrolling!";
});
