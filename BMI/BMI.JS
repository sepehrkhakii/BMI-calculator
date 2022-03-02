// documents

const height = document.getElementById("height");
const weight = document.getElementById("weight");
const btn = document.getElementById("btn").querySelector("button");
const Result = document.getElementById("Result");
const Error = document.getElementById("Erorr");
const Reset = document.getElementById("Result").querySelector("i");

// functions
btn.addEventListener("click", Bmi);
// console.log(Result.children);

function Bmi() {
    let bmv = weight.value / (height.value / 100 * height.value / 100);
    let bmf = bmv.toFixed(2);

    if (height.value == "" || weight.value == "") {
        const out = setTimeout(() => {
            Error.style.left = "3%";
            Error.style.transition = "1s";
        }, 500);
        const clearout = setTimeout(() => {
            Error.style.left = "-25%";
            Error.style.transition = "1.5s";
        }, 4500);

    } else if (bmf < 18.5) {
        const parent = document.createElement("div");
        parent.classList.add("parentstyle");
        const child = document.createElement("li");
        child.innerHTML = `Your BMI is:${bmf}
        <p>you are underweight</p>`;
        child.classList.add("child");
        parent.appendChild(child);
        const trashbtn = document.createElement("button");
        trashbtn.innerHTML = `<i class="fas fa-times"></i>`;
        trashbtn.classList.add("trsh");
        parent.appendChild(trashbtn);
        Result.appendChild(parent);
        trashbtn.addEventListener("click", () => {
            console.log(parent);
            parent.remove();
        });
    } else if (18.5 <= bmf && bmf <= 24.9) {
        const parent = document.createElement("div");
        parent.classList.add("parentstyle");
        const child = document.createElement("li");
        child.innerHTML = `Your BMI is:${bmf}
        <p>you are Healthy</p>`;
        child.classList.add("child");
        parent.appendChild(child);
        const trashbtn = document.createElement("button");
        trashbtn.innerHTML = `<i class="fas fa-times"></i>`;
        trashbtn.classList.add("trsh");
        parent.appendChild(trashbtn);
        Result.appendChild(parent);
        trashbtn.addEventListener("click", () => {
            console.log(parent);
            parent.remove();
        });
    } else if (25 <= bmf && bmf <= 29.9) {
        const parent = document.createElement("div");
        parent.classList.add("parentstyle");
        const child = document.createElement("li");
        child.innerHTML = `Your BMI is:${bmf}
        <p>you are OverWeight</p>`;
        child.classList.add("child");
        parent.appendChild(child);
        const trashbtn = document.createElement("button");
        trashbtn.innerHTML = `<i class="fas fa-times"></i>`;
        trashbtn.classList.add("trsh");
        parent.appendChild(trashbtn);
        Result.appendChild(parent);
        trashbtn.addEventListener("click", () => {
            console.log(parent);
            parent.remove();
        });

    } else if (30 <= bmf && bmf <= 34.9) {
        const parent = document.createElement("div");
        parent.classList.add("parentstyle");
        const child = document.createElement("li");
        child.innerHTML = `Your BMI is:${bmf}
        <p>you are Obese</p>`;
        child.classList.add("child");
        parent.appendChild(child);
        const trashbtn = document.createElement("button");
        trashbtn.innerHTML = `<i class="fas fa-times"></i>`;
        trashbtn.classList.add("trsh");
        parent.appendChild(trashbtn);
        Result.appendChild(parent);
        trashbtn.addEventListener("click", () => {
            console.log(parent);
            parent.remove();
        });

    } else if (35 <= bmf) {
        const parent = document.createElement("div");
        parent.classList.add("parentstyle");
        const child = document.createElement("li");
        child.innerHTML = `Your BMI is:${bmf}
        <p>you are Extremely Obese</p>`;
        child.classList.add("child");
        parent.appendChild(child);
        const trashbtn = document.createElement("button");
        trashbtn.innerHTML = `<i class="fas fa-times"></i>`;
        trashbtn.classList.add("trsh");
        parent.appendChild(trashbtn);
        Result.appendChild(parent);
        trashbtn.addEventListener("click", () => {
            console.log(parent);
            parent.remove();
        });

    }
    weight.value = "";
    height.value = "";
}