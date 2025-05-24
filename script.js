
const adjectives = ["echo", "storm", "flame", "night", "bright", "cold", "quiet", "mellow", "brave", "dark", "happy", "zebra", "ancient", "azure", "alpha"];
const nouns = ["light", "wind", "shadow", "wave", "fire", "sky", "star", "dream", "field", "storm", "cloud", "dust", "thunder", "drift", "mist"];

const generatedSet = new Set();

function generateID() {
  let id = "";
  while (true) {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const suffix = Math.random() < 0.5 ? "" : Math.random().toString(36).substring(2, 4);
    const maybeDigit = Math.random() < 0.3 ? Math.floor(Math.random() * 90 + 10).toString() : "";
    id = adj + noun + suffix + maybeDigit;
    if (!generatedSet.has(id)) {
      generatedSet.add(id);
      break;
    }
  }
  return id;
}

function generateIDs() {
  const result = document.getElementById("result");
  result.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.textContent = generateID();
    result.appendChild(div);
  }
}
