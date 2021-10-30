function updateCircleText(id, mouseIn, outColor, inColor) {
    let el = document.getElementById(id);
    el.style.color = mouseIn ? inColor : outColor;
}
