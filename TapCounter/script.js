let btn = document.getElementById("btn");

let counter = 0;

btn.addEventListener("keydown", (e) => {
    counter++;
    if (e.key === " " || e.key === "Spacebar") {
        // console.log("Space key pressed!");
        document.querySelector('.box').innerHTML = `${counter}`;

    }
    if (counter == 1500) {
        document.getElementById("Image").style.display = "block";
        document.getElementById('disp').innerHTML = 'You are relieved..you have the highest wisdom..तथास्तु ';
    }
})