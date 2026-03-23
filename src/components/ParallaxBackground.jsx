import { motion, useScroll, useTransform, useSpring} from 
"motion/react";


const ParallaxBackground = () => {
    const { scrollYProgress } = useScroll();
    const x = useSpring(scrollYProgress, { damping: 50});
    const mountain3Y = useTransform(x, [0, 0.5], ["0%", "-30%"]);
    const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
    const mountain2Y = useTransform(x, [0, 0.5], ["0%", "-10%"]);
    const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

    return (
        <section className="absolute inset-0 bg-black/40">
            <div className='relative h-screen overflow-y-hidden'>
                <div className="absolute inset-0 w-full h-screen -z-50"
                    style={{
                        backgroundImage: "url(./assets/sky.jpg)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }} />
            </div>
            <motion.div className="absolute bottom-0 left-0 w-full -z-40"
                style={{
                    backgroundImage: "url(./assets/mountain-3.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    y: mountain3Y,
                }} />
            <motion.div
                className="absolute bottom-0 left-0 w-full -z-30"
                style={{
                    backgroundImage: "url(./assets/planets.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    x: planetsX,
                }} />
            <motion.div
                className="absolute bottom-0 left-0 w-full -z-20"
                style={{
                    backgroundImage: "url(./assets/mountain-2.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    y: mountain2Y,
                }} />
            <motion.div
                className="absolute bottom-0 left-0 w-full -z-10"
                style={{
                    backgroundImage: "url(./assets/mountain-1.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                }} />
        </section>
    )
}

export default ParallaxBackground;
