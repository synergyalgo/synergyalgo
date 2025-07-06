import { MenuBar } from "./menu-bar";

export const Header = () => {
    const navItems = [
        "Home",
        "Our Products",
        "Our Services",
        "Contact",
        "Cases",
    ]
    return (
        <header className="">
            <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-2">
                <div className="flex items-center gap-2">
                    <img src="logo.png" alt="SynergyAlgo" className="h-10 w-10 sm:h-12 sm:w-12" />
                    <div className="text-white font-bold text-xl">SynergyAlgo</div>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item, index) =>
                        <div className="cursor-pointer text-sm font-semibold " key={index}>
                            <a href="/" className="relative group hover:text-blue-400 transition-colors ">
                                <span >{item}</span>
                                <div className="bg-blue-400 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>

                            </a>

                        </div>
                    )}

                    {/* <a href="/about" className="text-white ">About</a>
                    <a href="/contact" className="text-white">Contact</a> */}

                </div>

                <div className="hidden md:flex">
                    <button className="py-3 px-6 text-sm rounded-md font-semibold border-2 border-white">Let's Chat</button>
                </div>
                <div className="md:hidden">
                    <MenuBar />
                </div>
            </div>
        </header>
    )
}