interface TechnologyType {
    name: string;
    image?: string;
}

const technologies: Record<string, TechnologyType[]> = {
    "Frontend": [
        {
            name: "React JS",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        },
        {
            name: "Next.js",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
        },
        {
            name: "JavaScript",
            image: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
        },
        {
            name: "TypeScript",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
        },
        {
            name: "HTML",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        },
        {
            name: "Tailwind CSS",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        },

    ],    "Backend": [
        {
            name: "FastAPI",
            image: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
        },
        {
            name: "Django",
            image: "https://static.djangoproject.com/img/logos/django-logo-positive.svg",
        },
        {
            name: "Node.js",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        },        {
            name: "Express.js",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
        },
        {
            name: "Golang",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
        },

    ],
    "Database": [
        {
            name: "PostgreSQL",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        },        {
            name: "MariaDB",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mariadb/mariadb-original.svg",
        },
        {
            name: "MongoDB",
            image: "https://images.seeklogo.com/logo-png/48/1/mongodb-logo-png_seeklogo-481256.png",
        },        {
            name: "MySQL",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
        }
    ],
    "DevOps & Cloud": [
        {
            name: "Docker",
            image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
        },
        {
            name: "DigitalOcean",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg",
        },
        {
            name: "AWS",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        }
    ]
};


export const TechnologySection = () => {
    return (
        <div className="bg-[#020021] text-white py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Our Technology
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400"> Stack</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        We leverage cutting-edge technologies to build scalable, efficient, and robust solutions that drive your business forward.
                    </p>
                </div>

                {/* Technology Categories */}
                <div className="space-y-12">
                    {Object.entries(technologies).map(([category, techs]) => (
                        <div key={category} className="group">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {category}
                                </h3>
                                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                            </div>
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                                {techs.map((tech, index) => (
                                    <div 
                                        key={tech.name || index} 
                                        className="group/card bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
                                    >
                                        <div className="flex flex-col items-center text-center space-y-3">
                                            {tech.image ? (
                                                <div className="relative">
                                                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover/card:bg-white/20 transition-colors duration-300">
                                                        <img
                                                            src={tech.image}
                                                            alt={tech.name}
                                                            className="w-8 h-8 object-contain filter group-hover/card:brightness-110 transition-all duration-300"
                                                        />
                                                    </div>
                                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-violet-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                                                </div>
                                            ) : (
                                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                                                    <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-violet-400 rounded-sm"></div>
                                                </div>
                                            )}
                                            
                                            {tech.name && (
                                                <span className="text-sm font-medium text-gray-300 group-hover/card:text-white transition-colors duration-300 leading-tight">
                                                    {tech.name}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>                {/* Bottom CTA */}
                <div className="text-center mt-16 pt-12 border-t border-white/20">
                    <p className="text-gray-400 mb-6">
                        Don't see your preferred technology? We're always learning and adapting.
                    </p>
                    <button className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Let's Discuss Your Stack
                    </button>
                </div>
            </div>
        </div>
    );
}