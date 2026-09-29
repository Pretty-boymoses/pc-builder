function generateGuide(){

const cpu = document.getElementById("cpu").value;
const cooler = document.getElementById("cooler").value;
const motherboard = document.getElementById("motherboard").value;
const ram = document.getElementById("ram").value;
const gpu = document.getElementById("gpu").value;
const storage = document.getElementById("storage").value;
const psu = document.getElementById("psu").value;
const pcCase = document.getElementById("case").value;

const guide = document.getElementById("guide");

document.getElementById("difficulty").innerText = "Medium";
document.getElementById("compatibility").innerText = "95%";
document.getElementById("progress").innerText = "100%";

guide.innerHTML = `

<div class="step">
✅ Step 1: Install your CPU (${cpu}) into the motherboard socket.
</div>

<div class="step">
✅ Step 2: Install the CPU cooler (${cooler}).
</div>

<div class="step">
✅ Step 3: Insert RAM modules (${ram}) into the correct DIMM slots.
</div>

<div class="step">
✅ Step 4: Install storage device (${storage}).
</div>

<div class="step">
✅ Step 5: Mount motherboard (${motherboard}) into the case.
</div>

<div class="step">
✅ Step 6: Install the power supply (${psu}).
</div>

<div class="step">
✅ Step 7: Install graphics card (${gpu}).
</div>

<div class="step">
✅ Step 8: Connect all power cables and front-panel connectors.
</div>

<div class="step">
✅ Step 9: Cable management and airflow optimization.
</div>

<div class="step">
✅ Step 10: Power on the PC, enter BIOS, and install Windows.
</div>

`;
}