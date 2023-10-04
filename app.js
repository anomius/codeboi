// Set the countdown date (year, month (0-based index), day, hours, minutes, seconds)
const countdownDate = new Date(2023, 11, 31, 23, 59, 59).getTime();

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a box geometry
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Update the countdown timer
function updateTimer() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculate remaining time
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the cube scale based on time remaining
    cube.scale.set(days + 1, hours + 1, minutes + 1);

    // Render the scene
    renderer.render(scene, camera);

    // Call the function again on the next frame
    requestAnimationFrame(updateTimer);
}

// Call the updateTimer function to start the countdown
updateTimer();
