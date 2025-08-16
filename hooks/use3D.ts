import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating 3D interactions for the luxury LRP cosmetics website.
 * This hook uses Three.js to facilitate elegant 3D designs and effects related to cosmetics.
 * 
 * @returns {object} - Contains the 3D scene, camera, and renderer for the cosmetics website.
 */
export const use3D = () => {
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    useEffect(() => {
        // Set up the scene
        sceneRef.current = new THREE.Scene();
        sceneRef.current.background = new THREE.Color(0xffffff); // White background for luxury feel

        // Set up the camera
        cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        cameraRef.current.position.z = 5;

        // Set up the renderer
        rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(rendererRef.current.domElement);

        // Add lighting for luxury effect
        const light = new THREE.AmbientLight(0xffffff, 0.5); // Soft light
        sceneRef.current.add(light);
        const directionalLight = new THREE.DirectionalLight(0xffa500, 0.5); // Orange light to match brand color
        directionalLight.position.set(1, 1, 1).normalize();
        sceneRef.current.add(directionalLight);

        // Create a luxury LRP cosmetics 3D object (e.g., a product bottle)
        const geometry = new THREECylinderGeometry(1, 1, 3, 32);
        const material = new THREE.MeshStandardMaterial({ color: 0xffa500, metalness: 0.8, roughness: 0.1 }); // Orange luxury look
        const cylinder = new THREE.Mesh(geometry, material);
        sceneRef.current.add(cylinder);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cylinder.rotation.y += 0.01; // Rotate for 3D effect
            rendererRef.current?.render(sceneRef.current, cameraRef.current);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            if (cameraRef.current) {
                cameraRef.current.aspect = window.innerWidth / window.innerHeight;
                cameraRef.current.updateProjectionMatrix();
            }
            rendererRef.current?.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Clean up on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
            if (sceneRef.current) {
                sceneRef.current = null;
            }
            if (cameraRef.current) {
                cameraRef.current = null;
            }
            if (rendererRef.current) {
                rendererRef.current = null;
            }
        };
    }, []);

    return {
        scene: sceneRef.current,
        camera: cameraRef.current,
        renderer: rendererRef.current,
    };
};