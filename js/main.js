import { clock } from './components/clock.js';
import { ProgressBar } from './components/ProgressBar.js';
import { progressBarData } from './data/progressBarData.js';
import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/renderSocials.js';
import { Forms } from './components/forms/Forms.js';
import { Validation } from './components/forms/Validation.js';

clock('.clock', '01-04 14:00:00');

renderSocials('footer > .socials', socialsData);

new ProgressBar('.left-column', progressBarData);

console.clear();

new Forms();
