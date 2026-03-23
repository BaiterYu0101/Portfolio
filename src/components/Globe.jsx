"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import * as THREE from "three";

// Major tech hubs around the world (lat, lon, label)
const TECH_HUBS = [
  { lat: 3.1390, lon: 101.6869, label: "Kuala Lumpur, Malaysia", color: 0xff00ff }, // Your location in magenta
  { lat: 37.7749, lon: -122.4194, label: "San Francisco, USA", color: 0x00ffff },
  { lat: 51.5074, lon: -0.1278, label: "London, UK", color: 0x00ffff },
  { lat: 48.8566, lon: 2.3522, label: "Paris, France", color: 0x00ffff },
  { lat: 35.6762, lon: 139.6503, label: "Tokyo, Japan", color: 0x00ffff },
  { lat: 39.9042, lon: 116.4074, label: "Beijing, China", color: 0x00ffff },
  { lat: 19.0760, lon: 72.8777, label: "Mumbai, India", color: 0x00ffff },
  { lat: -33.8688, lon: 151.2093, label: "Sydney, Australia", color: 0x00ffff },
  { lat: 40.7128, lon: -74.0060, label: "New York, USA", color: 0x00ffff },
  { lat: -23.5505, lon: -46.6333, label: "São Paulo, Brazil", color: 0x00ffff },
  { lat: 1.3521, lon: 103.8198, label: "Singapore", color: 0x00ff00 },
  { lat: 22.3193, lon: 114.1694, label: "Hong Kong", color: 0x00ff00 },
];

