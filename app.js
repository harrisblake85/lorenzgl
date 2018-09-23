
const points = lorenz()
const xs = new Float32Array(points[0])
const ys = new Float32Array(points[1])
const zs = new Float32Array(points[2])

let i = 0

let index =0

var camera, scene, renderer;
var geometry, material, mesh;
var mat, geometry;
var MAX_POINTS = 50000
var line;
let vec1 = new THREE.Vector3(xs[i],ys[i],0)
let vec2 = new THREE.Vector3(xs[i+1],ys[i+1],0)

init();
animate();


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function init() {

  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
  camera.position.set( 0, 0, 100 );
  camera.lookAt( 0, 0, 0 );

  controls = new THREE.OrbitControls( camera, renderer.domElement );

  scene = new THREE.Scene();

  MAX_POINTS = 50000;

  geometry = new THREE.BufferGeometry();


  positions = new Float32Array( MAX_POINTS * 3 );
  geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

  var drawCount = 50000;
  geometry.setDrawRange( 0, drawCount );

  material = new THREE.LineBasicMaterial( { color: getRandomColor(), linewidth: 15 } );

  line = new THREE.Line( geometry,  material );
  scene.add( line );


}



function animate() {
  //
  var positions = line.geometry.attributes.position.array;

  console.log(index);


  for (var y = 0; y < 120; y++) {
    positions[index]=xs[i];
    index++;
    positions[index]=ys[i];
    index++;
    positions[index]=zs[i];
    index++;
    i++;
  }

  if (index>=150000) {

    index =0

    line.material.color = new THREE.Color( getRandomColor() );
    line.material.needsUpdate = true;

  }

  if (i>=100000) {
    i=0

  }

  // geometry.setDrawRange( index-250, 50000);
  requestAnimationFrame( animate );

  renderer.render( scene, camera );

  line.geometry.attributes.position.needsUpdate = true; //

  // line.geometry.computeBoundingSphere();



}
