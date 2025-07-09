import { motion } from "motion/react";
import { World } from "./globe/world";
import { TypewriterEffect } from "../../../../components/ui/typewriter-effect";
// import { ArrowRight as ArrowRightIcon, Code as CodeIcon } from "lucide-react";

const LandingSection = () => {
    // const titles = [{ "text": "Software Solutions." }, { "text": "Web Applications." }, { "text": "ERP Systems." }];
    const n = [0, 1, 2];

    return (
        <div>
            <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto">
                <div className="relative overflow-hidden h-full md:h-[40rem] px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-center text-2xl md:text-4xl font-extrabold">
                            Transform your business <br /> with high-quality Software Solutions.
                        </h2>
                    </motion.div>

                    <World />

                    {/* 
                    <div className="absolute z-50 bottom-0">
                        <div className="md:grid md:grid-cols-3">
                            {n.map((i) => (
                                <div className="backdrop-blur-lg p-8 rounded-lg bg-white/9" key={i}>
                                    <div className="mb-6">
                                        <div className="text-lg font-semibold">Custom Software Development</div>
                                        <div className="text-sm font-semibold">Build Tailorder Softwares</div>
                                        <div>
                                            <p className="text-sm mt-2">
                                                We specialize in creating custom software solutions tailored to your unique business needs. Our team of experts will work closely with you to understand your requirements and deliver high-quality software that drives efficiency and growth.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <CodeIcon />
                                        <ArrowRightIcon />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
 */}

                </div>
            </div>
        </div >)
}


export { LandingSection }
