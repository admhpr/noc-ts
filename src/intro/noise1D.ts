import P5 from "p5";
export function draw(
  p5: P5,
  { width, height }: { width: number; height: number }
) {
  let xoff = 0;
  let xincrement = 0.01;

  // Black transparent background
  p5.fill(0, 10);
  p5.rect(0, 0, width, height);

  // Try this to compare to noise
  // let n = random(0, width);

  // Get a noise value based on xoff and scale it according to the window's width
  let n = p5.noise(xoff);
  let x = p5.map(n, 0, 1, 0, width);

  // With each cycle, increment xoff
  xoff += xincrement;

  // Draw the ellipse at the value produced by perlin noise
  p5.fill(200);
  p5.ellipse(x, height / 2, 64, 64);
  return p5
}
