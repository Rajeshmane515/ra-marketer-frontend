// components/animations/GlassBlob.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GlassBlob({
  noiseStrength = 0.45,
  noiseFrequency = 0.65,
  noiseSpeed = 0.7,
  transmission = 0.9,
  roughness = 0.04,
  thickness = 2.5,
  ior = 1.5,
  clearcoat = 1.0,
  clearcoatRoughness = 0.05,
  color = "#ffffff",
  blobScale = 1.6
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Fallback to window dimensions if container has not finished layout pass
    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true, 
      powerPreference: "high-performance" 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    
    // Clean previous elements and mount canvas
    containerRef.current.innerHTML = '';
    const canvasElement = renderer.domElement;
    containerRef.current.appendChild(canvasElement);

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0x0a0915, 1.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(5, 5, 4);
    scene.add(dirLight);

    const magentaLight = new THREE.PointLight(0xec4899, 15, 15);
    magentaLight.position.set(-4, 2, 2);
    scene.add(magentaLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 20, 15);
    purpleLight.position.set(3, 4, 1);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 15, 15);
    cyanLight.position.set(0, -4, 2);
    scene.add(cyanLight);

    // --- Mesh & Material ---
    const geometry = new THREE.SphereGeometry(blobScale, 96, 96);
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(color),
      roughness: roughness,
      metalness: 0.05,
      transmission: transmission,
      ior: ior,
      thickness: thickness,
      transparent: true,
      opacity: 1.0,
      clearcoat: clearcoat,
      clearcoatRoughness: clearcoatRoughness,
      side: THREE.DoubleSide
    });

    const uniforms = {
      uTime: { value: 0 },
      uNoiseFrequency: { value: noiseFrequency },
      uNoiseStrength: { value: noiseStrength },
      uNoiseSpeed: { value: noiseSpeed },
      uMouse: { value: new THREE.Vector2(0, 0) }
    };

    material.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = uniforms.uTime;
      shader.uniforms.uNoiseFrequency = uniforms.uNoiseFrequency;
      shader.uniforms.uNoiseStrength = uniforms.uNoiseStrength;
      shader.uniforms.uNoiseSpeed = uniforms.uNoiseSpeed;
      shader.uniforms.uMouse = uniforms.uMouse;

      shader.vertexShader = `
        uniform float uTime;
        uniform float uNoiseFrequency;
        uniform float uNoiseStrength;
        uniform float uNoiseSpeed;
        uniform vec2 uMouse;

        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          i = mod289(i);
          vec4 p = permute(permute(permute(
                     i.z + vec4(0.0, i1.z, i2.z, 1.0))
                   + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                   + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          vec4 x = x_ * ns.x + ns.yyyy;
          vec4 y = y_ * ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
          p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }

        float getDisplacement(vec3 p) {
          float t = uTime * uNoiseSpeed;
          float baseNoise = snoise(p * uNoiseFrequency + vec3(0.0, 0.0, t));
          vec3 mouseInteraction = vec3(uMouse.x * 2.0, uMouse.y * 2.0, 0.0);
          float dist = distance(p, mouseInteraction);
          float mouseForce = smoothstep(3.0, 0.0, dist) * 0.4;
          return (baseNoise * uNoiseStrength) + mouseForce;
        }
      ` + shader.vertexShader;

      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `
        #include <begin_vertex>
        float disp = getDisplacement(position);
        transformed += normal * disp;
        `
      );

      shader.vertexShader = shader.vertexShader.replace(
        '#include <defaultnormal_vertex>',
        `
        #include <defaultnormal_vertex>
        float eps = 0.02;
        vec3 t_tangent = vec3(1.0, 0.0, 0.0);
        vec3 t_bitangent = cross(normal, t_tangent);
        t_tangent = cross(t_bitangent, normal);
        
        vec3 neighbor1 = position + t_tangent * eps;
        vec3 neighbor2 = position + t_bitangent * eps;
        
        vec3 displacedNeighbor1 = neighbor1 + normalize(neighbor1) * getDisplacement(neighbor1);
        vec3 displacedNeighbor2 = neighbor2 + normalize(neighbor2) * getDisplacement(neighbor2);
        
        vec3 displacedPos = position + normal * disp;
        vec3 vector1 = displacedNeighbor1 - displacedPos;
        vec3 vector2 = displacedNeighbor2 - displacedPos;
        vec3 computedNormal = normalize(cross(vector1, vector2));
        
        objectNormal = computedNormal;
        vNormal = normalize(normalMatrix * computedNormal);
        `
      );
    };

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // --- Interactions ---
    const mouse = new THREE.Vector2(0, 0);
    const targetMouse = new THREE.Vector2(0, 0);

    const handleMouseMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      targetMouse.set(x, y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      
      mouse.x += (targetMouse.x - mouse.x) * 0.08;
      mouse.y += (targetMouse.y - mouse.y) * 0.08;

      uniforms.uTime.value = elapsedTime;
      uniforms.uMouse.value.copy(mouse);

      mesh.rotation.y = elapsedTime * 0.05;
      mesh.rotation.x = elapsedTime * 0.02;
      mesh.position.x = mouse.x * 0.3;
      mesh.position.y = mouse.y * 0.3;

      magentaLight.position.x = Math.sin(elapsedTime * 0.5) * 5;
      magentaLight.position.z = Math.cos(elapsedTime * 0.5) * 5;
      cyanLight.position.y = Math.sin(elapsedTime * 0.7) * 4;
      cyanLight.position.x = Math.cos(elapsedTime * 0.7) * 4;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth || window.innerWidth;
      const h = containerRef.current.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // --- Bulletproof Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && canvasElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(canvasElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [noiseStrength, noiseFrequency, noiseSpeed, transmission, roughness, thickness, ior, clearcoat, clearcoatRoughness, color, blobScale]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%', outline: 'none' }} />;
}