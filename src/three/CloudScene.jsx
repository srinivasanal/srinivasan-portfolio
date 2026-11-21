import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, Line, OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { INFRA_NODES, INFRA_LINKS } from '../assets/architectureIcons';

function hasWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

function CloudCluster() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.16;
    const targetX = state.pointer.y * 0.18;
    const targetZ = -state.pointer.x * 0.12;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetZ, 0.05);
  });

  const pulseOffsets = useMemo(() => INFRA_LINKS.map((_, i) => i * 0.7), []);

  return (
    <group ref={groupRef}>
      {/* Central translucent cloud core */}
      <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.55}>
        <mesh position={[0, 0.35, 0]}>
          <icosahedronGeometry args={[0.78, 1]} />
          <meshStandardMaterial
            color="#102C50"
            emissive="#2563EB"
            emissiveIntensity={0.55}
            wireframe
          />
        </mesh>
        <mesh position={[0, 0.35, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshPhysicalMaterial
            color="#2563EB"
            emissive="#22D3EE"
            emissiveIntensity={0.35}
            roughness={0.2}
            metalness={0.4}
            transparent
            opacity={0.78}
          />
        </mesh>
      </Float>

      {/* Floating cloud puffs */}
      {[
        [-0.85, 1.35, -0.45, 0.38],
        [0.85, 1.25, -0.55, 0.34],
        [0.05, 1.55, -0.4, 0.42]
      ].map(([x, y, z, r], idx) => (
        <Float key={idx} speed={1.2 + idx * 0.2} floatIntensity={0.4}>
          <mesh position={[x, y, z]}>
            <sphereGeometry args={[r, 24, 24]} />
            <meshStandardMaterial
              color="#102C50"
              emissive="#22D3EE"
              emissiveIntensity={0.22}
              transparent
              opacity={0.55}
              roughness={0.35}
            />
          </mesh>
        </Float>
      ))}

      {/* Server & AWS Infrastructure Nodes */}
      {INFRA_NODES.map((node, index) => (
        <Float key={node.id} speed={1.6 + (index % 3) * 0.3} floatIntensity={0.45}>
          <group position={node.pos}>
            <mesh>
              <boxGeometry args={[node.size, node.size * 0.72, node.size]} />
              <meshStandardMaterial
                color="#0D2240"
                emissive={node.color}
                emissiveIntensity={0.48}
                metalness={0.65}
                roughness={0.25}
              />
            </mesh>
            <mesh position={[0, 0, node.size * 0.52]}>
              <boxGeometry args={[node.size * 0.65, node.size * 0.1, 0.02]} />
              <meshBasicMaterial color="#22D3EE" />
            </mesh>
            <Html distanceFactor={7.5} position={[0, node.size * 0.72, 0]} center>
              <div className="pointer-events-none select-none rounded-md border border-[#22D3EE]/35 bg-[#071426]/85 px-2 py-0.5 font-mono text-[10px] font-medium text-[#22D3EE] shadow-glow backdrop-blur-sm">
                {node.label}
              </div>
            </Html>
          </group>
        </Float>
      ))}

      {/* Glowing Network Links */}
      {INFRA_LINKS.map(([fromIdx, toIdx], idx) => (
        <Line
          key={`${fromIdx}-${toIdx}-${pulseOffsets[idx]}`}
          points={[INFRA_NODES[fromIdx].pos, INFRA_NODES[toIdx].pos]}
          color={idx % 2 === 0 ? '#22D3EE' : '#2563EB'}
          lineWidth={1.6}
          transparent
          opacity={0.55}
        />
      ))}

      {/* Orbital Ring */}
      <mesh rotation={[Math.PI / 2.25, 0.25, 0]}>
        <torusGeometry args={[2.35, 0.014, 16, 100]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function StaticCloudFallback() {
  return (
    <div className="glass-card relative flex h-[380px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl p-6 sm:h-[460px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.18),transparent_65%)]" />
      <svg viewBox="0 0 380 260" className="h-64 w-full max-w-sm" fill="none">
        <circle cx="190" cy="130" r="95" stroke="#22D3EE" strokeOpacity="0.25" strokeDasharray="6 6" />
        <line x1="190" y1="130" x2="80" y2="80" stroke="#22D3EE" strokeOpacity="0.6" strokeWidth="1.5" />
        <line x1="190" y1="130" x2="300" y2="85" stroke="#2563EB" strokeOpacity="0.8" strokeWidth="1.5" />
        <line x1="190" y1="130" x2="95" y2="195" stroke="#2563EB" strokeOpacity="0.8" strokeWidth="1.5" />
        <line x1="190" y1="130" x2="290" y2="195" stroke="#22D3EE" strokeOpacity="0.6" strokeWidth="1.5" />
        <circle cx="190" cy="130" r="30" fill="#102C50" stroke="#22D3EE" strokeWidth="2" />
        <text x="190" y="134" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">AWS VPC</text>
        {[
          [80, 80, 'EC2'],
          [300, 85, 'RDS'],
          [95, 195, 'ALB'],
          [290, 195, 'CI/CD']
        ].map(([cx, cy, label]) => (
          <g key={label}>
            <rect x={cx - 26} y={cy - 16} width="52" height="32" rx="8" fill="#071426" stroke="#2563EB" strokeWidth="1.5" />
            <text x={cx} y={cy + 4} textAnchor="middle" fill="#22D3EE" fontSize="10" fontWeight="600">{label}</text>
          </g>
        ))}
      </svg>
      <p className="mt-2 font-mono text-xs text-[#C2D4E8]">Interactive Cloud Topology (Static Fallback Mode)</p>
    </div>
  );
}

export default function CloudScene() {
  const [webglReady, setWebglReady] = useState(true);

  useEffect(() => {
    setWebglReady(hasWebGLSupport());
  }, []);

  if (!webglReady) {
    return <StaticCloudFallback />;
  }

  return (
    <div className="relative h-[380px] w-full sm:h-[460px] lg:h-[520px]">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.22),transparent_68%)]" />
      <Canvas
        camera={{ position: [0, 0.4, 5.4], fov: 44 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.65} />
        <pointLight position={[5, 6, 5]} intensity={1.8} color="#22D3EE" />
        <pointLight position={[-5, -4, 4]} intensity={1.4} color="#2563EB" />
        <CloudCluster />
        <Sparkles count={75} scale={6.5} size={2.2} speed={0.35} color="#22D3EE" opacity={0.55} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
      <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-[#22D3EE]/25 bg-[#071426]/80 px-3.5 py-1 font-mono text-[11px] text-[#C2D4E8] backdrop-blur-md">
        Interactive 3D Cloud Infrastructure • Drag to orbit
      </div>
    </div>
  );
}
