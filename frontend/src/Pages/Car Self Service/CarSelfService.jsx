import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function CarSelfService() {
  const CarModel = () => {
    const { scene } = useGLTF('/models/bmw-car-model2/scene.gltf');
    return <primitive object={scene} scale={1} />;
  };

  return (
    <section className="self-service-section">
      <div style={{ height: '500px', width: '50%' }}>
        <Canvas>

          <ambientLight intensity={3} />
          <directionalLight position={[1, 5, 1]} intensity={2} />
          
          <CarModel />
  
          <OrbitControls />

        </Canvas>
      </div>
    </section>
  );
}

export default CarSelfService;
