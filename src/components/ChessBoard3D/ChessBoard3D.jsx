import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

/* ── Floating Particle Field ──────────────────────────────── */
function Particles({ count = 120 }) {
  const mesh = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 22
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.04
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.05
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#0153D9" size={0.06} transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

/* ── Chess Board ──────────────────────────────────────────── */
function ChessBoard() {
  const tiles = useMemo(() => {
    const result = []
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isWhite = (row + col) % 2 === 0
        result.push({ row, col, isWhite })
      }
    }
    return result
  }, [])

  return (
    <group position={[0, -0.15, 0]}>
      {/* Board base */}
      <mesh position={[3.5, -0.12, 3.5]} receiveShadow>
        <boxGeometry args={[8.4, 0.18, 8.4]} />
        <meshStandardMaterial color="#013D96" roughness={0.3} metalness={0.5} />
      </mesh>

      {/* Tiles */}
      {tiles.map(({ row, col, isWhite }) => (
        <mesh key={`${row}-${col}`} position={[col, 0, row]} receiveShadow>
          <boxGeometry args={[0.95, 0.08, 0.95]} />
          <meshStandardMaterial
            color={isWhite ? '#d4e3f5' : '#0a1a3a'}
            roughness={0.4}
            metalness={isWhite ? 0.1 : 0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

/* ── Chess Piece: Pawn ────────────────────────────────────── */
function Pawn({ position, color = 'white', floatDelay = 0 }) {
  const mesh = useRef()
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2 + floatDelay) * 0.08
    }
  })
  const mat = color === 'white'
    ? { color: '#c8d8ee', metalness: 0.5, roughness: 0.3 }
    : { color: '#1a2a4a', metalness: 0.6, roughness: 0.25 }

  return (
    <group ref={mesh} position={position}>
      <mesh position={[0, 0.15, 0]} castShadow>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
      <mesh position={[0, 0.0, 0]} castShadow>
        <cylinderGeometry args={[0.09, 0.14, 0.22, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
      <mesh position={[0, -0.16, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.25, 0.12, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
    </group>
  )
}

/* ── Chess Piece: King ────────────────────────────────────── */
function King({ position, color = 'white', floatDelay = 0 }) {
  const mesh = useRef()
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.9 + floatDelay) * 0.1
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })
  const mat = color === 'white'
    ? { color: '#e8f0fa', metalness: 0.6, roughness: 0.2 }
    : { color: '#0d1f3c', metalness: 0.7, roughness: 0.2 }

  const emissive = color === 'white' ? '#0153D9' : '#F9D024'

  return (
    <group ref={mesh} position={position}>
      {/* Cross */}
      <mesh position={[0, 0.72, 0]} castShadow>
        <boxGeometry args={[0.06, 0.25, 0.06]} />
        <meshStandardMaterial {...mat} emissive={emissive} emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[0.18, 0.06, 0.06]} />
        <meshStandardMaterial {...mat} emissive={emissive} emissiveIntensity={0.3} />
      </mesh>
      {/* Crown */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.14, 0.22, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
      {/* Body */}
      <mesh position={[0, 0.22, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.17, 0.45, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
      {/* Base */}
      <mesh position={[0, -0.06, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.28, 0.16, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
    </group>
  )
}

/* ── Chess Piece: Queen ───────────────────────────────────── */
function Queen({ position, color = 'white', floatDelay = 0 }) {
  const mesh = useRef()
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.0 + floatDelay) * 0.12
    }
  })
  const mat = color === 'white'
    ? { color: '#dceafa', metalness: 0.65, roughness: 0.2 }
    : { color: '#0d1f40', metalness: 0.75, roughness: 0.2 }

  return (
    <group ref={mesh} position={position}>
      {/* Top orb */}
      <mesh position={[0, 0.68, 0]} castShadow>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial {...mat} emissive="#F9D024" emissiveIntensity={0.4} />
      </mesh>
      {/* Crown spikes */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((angle * Math.PI) / 180) * 0.13,
            0.52,
            Math.sin((angle * Math.PI) / 180) * 0.13,
          ]}
          castShadow
        >
          <coneGeometry args={[0.04, 0.14, 8]} />
          <meshStandardMaterial {...mat} />
        </mesh>
      ))}
      {/* Body */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.14, 0.18, 0.5, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
      {/* Base */}
      <mesh position={[0, -0.1, 0]} castShadow>
        <cylinderGeometry args={[0.26, 0.3, 0.18, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
    </group>
  )
}

/* ── Chess Piece: Knight ──────────────────────────────────── */
function Knight({ position, color = 'white', floatDelay = 0 }) {
  const mesh = useRef()
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.1 + floatDelay) * 0.09
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + floatDelay) * 0.15
    }
  })
  const mat = color === 'white'
    ? { color: '#ccd8ee', metalness: 0.5, roughness: 0.3 }
    : { color: '#0f1d38', metalness: 0.65, roughness: 0.25 }

  return (
    <group ref={mesh} position={position}>
      {/* Head */}
      <mesh position={[0.05, 0.52, 0]} castShadow rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.22, 0.28, 0.18]} />
        <meshStandardMaterial {...mat} />
      </mesh>
      {/* Snout */}
      <mesh position={[0.16, 0.42, 0]} castShadow>
        <boxGeometry args={[0.14, 0.12, 0.14]} />
        <meshStandardMaterial {...mat} />
      </mesh>
      {/* Neck */}
      <mesh position={[0, 0.28, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.14, 0.28, 12]} />
        <meshStandardMaterial {...mat} />
      </mesh>
      {/* Base */}
      <mesh position={[0, 0.04, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.25, 0.16, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
    </group>
  )
}

