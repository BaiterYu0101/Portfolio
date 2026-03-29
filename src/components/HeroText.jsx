import { FlipWords } from "./FlipWords"
import { motion } from "motion/react"

const HeroText = ({ mobile }) => {
    const words = ["Kubernetes", "Docker", "CI/CD", "Security", "Automation"]
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }
    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/* Desktop View*/}
            <div className={`flex-col ${mobile ? 'hidden' : 'flex'} md:flex c-space`}>
                <motion.h1
                    className="text-4xl md:text-7xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Hi I'm Guang Yu
                </motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p
                        className="text-2xl md:text-5xl font-medium text-neutral-300 "
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >A DevOps Engineer <br /> Dedicated to Automating
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <FlipWords words={words} className="font-black text-white text-4xl md:text-8xl" />
                    </motion.div>
                    <motion.p
                        className="text-xl md:text-4xl font-medium text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    >High Scale System </motion.p>
                </div>
            </div>
            {/* Mobile View */}
            <div className={`flex flex-col space-y-6 ${mobile ? 'flex' : 'hidden'} md:hidden`}>
                <motion.p
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                    className="text-2xl font-medium">Hi, I'm Guang Yu</motion.p>
                <div>
                    <motion.p
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                        className="text-5xl font-black  text-neutral-300">Building</motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <FlipWords words={words} className="font-bold text-white text-7xl" />
                    </motion.div>
                    <motion.p
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                        className="font-black text-white text-4xl"
                    >
                        High Scale Systems
                    </motion.p>
                </div>
            </div>

        </div>
    )
}

export default HeroText