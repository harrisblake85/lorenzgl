s  = 10;
b  = 2.6666;
r  = 28;

/*
 *  Main
 */

let lorenz = () => {
  let xs = [];
  let ys = [];
  let zs = [];
   let i;
   /*  Coordinates  */
   let x = 1;
   let y = 1;
   let z = 1;
   /*  Time step  */
   let dt = 0.001;

   // console.log("%5d %8.3f %8.3f %8.3f\n",0,x,y,z);
   /*
    *  Integrate 50,000 steps (50 time units with dt = 0.001)
    *  Explicit Euler integration
    */
   for (i=0;i<50000;i++)
   {
      xs.push(x);
      ys.push(y);
      zs.push(z);
      let dx = s*(y-x);
      let dy = x*(r-z)-y;
      let dz = x*y - b*z;
      x += dt*dx;
      y += dt*dy;
      z += dt*dz;
      // console.log("%5d %8.3f %8.3f %8.3f\n",i+1,x,y,z);

   }
   return [xs,ys,zs];
}

// console.log(lorenz())
