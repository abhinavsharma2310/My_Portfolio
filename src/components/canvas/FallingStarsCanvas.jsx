import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Falling Star Component
const FallingStars = () => {
  const ref = useRef();
  const [positions] = useState(() =>
    random.inSphere(new Float32Array(500), { radius: 0.5 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

    // Make stars fall
    ref.current.position.y -= delta * 0.3; // Falling speed
    if (ref.current.position.y < -2) {
      ref.current.position.y = 2; // Reset position when off-screen
    }
  });

  return (
    <group ref={ref} position={[0, 2, 0]}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={["#ffcc00", "#ff5733", "#33ff57", "#3380ff"][Math.floor(Math.random() * 4)]}
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Moon Component
const Moon = () => {
  return (
    <Sphere args={[0.5, 32, 32]} position={[1, 1.5, 0]}>
      <meshStandardMaterial color="gray" />
    </Sphere>
  );
};

// Falling Stars Canvas
const FallingStarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Moon />
          <FallingStars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default FallingStarsCanvas;
