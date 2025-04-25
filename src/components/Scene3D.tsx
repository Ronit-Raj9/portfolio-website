"use client"

import { useRef, Suspense, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, useTexture, useGLTF, Float } from "@react-three/drei"
import * as THREE from "three"
import { useTheme } from "next-themes"

function FloatingRings() {
  const groupRef = useRef<THREE.Group>(null)
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"
  
  const ringColor = isDarkTheme ? "#4338ca" : "#6d28d9"
  const ringEmissive = isDarkTheme ? "#3730a3" : "#5b21b6"

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
            color={ringColor}
            emissive={ringEmissive}
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
            opacity={0.8 - i * 0.1}
            transparent
          />
        </mesh>
      ))}
    </group>
  )
}

function ParticleField() {
  const points = useRef<THREE.Points>(null)
  const particlesCount = 500
  const particlesMaterial = useRef<THREE.PointsMaterial>(null)
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  // Create a buffer geometry with random positions
  const positionArray = new Float32Array(particlesCount * 3)
  const colorArray = new Float32Array(particlesCount * 3)
  const color1 = new THREE.Color(isDarkTheme ? "#4338ca" : "#7c3aed")
  const color2 = new THREE.Color(isDarkTheme ? "#6d28d9" : "#6366f1")
  
  for (let i = 0; i < particlesCount * 3; i += 3) {
    // Position
    positionArray[i] = (Math.random() - 0.5) * 20
    positionArray[i + 1] = (Math.random() - 0.5) * 20
    positionArray[i + 2] = (Math.random() - 0.5) * 20
    
    // Color (gradient between two colors)
    const mixRatio = Math.random()
    const particleColor = new THREE.Color().lerpColors(color1, color2, mixRatio)
    colorArray[i] = particleColor.r
    colorArray[i + 1] = particleColor.g
    colorArray[i + 2] = particleColor.b
  }

  // Add some movement to particles
  useFrame((state) => {
    if (!points.current) return
    points.current.rotation.y = state.clock.getElapsedTime() * 0.05
    points.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2
    
    if (particlesMaterial.current) {
      particlesMaterial.current.size = 0.05 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.01
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positionArray}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colorArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={particlesMaterial}
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.6}
        vertexColors
        depthWrite={false}
      />
    </points>
  )
}

function MouseFollowLight() {
  const light = useRef<THREE.PointLight>(null)
  const { viewport } = useThree()
  const [position, setPosition] = useState([0, 0, 3])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Convert mouse position to normalized device coordinates
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      
      // Scale to viewport size
      const worldX = x * viewport.width / 2
      const worldY = y * viewport.height / 2
      
      setPosition([worldX, worldY, 3])
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [viewport.width, viewport.height])

  return (
    <pointLight
      ref={light}
      position={position as [number, number, number]}
      intensity={1}
      distance={10}
      color="#8b5cf6"
    />
  )
}

function Scene() {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"
  
  // Set scene colors based on theme
  const floorColor = isDarkTheme ? "#020617" : "#f8fafc"
  const ambientLightIntensity = isDarkTheme ? 0.2 : 0.4

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      
      <ambientLight intensity={ambientLightIntensity} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <MouseFollowLight />
      
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
      <FloatingRings />
      </Float>
      
      <ParticleField />
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          color={floorColor}
          metalness={0.8}
          roughness={0.5}
        />
      </mesh>
    </>
  )
}

function SceneContainer() {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"
  
  return (
    <Canvas 
      dpr={[1, 1.5]} 
      style={{ background: 'transparent' }}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ 
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: true
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      <SceneContainer />
    </div>
  )
} 