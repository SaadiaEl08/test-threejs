# test-threejs

This project showcases a simple 3D scene created with **Three.js**. The scene contains a rotating cube with custom color and lighting effects, rendered in a black background. This setup provides a basic demonstration of Three.js functionalities, including rendering, lighting, and object animation.

## Project Features

- **Three.js Scene**: Renders a 3D cube with perspective and lighting.
- **Animated Cube**: Continuously rotates on the X and Y axes.
- **Directional Lighting**: Adds a light source to illuminate the cube.
- **Custom Materials**: Applies a unique color and emissive effect to the cube's surface.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SaadiaEL08/test-threejs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd test-threejs
   ```

## Usage

1. Start the development server by running the live server from the **index.html** file:
2. You should see a rotating cube with custom lighting against a black background.

## Code Structure

- **Scene**: Created using `THREE.Scene()` with a black background.
- **Camera**: Perspective camera with a 75-degree field of view.
- **Cube**:
  - Geometry: Box geometry with `THREE.BoxGeometry()`.
  - Material: Custom color and emissive effect using `THREE.MeshLambertMaterial`.
- **Light**: A `THREE.DirectionalLight` positioned to cast light on the cube.
- **Renderer**: Uses `WebGLRenderer` to render the scene within the browser window.
- **Animation**: The cube rotates continuously along the X and Y axes.

## Dependencies

- [Three.js](https://threejs.org/) - A JavaScript library for creating 3D graphics in the browser ,I used a threeJs CDN in this example.
