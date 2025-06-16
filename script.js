const toggleIngredients = document.getElementById("toggleIngredients");
const toggleSteps = document.getElementById("toggleSteps");
const ingredients = document.getElementById("ingredients");
const steps = document.getElementById("steps");
const startCooking = document.getElementById("startCooking");
const nextStep = document.getElementById("nextStep");
const progressBar = document.getElementById("progressBar");

let currentStep = 0;
const totalSteps = steps.children.length;

toggleIngredients.onclick = () => {
  ingredients.classList.toggle("hidden");
  toggleIngredients.textContent = ingredients.classList.contains("hidden") ? "Show Ingredients" : "Hide Ingredients";
};

toggleSteps.onclick = () => {
  steps.classList.toggle("hidden");
  toggleSteps.textContent = steps.classList.contains("hidden") ? "Show Steps" : "Hide Steps";
};


startCooking.onclick = () => {
  currentStep = 0;
  highlightStep(currentStep);
  nextStep.disabled = false;
};

nextStep.onclick = () => {
  if (currentStep < totalSteps - 1) {
    currentStep++;
    highlightStep(currentStep);
  } else {
    alert("You're done! 🎉 Enjoy your cake!");
    nextStep.disabled = true;
  }
};

function highlightStep(index) {
  [...steps.children].forEach((step, i) => {
    step.style.fontWeight = i === index ? "bold" : "normal";
    step.style.background = i === index ? "#ffe4e1" : "transparent";
  });
  progressBar.style.width = `${((index + 1) / totalSteps) * 100}%`;
}
