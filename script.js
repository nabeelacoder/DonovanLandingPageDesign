let toggleBtn;
let bigWrapper;
let hamburgerMenu;


function declare(){
    toggleBtn = document.querySelector(".toggle-btn");
    bigWrapper = document.querySelector(".big-wrapper");
    hamburgerMenu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();
let dark = false;



function toggleAnimation(){
    // now lets clone the entire page
    dark = !dark;
    let clone = bigWrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    clone.addEventListener("animationend", ()=>{
       bigWrapper.remove();
       clone.classList.remove("copy");

    //    reset the variables here
        declare();
        events();
    });
}

function events(){
    toggleBtn.addEventListener("click", toggleAnimation);
    hamburgerMenu.addEventListener("click", ()=>{
        bigWrapper.classList.toggle("active");
    })
}

events();