const THREE = require('three');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);


camera.position.setZ(-50);
camera.position.setX(0.2);


const geometry = new THREE.IcosahedronGeometry(3, 1);
const basicColor = new THREE.Color("#8063F7");

const material = new THREE.MeshBasicMaterial({ color: basicColor, wireframe:true});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
function resizeRendererToDisplaySize(renderer) {
    const canvas = document.querySelector('#bg');
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
  }

function animate() {
    camera.aspect = window.innerWidth / window.innerHeight ;
    requestAnimationFrame(animate)
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);
    sphere.rotation.x -= 0.0001;
    sphere.rotation.y -= 0.0005;
    sphere.rotation.z -= 0.0005;
    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
}
animate();
function moveCamera() {
    const t = document.body.getBoundingClientRect().top + 600;
    sphere.rotation.x -= 0.005;
    sphere.rotation.y -= 0.0075;
    sphere.rotation.z -= 0.005;
  
    camera.position.z = t * 0.01;
    camera.rotation.y = t * 0.0002;
  }
  
  document.body.onscroll = moveCamera;
  moveCamera();