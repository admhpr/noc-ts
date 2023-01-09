import './style.css'
import P5 from "p5";
function sketch(p5: P5) {
	p5.setup = () => {
		const canvas = p5.createCanvas(400, 400);
		canvas.parent("app");
	};
	p5.draw = () => {
    p5.background(0);
    p5.fill(255);
    p5.rect(p5.mouseX, p5.mouseY, 50, 50);	
	};
};

new P5(sketch);
document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``
