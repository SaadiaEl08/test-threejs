import * as THREE from 'three';
// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#000000");
// camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 3;
// object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: "#456456", emissive: "#456456" });


const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
// light
const light = new THREE.DirectionalLight();
light.position.set(1, 1, 1);
scene.add(light);
// render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// animate the schema
const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    // render the created element
    renderer.render(scene, camera);
    
};
animate()

