let camera, scene, renderer, geometry, material, mesh;
const container = document.getElementById('container');
let color = 0;

function init() {
    scene = new THREE.Scene();
    let width = window.innerWidth;
    let height = window.innerHeight;

    camera = new THREE.PerspectiveCamera(160, width/height, 0.1, 1000);
    camera.position.set(0, 0, 0);
    scene.add(camera);

    // radius, width segments, height segments of sphere
    geometry = new THREE.SphereGeometry(1000, 100, 100);
    material = new  THREE.MeshBasicMaterial({color: "hsl(" + color + ", 50%, 50%)", wireframe: true});
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    renderer.render(scene, camera);
}

function animate() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    material.color = new THREE.Color("hsl(" + color + ", 50%, 50%)");
    color++;
    renderer.render(scene, camera);

    requestAnimationFrame(animate);
}

function timing() {
    setTimeout(animate, 4700);
}


init();
timing();
