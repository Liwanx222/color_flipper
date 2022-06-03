export function switchColor () {
    let random_color = randomColor();
    displayColor(random_color);
};

function randomColor () {
    let red_code = Math.floor(Math.random()*255)
    let green_code = Math.floor(Math.random()*255)
    let blue_code = Math.floor(Math.random()*255)
    return [red_code.toString(), green_code.toString(), blue_code.toString()];
};

function displayColor (color=["255", "255", "255"]) {
    let display_elt = document.getElementById("display");
    let red = color[0];
    let green = color[1];
    let blue = color[2];
    // Switch color.
    display_elt.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
};