"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- SETUP SCENE, CAMERA, RENDERER ---
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.z = 8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Main group to hold all animated objects for group rotation (mouse parallax)
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- DYNAMIC TEXTURE GENERATION FOR GLOWING PARTICLES ---
    const createGlowingCircleTexture = (colorHex: string) => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.2, colorHex);
        gradient.addColorStop(0.5, colorHex.replace("1)", "0.3)"));
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const cyanTexture = createGlowingCircleTexture("rgba(34, 211, 238, 1)"); // cyan-400
    const emeraldTexture = createGlowingCircleTexture("rgba(52, 211, 153, 1)"); // emerald-400
    const indigoTexture = createGlowingCircleTexture("rgba(129, 140, 248, 1)"); // indigo-400

    // --- PARTICLE FIELD SETUP ---
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleVelocities: THREE.Vector3[] = [];

    // Boundaries for particle movements
    const areaWidth = 16;
    const areaHeight = 10;
    const areaDepth = 8;

    for (let i = 0; i < particleCount; i++) {
      // Position particles randomly inside a 3D box
      positions[i * 3] = (Math.random() - 0.5) * areaWidth;
      positions[i * 3 + 1] = (Math.random() - 0.5) * areaHeight;
      positions[i * 3 + 2] = (Math.random() - 0.5) * areaDepth;

      // Random slow velocities
      particleVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.012,
          (Math.random() - 0.5) * 0.012,
          (Math.random() - 0.5) * 0.012
        )
      );
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Custom material using our dynamically created glowing cyan texture
    const particleMat = new THREE.PointsMaterial({
      size: 0.28,
      map: cyanTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particleSystem);

    // --- CONSTELLATION LINES SETUP ---
    // Max line connections
    const maxConnections = 150;
    const linePositions = new Float32Array(maxConnections * 2 * 3); // 2 vertices per line, 3 coords each
    const lineColors = new Float32Array(maxConnections * 2 * 3);

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lineSegments = new THREE.LineSegments(lineGeo, lineMat);
    mainGroup.add(lineSegments);

    // --- KUBERNETES CORE NODES (3D GEOMETRIES) ---
    // Node 1: Kubernetes Master Control Plane (Cyan wireframe Sphere)
    const masterNodeGeo = new THREE.SphereGeometry(0.7, 16, 16);
    const masterNodeMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const masterNode = new THREE.Mesh(masterNodeGeo, masterNodeMat);
    masterNode.position.set(-3.5, 1.5, -2);
    mainGroup.add(masterNode);

    // Node 1 Orbital Ring
    const ringGeo = new THREE.RingGeometry(1.0, 1.05, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const orbitalRing = new THREE.Mesh(ringGeo, ringMat);
    orbitalRing.position.copy(masterNode.position);
    orbitalRing.rotation.x = Math.PI / 3;
    mainGroup.add(orbitalRing);

    // Node 2: Worker Node A (Emerald wireframe Icosahedron)
    const workerAGeo = new THREE.IcosahedronGeometry(0.55, 1);
    const workerAMat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const workerNodeA = new THREE.Mesh(workerAGeo, workerAMat);
    workerNodeA.position.set(3.8, -1.8, -1);
    mainGroup.add(workerNodeA);

    // Node 3: Worker Node B (Indigo wireframe Torus)
    const workerBGeo = new THREE.TorusGeometry(0.4, 0.12, 8, 16);
    const workerBMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const workerNodeB = new THREE.Mesh(workerBGeo, workerBMat);
    workerNodeB.position.set(1.5, 2.5, -3);
    mainGroup.add(workerNodeB);

    // --- MOUSE TRACKING & PARALLAX ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Calculate normalized mouse coords (-1 to 1)
      targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();

      // Smoothly interpolate mouse position (lerp)
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Apply subtle camera parallax based on mouse
      mainGroup.rotation.y = mouseX * 0.18;
      mainGroup.rotation.x = -mouseY * 0.12;

      // Rotate individual core nodes at different speeds
      masterNode.rotation.y = elapsedTime * 0.25;
      masterNode.rotation.x = elapsedTime * 0.15;
      orbitalRing.rotation.z = -elapsedTime * 0.4;

      workerNodeA.rotation.y = -elapsedTime * 0.3;
      workerNodeA.rotation.z = elapsedTime * 0.2;

      workerNodeB.rotation.x = elapsedTime * 0.2;
      workerNodeB.rotation.y = elapsedTime * 0.35;

      // Update particle positions
      const positionsAttr = particleGeo.getAttribute("position") as THREE.BufferAttribute;
      const positionsArray = positionsAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        // Move particle
        positionsArray[i * 3] += particleVelocities[i].x;
        positionsArray[i * 3 + 1] += particleVelocities[i].y;
        positionsArray[i * 3 + 2] += particleVelocities[i].z;

        // Bounce off boundary walls
        if (Math.abs(positionsArray[i * 3]) > areaWidth / 2) {
          particleVelocities[i].x *= -1;
        }
        if (Math.abs(positionsArray[i * 3 + 1]) > areaHeight / 2) {
          particleVelocities[i].y *= -1;
        }
        if (Math.abs(positionsArray[i * 3 + 2]) > areaDepth / 2) {
          particleVelocities[i].z *= -1;
        }
      }
      positionsAttr.needsUpdate = true;

      // Re-calculate constellation lines
      let connectionIdx = 0;
      const linePosArray = lineGeo.getAttribute("position").array as Float32Array;
      const lineColArray = lineGeo.getAttribute("color").array as Float32Array;

      // Max proximity distance for connection
      const connectionDist = 2.4;

      for (let i = 0; i < particleCount; i++) {
        const x1 = positionsArray[i * 3];
        const y1 = positionsArray[i * 3 + 1];
        const z1 = positionsArray[i * 3 + 2];

        // Check distance against other particles
        for (let j = i + 1; j < particleCount; j++) {
          if (connectionIdx >= maxConnections) break;

          const x2 = positionsArray[j * 3];
          const y2 = positionsArray[j * 3 + 1];
          const z2 = positionsArray[j * 3 + 2];

          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDist) {
            // Line Segment point 1
            linePosArray[connectionIdx * 6] = x1;
            linePosArray[connectionIdx * 6 + 1] = y1;
            linePosArray[connectionIdx * 6 + 2] = z1;

            // Line Segment point 2
            linePosArray[connectionIdx * 6 + 3] = x2;
            linePosArray[connectionIdx * 6 + 4] = y2;
            linePosArray[connectionIdx * 6 + 5] = z2;

            // Fade opacity color based on distance
            const alpha = 1.0 - dist / connectionDist;
            
            // Set vertex colors (gradient between node points or matching theme)
            // Point 1 color
            lineColArray[connectionIdx * 6] = 0.13 * alpha;      // R (soft cyan-ish)
            lineColArray[connectionIdx * 6 + 1] = 0.82 * alpha;  // G
            lineColArray[connectionIdx * 6 + 2] = 0.93 * alpha;  // B
            
            // Point 2 color
            lineColArray[connectionIdx * 6 + 3] = 0.2 * alpha;   // R
            lineColArray[connectionIdx * 6 + 4] = 0.84 * alpha;  // G
            lineColArray[connectionIdx * 6 + 5] = 0.6 * alpha;   // B (greener/emerald-ish)

            connectionIdx++;
          }
        }
      }

      // Reset coordinates for unused connection slots to hide them
      for (let i = connectionIdx; i < maxConnections; i++) {
        linePosArray[i * 6] = 0;
        linePosArray[i * 6 + 1] = 0;
        linePosArray[i * 6 + 2] = 0;
        linePosArray[i * 6 + 3] = 0;
        linePosArray[i * 6 + 4] = 0;
        linePosArray[i * 6 + 5] = 0;
      }

      lineGeo.getAttribute("position").needsUpdate = true;
      lineGeo.getAttribute("color").needsUpdate = true;

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // --- HANDLE WINDOW RESIZE ---
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // --- CLEANUP ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Geometries
      particleGeo.dispose();
      lineGeo.dispose();
      masterNodeGeo.dispose();
      ringGeo.dispose();
      workerAGeo.dispose();
      workerBGeo.dispose();

      // Materials
      particleMat.dispose();
      lineMat.dispose();
      masterNodeMat.dispose();
      ringMat.dispose();
      workerAMat.dispose();
      workerBMat.dispose();

      // Textures
      cyanTexture.dispose();
      emeraldTexture.dispose();
      indigoTexture.dispose();

      // Renderer
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden" 
      style={{ mixBlendMode: "screen" }}
    />
  );
}
