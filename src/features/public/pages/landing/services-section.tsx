import { MoveRight as MoveRightIcon } from "lucide-react";
import { motion } from "motion/react";

const data = [
    {
        title: "Back-End Development",
        description: "We specialize in building robust, scalable, and high-performance back-end systems for web and mobile applications, including enterprise-grade services. Our expertise ensures reliable infrastructure that can handle complex logic and high user traffic.",
        languages: [
            "Python",
            "JavaScript",
            "Frappe",
            "TypeScript",
            "Django"
        ]
    },
    {
        title: "Front-End Development",
        description: "We craft responsive, fast, and intuitive user interfaces using modern front-end frameworks. Our focus is on delivering seamless user experiences across devices and platforms.",
        languages: [
            "React",
            "Next.js",
            "JavaScript",
            "TypeScript"
        ]
    },
    {
        title: "Web Application Development",
        description: "We develop secure, scalable, and customized web applications tailored to meet your specific business objectives, leveraging cutting-edge technologies and best practices.",
        languages: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Django"
        ]
    },
    {
        title: "ERP Systems Development",
        description: "We design and implement powerful ERP solutions using the Frappe framework and ERPNext, helping businesses streamline operations, improve efficiency, and gain real-time insights.",
        languages: [
            "Frappe",
            "ERPNext",
            "Python",
            "JavaScript"
        ]
    }
];


interface ServiceType {
    title: string;
    description: string;
    languages: string[];
}

export const ServicesSection = () => {
    return (
        <div className="bg-slate-200 text-black min-h-screen ">
            <div className="px-2 py-12 max-w-6xl mx-auto ">
                <div className="mb-8 text-center font-bold text-2xl md:text-3xl">
                    Services we provide
                </div>

                <div className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <button className="text-sm text-white bg-primary px-6 py-3 rounded-md font-medium flex items-center gap-2 cursor-pointer ">
                        Request a quote
                    </button>
                </div>

            </div>

        </div>
    )
}

const ServiceCard: React.FC<ServiceType> = (props) => {

    return (
        <div className="bg-white p-6 rounded-md cursor-pointer">
            <div className="md:flex md:flex-row-reverse md:gap-4 items-center">
                <div className="mb-2 md:shrink-0">
                    <img src="https://cdn-icons-png.flaticon.com/512/8004/8004415.png" alt="" className="h-24 w-24 md:h-32 md:w-32" />
                </div>

                <div>
                    <div className="mb-2 text-lg font-bold">{props.title}</div>
                    <div className="mb-4 text-sm">
                        {props.description}
                    </div>
                </div>
            </div>

            <div className="flex gap-1 flex-wrap mb-4">
                {props.languages.map((val, index) => (<div className="rounded-full px-2 py-1 text-xs font-medium bg-gray-200" key={index}>{val}</div>))}
            </div>
            <div >
                <button className="text-xs text-white bg-primary px-4 py-2 rounded-md font-medium flex items-center gap-2 cursor-pointer ">
                    <span>Let's Chat</span>
                    <motion.div initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                        <MoveRightIcon />
                    </motion.div>
                </button>
            </div>

        </div>
    )
}