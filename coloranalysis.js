function showColors(tone) {
  const colors = {
      warm: ["#FF8C42", "#FFBB33", "#D2691E", "#FFD700", "#E9967A"],
      cool: ["#4682B4", "#5F9EA0", "#8A2BE2", "#6A5ACD", "#87CEFA"],
      neutral: ["#A9A9A9", "#C0C0C0", "#808080", "#D3D3D3", "#B0C4DE"]
  };

  let colorBox = document.getElementById("color-recommendation");
  colorBox.innerHTML = `<h2>Best Colors for ${tone.charAt(0).toUpperCase() + tone.slice(1)} Undertones</h2>`;
  
  let colorPalette = document.createElement("div");
  colorPalette.className = "color-palette";

  colors[tone].forEach(color => {
      let colorDiv = document.createElement("div");
      colorDiv.className = "color";
      colorDiv.style.background = color;
      colorPalette.appendChild(colorDiv);
  });

  colorBox.appendChild(colorPalette);
  colorBox.style.display = "block";
}
