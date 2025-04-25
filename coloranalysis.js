function showColors(tone) {
  const colors = {
    warm: ["#FF8C42", "#FFBB33", "#D2691E", "#FFD700", "#E9967A"],
    cool: ["#4682B4", "#5F9EA0", "#8A2BE2", "#6A5ACD", "#87CEFA"],
    neutral: ["#A9A9A9", "#C0C0C0", "#808080", "#D3D3D3", "#B0C4DE"]
  };

  const descriptions = {
    warm: "Warm tones pair well with golden, earthy, and sunset-inspired hues.",
    cool: "Cool tones look great in jewel, icy, and oceanic shades.",
    neutral: "Neutral tones are versatile and suit balanced, soft colors best."
  };

  const colorBox = document.getElementById("color-recommendation");

  // Build header and description
  colorBox.innerHTML = `
    <h2>Best Colors for ${capitalize(tone)} Undertones</h2>
    <p style="margin-bottom: 20px; font-size: 1rem; color: #555;">${descriptions[tone]}</p>
  `;

  // Build color palette
  const colorPalette = document.createElement("div");
  colorPalette.className = "color-palette";

  colors[tone].forEach(color => {
    const colorDiv = document.createElement("div");
    colorDiv.className = "color";
    colorDiv.style.background = color;
    colorPalette.appendChild(colorDiv);
  });

  colorBox.appendChild(colorPalette);

  // Add show class to trigger CSS animation
  colorBox.classList.add("show");

  // Re-trigger transition (if previously removed)
  setTimeout(() => {
    colorBox.classList.add("show");
  }, 10);

  // Smooth scroll
  colorBox.scrollIntoView({ behavior: "smooth" });
}

// Capitalize function for cleaner formatting
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
