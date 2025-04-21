const styles = {
    "Hourglass": [
        "Wear fitted tops that accentuate the waist.",
        "Opt for high-waisted skirts and pants.",
        "Wrap dresses work best to highlight curves.",
        "Choose structured blazers to define your shape."
    ],
    "Pear": [
        "Emphasize your upper body with boatneck or off-shoulder tops.",
        "A-line skirts and flared pants balance your lower half.",
        "Dark-colored bottoms create a slimming effect.",
        "Avoid overly tight jeans or leggings."
    ],
    "Apple": [
        "Empire waist dresses flatter your shape.",
        "V-neck tops elongate your torso.",
        "Structured jackets create definition.",
        "Avoid overly tight tops around the midsection."
    ],
    "Rectangle": [
        "Peplum tops add curves to your waistline.",
        "Layered outfits create more dimension.",
        "High-waisted jeans enhance your shape.",
        "Choose belted dresses to define the waist."
    ]
};

function showStyles(bodyType) {
    document.getElementById("style-title").innerText = `${bodyType} Body Type Styling Tips`;
    const styleList = document.getElementById("style-list");
    styleList.innerHTML = "";
    
    styles[bodyType].forEach(style => {
        const li = document.createElement("li");
        li.textContent = style;
        styleList.appendChild(li);
    });

    document.getElementById("style-recommendations").style.display = "block";
}