/* ── Chess Piece: Rook ────────────────────────────────────── */
function Rook({ position, color = 'white', floatDelay = 0 }) {
  const mesh = useRef()
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + floatDelay) * 0.07
    }
  })
  const mat = color === 'white'
    ? { color: '#c5d5e8', metalness: 0.55, roughness: 0.3 }
    : { color: '#101d35', metalness: 0.65, roughness: 0.25 }

  return (
    <group ref={mesh} position={position}>
      {/* Battlements */}
      {[-0.1, 0, 0.1].map((offset, i) => (
        <mesh key={i} position={[offset, 0.62, 0]} castShadow>
          <boxGeometry args={[0.08, 0.12, 0.22]} />
          <meshStandardMaterial {...mat} />
        </mesh>
      ))}
      {/* Tower */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <cylinderGeometry args={[0.17, 0.17, 0.5, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
      {/* Base */}
      <mesh position={[0, 0.0, 0]} castShadow>
        <cylinderGeometry args={[0.24, 0.27, 0.14, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
    </group>
  )
}

/* ── Board Glow Plane ─────────────────────────────────────── */
function GlowPlane() {
  return (
    <mesh position={[3.5, -0.28, 3.5]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial color="#0153D9" transparent opacity={0.04} />
    </mesh>
  )
}

/* ── Scene ────────────────────────────────────────────────── */
function ChessScene() {
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[3.5, 6.5, 10]} fov={42} />

      {/* Lighting */}
      <ambientLight intensity={0.35} />
      <pointLight position={[-3, 8, 4]} intensity={1.8} color="#0153D9" />
      <pointLight position={[10, 6, -2]} intensity={1.2} color="#F9D024" />
      <pointLight position={[3.5, 10, 3.5]} intensity={0.8} color="#ffffff" />
      <spotLight
        position={[3.5, 12, 3.5]}
        angle={0.35}
        penumbra={0.8}
        intensity={2}
        color="#0153D9"
        castShadow
      />

      {/* Board */}
      <ChessBoard />
      <GlowPlane />

      {/* White pieces */}
      <King    position={[4, 0.28, 0.5]} color="white" floatDelay={0} />
      <Queen   position={[3, 0.28, 0.5]} color="white" floatDelay={1} />
      <Knight  position={[1, 0.28, 0.5]} color="white" floatDelay={2} />
      <Knight  position={[6, 0.28, 0.5]} color="white" floatDelay={0.5} />
      <Rook    position={[0, 0.28, 0.5]} color="white" floatDelay={1.5} />
      <Pawn    position={[0, 0.22, 1.5]} color="white" floatDelay={0.3} />
      <Pawn    position={[1, 0.22, 1.5]} color="white" floatDelay={0.7} />
      <Pawn    position={[2, 0.22, 1.5]} color="white" floatDelay={1.1} />
      <Pawn    position={[3, 0.22, 1.5]} color="white" floatDelay={1.5} />
      <Pawn    position={[4, 0.22, 1.5]} color="white" floatDelay={1.9} />

      {/* Black pieces */}
      <King    position={[4, 0.28, 6.5]} color="black" floatDelay={0.8} />
      <Queen   position={[3, 0.28, 6.5]} color="black" floatDelay={1.6} />
      <Knight  position={[1, 0.28, 6.5]} color="black" floatDelay={2.4} />
      <Rook    position={[7, 0.28, 6.5]} color="black" floatDelay={0.4} />
      <Pawn    position={[0, 0.22, 5.5]} color="black" floatDelay={0.6} />
      <Pawn    position={[1, 0.22, 5.5]} color="black" floatDelay={1.0} />
      <Pawn    position={[3, 0.22, 5.5]} color="black" floatDelay={1.4} />
      <Pawn    position={[5, 0.22, 5.5]} color="black" floatDelay={1.8} />

      {/* Particles */}
      <Particles count={100} />

      {/* Orbit (limited) */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 4}
        target={[3.5, 0, 3.5]}
      />
    </>
  )
}

/* ── Exported Component ───────────────────────────────────── */
export default function ChessBoard3D() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ChessScene />
      </Canvas>
    </div>
  )
}
