let stages = [];
let current = 0;

async function loadStages() {
  const res = await fetch('stages.json');
  stages = await res.json();
  showStage();
  document.getElementById('next-btn').disabled = false;
  document.getElementById('next-btn').textContent = "Next Stage";
}

function showStage() {
  const s = stages[current];
  document.getElementById('title').textContent = s.title;
  document.getElementById('description').textContent = s.description;
}

document.getElementById('next-btn').addEventListener('click', () => {
  current++;
  if (current < stages.length) {
    showStage();
  } else {
    document.getElementById('title').textContent = "🎉 You’ve finished your crypto journey!";
    document.getElementById('description').textContent = "Now you're ready to explore the blockchain universe on your own.";
    document.getElementById('next-btn').disabled = true;
  }
});

document.addEventListener('DOMContentLoaded', loadStages);
