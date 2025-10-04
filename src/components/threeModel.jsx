import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useDrag } from "@use-gesture/react";

function Model({ url, scale = 1 }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={scale} />;
}

function Shape({ type = "cube", size = 1, color = "skyblue", modelUrl = null, enableRotation = false }) {
  const meshRef = useRef();

  useFrame(() => {
    if (enableRotation && meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  let geometry;
  switch (type) {
    case "sphere":
      geometry = <sphereGeometry args={[0.5 * size, 32, 32]} />;
      break;
    case "cone":
      geometry = <coneGeometry args={[0.5 * size, 1 * size, 32]} />;
      break;
    case "torus":
      geometry = <torusGeometry args={[0.4 * size, 0.15 * size, 16, 100]} />;
      break;
    case "cube":
    default:
      geometry = <boxGeometry args={[1 * size, 1 * size, 1 * size]} />;
      break;
  }

  return (
    <mesh ref={meshRef}>
      {modelUrl ? (
        <Model url={modelUrl} scale={size} />
      ) : (
        <>
          {geometry}
          <meshStandardMaterial color={color} />
        </>
      )}
    </mesh>
  );
}

export default function ThreeDComponent({
  type = "cube",
  size = 1,
  color = "skyblue",
  modelUrl = null,
  autoRotate = false,
  allowZoom = false,
  rotateObject = false
}) {
  const meshRef = useRef();

  // Only enable dragging if rotateObject is true
  const bind = useDrag(
    ({ delta: [dx, dy] }) => {
      if (rotateObject && meshRef.current) {
        meshRef.current.rotation.y += dx * 0.01;
        meshRef.current.rotation.x += dy * 0.01;
      }
    },
    { pointerEvents: true }
  );

  return (
    <div style={{ width: "100%", height: "500px" }} {...(rotateObject ? bind() : {})}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
        <Suspense fallback={null}>
          <group ref={meshRef}>
            <Shape
              type={type}
              size={size}
              color={color}
              modelUrl={modelUrl}
              enableRotation={autoRotate}
            />
          </group>
        </Suspense>
        <OrbitControls enableZoom={allowZoom} enablePan={false}/>
      </Canvas>
    </div>
  );
}