export function Globe({ className }) {
  const containerRef = useRef(null);
  const [hoveredHub, setHoveredHub] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    camera.position.z = 2;

    // Create globe
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Create canvas texture for globe with realistic continents
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");
    
    // Ocean color
    ctx.fillStyle = "#0a2540";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Continents (more realistic positions)
    ctx.fillStyle = "#1a472a";
    // North America
    ctx.fillRect(50, 150, 280, 220);
    // South America
    ctx.fillRect(180, 400, 150, 180);
    // Europe
    ctx.fillRect(700, 80, 200, 150);
    // Africa
    ctx.fillRect(750, 300, 180, 250);
    // Asia
    ctx.fillRect(1000, 100, 500, 300);
    // Australia
    ctx.fillRect(1550, 450, 120, 100);
    // Greenland
    ctx.fillRect(500, 50, 80, 100);
    
    // Add some lighter land colors for variation
    ctx.fillStyle = "#2d5a3d";
    ctx.fillRect(100, 200, 150, 100);
    ctx.fillRect(1100, 180, 200, 120);
    
    // Draw grid
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= canvas.width; i += 256) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    for (let i = 0; i <= canvas.height; i += 128) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshPhongMaterial({ 
      map: texture,
      emissive: 0x0a2540,
      shininess: 5,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add lighting with more effects
    const light1 = new THREE.DirectionalLight(0xffffff, 1.2);
    light1.position.set(5, 3, 5);
    light1.castShadow = true;
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0x00ffff, 0.8);
    light2.position.set(-5, -3, -5);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xff00ff, 0.3);
    light3.position.set(0, 0, 3);
    scene.add(light3);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add enhanced glow effect
    const glowGeometry = new THREE.SphereGeometry(1.05, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Add outer atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.08, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Add stars in background
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 200;
      starPositions[i + 1] = (Math.random() - 0.5) * 200;
      starPositions[i + 2] = (Math.random() - 0.5) * 200;
    }

    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Add markers for tech hubs
    const markersGroup = new THREE.Group();
    const markerMeshes = [];

    // Find Malaysia (home) position
    const malaysiHub = TECH_HUBS[0];
    const malasiPhi = (90 - malaysiHub.lat) * (Math.PI / 180);
    const malaysiTheta = (malaysiHub.lon + 180) * (Math.PI / 180);
    const malaysiX = Math.sin(malasiPhi) * Math.cos(malaysiTheta);
    const malaysiY = Math.cos(malasiPhi);
    const malaysiZ = Math.sin(malasiPhi) * Math.sin(malaysiTheta);
    const malaysiPos = new THREE.Vector3(malaysiX, malaysiY, malaysiZ);

    TECH_HUBS.forEach((hub, index) => {
      // Convert lat/lon to 3D position on sphere
      const phi = (90 - hub.lat) * (Math.PI / 180);
      const theta = (hub.lon + 180) * (Math.PI / 180);

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);

      // Create marker sphere
      const markerGeometry = new THREE.SphereGeometry(0.03, 32, 32);
      const markerMaterial = new THREE.MeshBasicMaterial({ color: hub.color });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);

      marker.position.set(x, y, z);
      marker.userData = hub;
      markersGroup.add(marker);
      markerMeshes.push(marker);

      // Create glow ring around marker
      const ringGeometry = new THREE.SphereGeometry(0.05, 32, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: hub.color,
        transparent: true,
        opacity: 0.3,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(marker.position);
      markersGroup.add(ring);

      // Draw connections from Malaysia to other hubs
      if (index !== 0) {
        const connectionGeometry = new THREE.BufferGeometry();
        const connectionPositions = new Float32Array([
          malaysiX, malaysiY, malaysiZ,
          x, y, z,
        ]);
        connectionGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(connectionPositions, 3)
        );

        const connectionMaterial = new THREE.LineBasicMaterial({
          color: 0x00ffff,
          transparent: true,
          opacity: 0.2,
          linewidth: 2,
        });
        const connectionLine = new THREE.Line(connectionGeometry, connectionMaterial);
        connectionLine.userData = { startPos: new THREE.Vector3(malaysiX, malaysiY, malaysiZ), endPos: new THREE.Vector3(x, y, z) };
        markersGroup.add(connectionLine);
      }
    });

    scene.add(markersGroup);

    // Create animated particle connections
    const particleConnections = [];
    TECH_HUBS.forEach((hub, index) => {
      if (index !== 0) {
        const phi = (90 - hub.lat) * (Math.PI / 180);
        const theta = (hub.lon + 180) * (Math.PI / 180);
        const x = Math.sin(phi) * Math.cos(theta);
        const y = Math.cos(phi);
        const z = Math.sin(phi) * Math.sin(theta);

        particleConnections.push({
          start: new THREE.Vector3(malaysiX, malaysiY, malaysiZ),
          end: new THREE.Vector3(x, y, z),
          progress: Math.random(),
          speed: 0.005 + Math.random() * 0.003,
        });
      }
    });

    // Create particles for connections
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleConnections.length * 3);
    particleConnections.forEach((conn, i) => {
      const pos = conn.start.clone().lerp(conn.end, conn.progress);
      particlePositions[i * 3] = pos.x;
      particlePositions[i * 3 + 1] = pos.y;
      particlePositions[i * 3 + 2] = pos.z;
    });

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.02,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    markersGroup.add(particles);

    // Raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markerMeshes);

      if (intersects.length > 0) {
        const hub = intersects[0].object.userData;
        setHoveredHub(hub);
        renderer.domElement.style.cursor = "pointer";
      } else {
        setHoveredHub(null);
        renderer.domElement.style.cursor = "default";
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      globe.rotation.y += 0.001;
      glow.rotation.y -= 0.0005;
      atmosphere.rotation.y += 0.0002;
      markersGroup.rotation.y += 0.001;

      // Animate particles along connections
      const posAttr = particles.geometry.attributes.position;
      const posArray = posAttr.array;

      particleConnections.forEach((conn, i) => {
        conn.progress += conn.speed;
        if (conn.progress > 1) {
          conn.progress = 0;
        }

        const pos = conn.start.clone().lerp(conn.end, conn.progress);
        posArray[i * 3] = pos.x;
        posArray[i * 3 + 1] = pos.y;
        posArray[i * 3 + 2] = pos.z;
      });

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      glowMaterial.dispose();
      atmosphereMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={twMerge("mx-auto aspect-square w-full max-w-150 relative", className)}
      style={{ width: "100%", height: "100%" }}
    >
      {hoveredHub && (
        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-cyan-500 text-sm text-cyan-300 z-10">
          <p className="font-semibold">{hoveredHub.label}</p>
          <p className="text-xs text-gray-400">
            {hoveredHub.lat.toFixed(2)}°N, {hoveredHub.lon.toFixed(2)}°E
          </p>
        </div>
      )}
    </div>
  );
}