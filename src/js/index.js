import React from 'react';
import { createRoot } from 'react-dom/client';

import '../styles/index.css';

import SecondsCounter from './component/seconds-counter.jsx';

const domNode = document.getElementById('app');
const root = createRoot(domNode);

const UPPER_BOUND = 1000000;

let secondsSinceReset = -1;
let intervalId = -1;

window.addEventListener('load', event => {
    intervalId = setInterval(() => {
        secondsSinceReset = (secondsSinceReset + 1) % UPPER_BOUND;
        root.render(<SecondsCounter displayedSeconds={secondsSinceReset} />);
    }, 1000);
});