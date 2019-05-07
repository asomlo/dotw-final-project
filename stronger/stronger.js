let camera, scene, renderer, geometry, material, mesh;
const container = document.getElementById('container');

function init() {
    scene = new THREE.Scene();
    let width = window.innerWidth;
    let height = window.innerHeight;

    camera = new THREE.PerspectiveCamera(160, width/height, 0.1, 1000);
    camera.position.set(0, 0, 0);
    scene.add(camera);

    // radius, width segments, height segments of sphere
    geometry = new THREE.SphereGeometry(1000, 100, 100);
    material = new  THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    renderer.render(scene, camera);
}

function animate() {
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;

    renderer.render(scene, camera);

    requestAnimationFrame(animate);
}

init();
animate();
