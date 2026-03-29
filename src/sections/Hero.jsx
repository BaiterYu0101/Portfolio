import HeroText from "../components/HeroText";
import { Suspense } from "react";
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Drone } from "../components/Drone";

import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText mobile={isMobile} />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas style={{ border: '2px solid red' }}>
          <PerspectiveCamera makeDefault position={[0, 0, isMobile ? 18 : 5]} fov={50} />
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
          <pointLight position={[-5, 5, 5]} intensity={0.8} color="#ff00ff" />
          <pointLight position={[5, -5, 5]} intensity={0.6} color="#00ffff" />
          <Environment preset="sunset" />
          <OrbitControls 
            enableZoom={false}
            autoRotate
            autoRotateSpeed={2}
            enablePan={false}
            enableRotate={!isMobile}
          />
          <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center z-50"><div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div><span className="ml-4 text-white text-lg">Loading drone...</span></div>}>
            <Drone />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};


export default Hero;