let camera, scene, renderer, controls, plane;
let row = 0;
let frame = 0;
let up = true;

function init() {
    scene = new THREE.Scene();
    let width = window.innerWidth;
    let height = window.innerHeight;

    camera = new THREE.PerspectiveCamera(45, width/height, 1, 100);
    camera.position.set(0, 5, 0);
    scene.add(camera);

    let planeGeometry = new THREE.PlaneGeometry(30, 30, 99, 99);
    let planeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true, side: THREE.DoubleSide});
    plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -(Math.PI / 2);
    scene.add(plane);

    renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    document.body.appendChild(renderer.domElement);
}

function animate() {
    // move much more slowly to more closely match tempo of song
    if (frame === 5) {
        for (let j = 0; j < 10000; j += 1000) {
            let nextRow = (row + j) % 10000;
            for (let i = nextRow; i < nextRow + 100; i++) {
                plane.geometry.vertices[i].z = 0;
                plane.geometry.vertices[(i + 100) % 10000].z = 0.1;
                plane.geometry.vertices[(i + 200) % 10000].z = 0.3;
                plane.geometry.vertices[(i + 300) % 10000].z = 0.6;
                plane.geometry.vertices[(i + 400) % 10000].z = 0.7;
                plane.geometry.vertices[(i + 500) % 10000].z = 0.8;
                plane.geometry.vertices[(i + 600) % 10000].z = 0.7;
                plane.geometry.vertices[(i + 700) % 10000].z = 0.6;
                plane.geometry.vertices[(i + 800) % 10000].z = 0.3;
                plane.geometry.vertices[(i + 900) % 10000].z = 0.1;
                plane.geometry.vertices[(i + 1000) % 10000].z = 0;
            }
        }
        row += 100;
        row = row % 10000;

        // switch camera direction at certain heights, so it bounces back and forth
        if (up && camera.position.y >= 20) {
            up = false;
        } else if (!up && camera.position.y <= 2){
            up = true;
        }
        if (up) {
            camera.position.y += 0.1;
        } else {
            camera.position.y -= 0.1;
        }
        plane.geometry.verticesNeedUpdate = true;

    }
    frame = (frame + 1) % 6;
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(animate);
}

init();
animate();
