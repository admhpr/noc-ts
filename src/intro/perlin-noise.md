### Perlin Noise

> random audio jibberish

Developed by Ken Perlin for the the film TRON

Originally used in computer graphics to generate procedural texture for objects.

### P5 

`randon(min,max)`

`noise(xoff)`

### 1D noise

> @60 FPS pick a random number between 0 and 1 / time

random -> numbers are not related 2,9,4,8,5,1
perlin noise -> numbers are related 2,3,2,3,4,5,6,7,6


#### How it works

Pick a number every 10 units of time with a amplitude between 0-100, then draw a curve between values (cosine interpolation).

Now do it for every 5 units of time, then 2.5 and so on.

As the time interval decreases and the amplitude is halved, the range of values for the curve becomes smaller, resulting in a smoother and more compact curve.

Perlin noise is calculated over a number of octaves added together. It has a fractual like quality