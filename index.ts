// Import stylesheets
import "./style.css";
import { Renderer } from "./renderer";

const chords = [
  "C13",
  "FMaj7#11",
  "G-7",
  "C7(b9)",
  "BMaj9#11",
  "Bb13",
  "A7alt",
  "D-11",
  "G7(b13)",
  "CMaj7",
  "A-7",
  "G13"
];

const rend = new Renderer(chords);

function render() {
  const appDiv: HTMLElement = document.getElementById("app");
  let h = rend.toString();
  // Collapse and normalize breaks
  h = h.replace(/[\t ]*(<br *\/?>|\r|\n)+/gi, "\n\t");
  // Remove leading and trailing breaks
  //h = h.replace(/((\n\t)+$())|(^(\n\t)+([^\n]))/g, "\t");
  // Replace breaks with table rows
  h = h.replace(/(\n)/g, "</tr><tr>");
  // Replace tabs with cells
  h = h.replace(/(\t+)([^\t]+)/g, "<td>$2</td>");
  // Wrap it all up
  appDiv.innerHTML = '<table class="stops">' + h + "</table>";
}

document.getElementById("up").addEventListener("click", function() {
  rend.transpose += 1;
  render();
});
document.getElementById("down").addEventListener("click", function() {
  rend.transpose -= 1;
  render();
});

var useFlats = document.getElementById("useFlats") as HTMLInputElement;
useFlats.addEventListener("click", function() {
  rend.useFlats = useFlats.checked;
  render();
});

var harmonizeAccidentals = document.getElementById("harmonizeAccidentals") as HTMLInputElement;
harmonizeAccidentals.addEventListener("click", function() {
  rend.harmonizeAccidentals = harmonizeAccidentals.checked;
  render();
});

var useShortNamings = document.getElementById("useShortNamings") as HTMLInputElement;
useShortNamings.addEventListener("click", function() {
  rend.useShortNamings = useShortNamings.checked;
  render();
});

var none = document.getElementById("none") as HTMLInputElement;
none.addEventListener("click", function() {
  checkSimplifyButtons();
});

var max = document.getElementById("max") as HTMLInputElement;
max.addEventListener("click", function() {
  checkSimplifyButtons();
});

var core = document.getElementById("core") as HTMLInputElement;
core.addEventListener("click", function() {
  checkSimplifyButtons();
});

function checkSimplifyButtons(){
  if (none.checked)
    rend.simplify = 'none';
  else if (max.checked)
    rend.simplify = 'max';
  else if (core.checked)
    rend.simplify = 'core';
  else
    rend.simplify = 'none';

  render();
}
render();
