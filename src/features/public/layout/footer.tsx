import { Link } from "react-router-dom";
import { ArrowRight as ArrowRightIcon } from "lucide-react";
import { Brand } from "../../../components/brand";

export const Footer = () => {
    return (
        <footer className="bg-white text-black ">

            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="md:flex">
                    <div className="hidden md:block md:mr-12">
                        <div className="flex items-center gap-2">
                            <img src="logo.png" alt="SynergyAlgo" className="h-10 w-10 sm:h-12 sm:w-12" />
                            <div className="font-bold text-xl">SynergyAlgo</div>
                        </div>
                    </div>

                    <div className="mb-6 md:grid md:grid-cols-3 md:gap-8 md:flex-auto">
                        <div >
                            <div className="flex justify-between items-center">
                                <div className="text-base font-bold">Our Services</div>
                                <div className="bg-accent p-1.5 rounded-full md:hidden">
                                    <ArrowRightIcon className="size-5" />
                                </div>
                            </div>

                            <div className="text-sm mt-2 flex flex-col gap-2 cursor-pointer">
                                <a href="#" >Team Augmentation</a>
                                <a href="#" >Mobile development</a>
                                <a href="#" >Back-end development</a>
                                <a href="#" >Frontend Development</a>
                                <a href="#" >Web Development</a>
                            </div>
                        </div>

                        <div >
                            <div className="flex justify-between items-center">
                                <div className="text-base font-bold">Cases</div>
                                <div className="bg-accent p-1.5 rounded-full md:hidden">
                                    <ArrowRightIcon className="size-5" />
                                </div>

                            </div>
                            <div className="text-sm mt-2 flex flex-col gap-2 cursor-pointer">
                                <a href="#" >Team Augmentation</a>
                                <a href="#" >Mobile development</a>
                                <a href="#" >Back-end development</a>
                                <a href="#" >Frontend Development</a>
                                <a href="#" >Web Development</a>
                            </div>
                        </div>

                        <div >
                            <div className="flex justify-between items-center">
                                <div className="text-base font-bold">Company</div>
                                <div className="bg-accent p-1.5 rounded-full md:hidden">
                                    <ArrowRightIcon className="size-5" />
                                </div>
                            </div>

                            <div className="text-sm mt-2 flex flex-col gap-2 cursor-pointer">
                                <a href="#" >Contact US</a>
                                <a href="#" >About Us</a>
                                <a href="#" >Privacy Policy</a>
                            </div>
                        </div>


                    </div>

                </div>
                <div className="text-xs text-accent-foreground md:text-center py-4">
                    &copy; {new Date().getFullYear()} <Link to="/">SynergyAlgo</Link> | All rights reserved.
                </div>
            </div>
        </footer>
    )
}