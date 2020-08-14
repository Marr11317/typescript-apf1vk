// Import stylesheets
import './style.css';
import { Renderer } from './renderer';

const chords = ['C13', 'FMaj7#11', 'G-7', 'C7(b9)', 'BMaj9#11', 'Bb13', 'A7alt', 'D-11', 'G7(b13)', 'CMaj7']

const rend = new Renderer(chords);

function render(){
  const appDiv: HTMLElement = document.getElementById('app');
  let h = rend.toString();
    // Collapse and normalize breaks
  h = h.replace( /[\t ]*(<br *\/?>|\r|\n)+/gi, '\n\t' );
    // Remove leading and trailing breaks
	h = h.replace( /((\n\t)+$())|(^(\n\t)+([^\n]))/g, '$6' );
    // Replace breaks with table rows
	h = h.replace( /(\n)/g, '</tr><tr>' );
    // Replace tabs with cells
	h = h.replace( /(\t+)([^\t]+)/g, '<td>$2</td>' );
    // Wrap it all up
	appDiv.innerHTML = '<table class="stops">' + h + '</table>';
}

document.getElementById('up').addEventListener("click", function(){
  rend.transpose += 1;
  render();
});
document.getElementById('down').addEventListener("click", function(){
  rend.transpose -= 1;
  render();
});

render();