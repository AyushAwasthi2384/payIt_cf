const navTrigger = document.getElementById("navTrigger")
const navMenu = document.getElementById("navMenuKhol")

let nmC = 0;
console.log(nmC)
navTrigger.addEventListener("click", () => {
    if(nmC == 0){
        navMenu.style.left = 0;
        navTrigger.src="./media/navIcon2.png"
        navTrigger.style.height="2.5rem"
        nmC = 1;
        console.log(nmC)
        
    }
    else{
        navMenu.style.left = "-50rem";
        navTrigger.src="./media/navIcon.png"
        navTrigger.style.height="3rem"
        nmC = 0;
        console.log(nmC)
    }
})
