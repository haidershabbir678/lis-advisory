import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Database, Sparkles } from 'lucide-react';

export default function ThreeKnowledgeGraph() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e18);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Knowledge Node Concepts (LIS Domain)
    const nodeData = [
      { name: 'Dublin Core Schema', color: 0x38bdf8 },
      { name: 'ANSI/NISO Z39.19 Thesaurus', color: 0x0284c7 },
      { name: 'DSpace 8.0 Repository', color: 0x10b981 },
      { name: 'Koha ILS Systems', color: 0x6366f1 },
      { name: 'OAIS Preservation (ISO 14721)', color: 0x38bdf8 },
      { name: 'SKOS Semantic Ontologies', color: 0x0284c7 },
      { name: 'PRISMA Evidence Synthesis', color: 0x10b981 },
      { name: 'Vector RAG Grounding', color: 0x60a5fa },
      { name: 'MARC21 / RDA Ingestion', color: 0x94a3b8 },
      { name: 'ISO 15489 Records Governance', color: 0x10b981 },
    ];

    const graphGroup = new THREE.Group();
    scene.add(graphGroup);

    // Central Knowledge Core
    const coreGeo = new THREE.IcosahedronGeometry(1.5, 1);
    const coreMat = new THREE.MeshBasicMaterial({ 
      color: 0x38bdf8, 
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    graphGroup.add(coreMesh);

    // Orbiting Nodes
    const sphereGeo = new THREE.SphereGeometry(0.65, 20, 20);
    const positions = [];

    nodeData.forEach((node, i) => {
      const phi = Math.acos(-1 + (2 * i) / nodeData.length);
      const theta = Math.sqrt(nodeData.length * Math.PI) * phi;
      const radius = 8.5 + (i % 2 === 0 ? 1 : -1) * 0.8;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions.push(new THREE.Vector3(x, y, z));

      const mat = new THREE.MeshStandardMaterial({
        color: node.color,
        roughness: 0.2,
        metalness: 0.5,
        emissive: node.color,
        emissiveIntensity: 0.35
      });

      const mesh = new THREE.Mesh(sphereGeo, mat);
      mesh.position.set(x, y, z);
      graphGroup.add(mesh);
    });

    // Interconnecting Semantic Links
    const lineMat = new THREE.LineBasicMaterial({ 
      color: 0x334155, 
      transparent: true, 
      opacity: 0.7 
    });

    positions.forEach((pos, idx) => {
      // Connect to Core
      const centerLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), pos]),
        lineMat
      );
      graphGroup.add(centerLine);

      // Connect to neighbor node
      const nextPos = positions[(idx + 1) % positions.length];
      const adjLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([pos, nextPos]),
        lineMat
      );
      graphGroup.add(adjLine);
    });

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const dirLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    dirLight.position.set(10, 15, 10);
    scene.add(dirLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / width - 0.5) * 1.5;
      mouseY = ((event.clientY - rect.top) / height - 0.5) * 1.5;
    };

    currentMount.addEventListener('mousemove', onMouseMove);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      coreMesh.rotation.y += 0.005;
      coreMesh.rotation.x += 0.002;

      graphGroup.rotation.y += (mouseX - graphGroup.rotation.y) * 0.04 + 0.002;
      graphGroup.rotation.x += (mouseY - graphGroup.rotation.x) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeEventListener('mousemove', onMouseMove);
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] lg:h-[420px] rounded-xl bg-[#0a0e18] border border-white/10 shadow-2xl overflow-hidden">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      {/* Top Overlay Badge */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-2.5 py-1 rounded bg-[#0f1523]/90 border border-white/10 text-[11px] font-mono text-slate-300 backdrop-blur-sm">
        <Sparkles className="w-3 h-3 text-sky-400" />
        <span>Three.js Semantic Ontology Mesh</span>
      </div>

      {/* Bottom Status */}
      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between p-2.5 rounded-lg bg-[#0f1523]/90 border border-white/10 text-[11px] font-mono text-slate-400 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-sky-400" />
          <span>Interactive Knowledge Graph &bull; Drag to rotate nodes</span>
        </div>
        <span className="text-emerald-400 flex items-center gap-1 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Zero-Latency Retrieval</span>
        </span>
      </div>
    </div>
  );
}
