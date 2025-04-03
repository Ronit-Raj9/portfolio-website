"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Float } from "@react-three/drei"
import * as THREE from "three"

function FloatingRings() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.z = state.clock.getElapsedTime() * 0.2
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
  })

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[0, 0, i * -0.2]} rotation={[0, 0, (i * Math.PI) / 5]}>
          <torusGeometry args={[4 - i * 0.3, 0.1, 16, 100]} />
          <meshStandardMaterial
            color="#4338ca"
            metalness={0.8}
            roughness={0.2}
            opacity={0.8 - i * 0.1}
            transparent
            emissive="#6d28d9"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

function ParticleField() {
  const points = useRef<THREE.Points>(null)
  const particlesGeometry = new THREE.BufferGeometry()
  const particleCount = 500

  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20
    positions[i + 1] = (Math.random() - 0.5) * 20
    positions[i + 2] = (Math.random() - 0.5) * 20
  }
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  useFrame((state) => {
    if (!points.current) return
    points.current.rotation.y = state.clock.getElapsedTime() * 0.05
    points.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2
  })

  return (
    <points ref={points}>
      <bufferGeometry {...particlesGeometry} />
      <pointsMaterial
        size={0.05}
        color="#6d28d9"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.2} color="#4338ca" />
      
      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <FloatingRings />
      </Float>
      
      <ParticleField />
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          color="#020617"
          metalness={0.8}
          roughness={0.5}
          envMapIntensity={0.2}
        />
      </mesh>
    </>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <Canvas dpr={[1, 2]} style={{ background: 'transparent' }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
} 