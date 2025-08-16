import { useEffect, useRef } from 'react';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useAnimation } from 'framer-motion';

const Scene: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const animations = useAnimation();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current?.appendChild(renderer.domElement);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5).normalize();
        scene.add(light);

        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color: 0xff5722, metalness: 0.5, roughness: 0.1 });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div ref={mountRef} className="w-full h-full"></div>
            <div className="absolute top-10 left-10 text-orange-600">
                <h1 className="text-5xl font-bold animate__animated animate__fadeIn">luxury LRP cosmetics</h1>
                <p className="mt-4 text-xl animate__animated animate__fadeIn">Discover the elegance of luxury with our exclusive range of cosmetics.</p>
                <button className="mt-6 px-6 py-2 text-white bg-orange-600 rounded-lg shadow-lg hover:bg-orange-500 transition duration-300">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default Scene;