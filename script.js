const adjectives = ["fast", "silent", "bright", "cool", "epic"];
const nouns = ["tiger", "eagle", "dragon", "panda", "unicorn"];

function generateID() {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const num = Math.floor(Math.random() * 900 + 100);
    const id = `${adj}-${noun}-${num}`;
    document.getElementById("result").innerText = `Generated ID: ${id}`;
}
