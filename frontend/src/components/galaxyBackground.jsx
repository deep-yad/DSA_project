import React, { useEffect } from 'react';
import * as THREE from 'three';

const GalaxyBackground = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('galaxy').appendChild(renderer.domElement);

    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 10000;

    const positions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      const i3 = i * 3;
      positions[i3] = THREE.MathUtils.randFloatSpread(2000);
      positions[i3 + 1] = THREE.MathUtils.randFloatSpread(2000);
      positions[i3 + 2] = THREE.MathUtils.randFloatSpread(2000);
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    

    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff,size:3 });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    camera.position.z = 100;

    const animate = () => {
      requestAnimationFrame(animate);

      starField.rotation.x += 0.002;
      starField.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return <div id="galaxy" style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0 }} />;
};

export default GalaxyBackground;
