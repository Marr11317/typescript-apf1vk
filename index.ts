require { Renderer } from 'renderer';

// Import stylesheets
import './style.css';

const chords = ['C13', 'FMaj7#11', 'G-7', 'C7(b9)', 'BMaj9#11', 'Bb13', 'A7alt', 'D-11', 'G7(b13)', 'CMaj7']

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;