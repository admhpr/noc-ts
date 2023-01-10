import './style.css'
import p5 from 'p5'
import { draw as noiseDraw } from './intro/noise1D'
let currentDrawFunction: (p: p5) => void;
let app: p5;

function sketch1Draw(p: p5) {
    p.ellipse(p.width/2,p.height/2,200,200);
}

function sketch2Draw(p: p5) {
    p.rect(p.width/2-25,p.height/2-25,200,200);
}

function sketch3Draw(p: p5) {
    return noiseDraw(p, {height: p.height, width: p.width});
}

function sketchManager(newDrawFunction: (p: p5) => void) {
    currentDrawFunction = newDrawFunction;
}

const sketch1Button = document.getElementById('sketch1-button');
const sketch2Button = document.getElementById('sketch2-button');
const sketch3Button = document.getElementById('sketch3-button');

sketch1Button!.addEventListener('click', () => {
    sketchManager(sketch1Draw);
});
sketch2Button!.addEventListener('click', () => {
    sketchManager(sketch2Draw);
});
sketch3Button!.addEventListener('click', () => {
	sketchManager(sketch3Draw);
})

function setup() {
    app = new p5(p => {
		p.setup = function() {
			p.createCanvas(p.windowWidth, p.windowHeight);
		}
        p.draw = function() {
			p.clear()
            if(currentDrawFunction) {
                currentDrawFunction(p);
            }
        }
    });
    sketchManager(sketch2Draw);
}

setup();

