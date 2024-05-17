

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);

var renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth/2, window.innerHeight/2);
document.querySelector('.container').appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry(2, 0.25, 2);

var material = new THREE.MeshBasicMaterial({ color: 0x4c5f9e });

var cube = new THREE.Mesh(geometry, material);

scene.add(cube);
cube.position.z = -7;
let angle = 0; 
const radius = 4; 

renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;

    angle += 0.01; 
    cube.position.x = radius * Math.cos(angle);
    cube.position.y = radius * Math.sin(angle);

    renderer.render(scene,camera);
}
animate();


