import HeroText from "../components/HeroText";
import { useMediaQuery } from 'react-responsive';
import { Suspense } from "react";
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Drone } from "../components/Drone";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
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
            enableRotate={true}
            // disables all pointer/touch controls on mobile
            makeDefault
            onStart={(e) => {
              if (window.innerWidth <= 853) e.target.enabled = false;
            }}
          />
          <Suspense fallback={null}>
            <Drone />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};


export default Hero;