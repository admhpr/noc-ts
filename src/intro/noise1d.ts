import p5 from 'p5'

let xoff = 0
export function draw(
  p: p5,
  { height, width }: {height: number, width: number},
) {
  // console.log("random", p.random())
  let xincrement = 0.01;
  p.fill("#333");
  p.rect(0, 0, width, height);

  // Try this to compare to noise
  // let n = random(0, width);

  // Get a noise value based on xoff and scale it according to the window's width
  let n = p.noise(xoff);
  let x = p.map(n, 0, 1, 0, width);

  // With each cycle, increment xoff
  xoff += xincrement;

  // Draw the ellipse at the value produced by perlin noise
  p.fill(255);
  p.ellipse(x, height / 2, 64, 64);

  return {
    xoff
  }
}