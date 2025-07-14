import { Link } from "react-router-dom";
import { Mail as MailIcon, Phone as PhoneIcon } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-[#020021] text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="logo.png" alt="SynergyAlgo" className="h-10 w-10" />
                            <div className="font-bold text-xl text-white">SynergyAlgo</div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Transforming ideas into powerful digital solutions. We build scalable, innovative software that drives your business forward.
                        </p>

                        {/* Contact Information */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg">
                                    <MailIcon className="size-4 text-white" />
                                </div>
                                <a href="mailto:synergyalgo.dev@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                                    synergyalgo.dev@gmail.com
                                </a>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-2 rounded-lg">
                                    <PhoneIcon className="size-4 text-white" />
                                </div>
                                <a href="tel:+92111076645" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                                    +92 111 076645
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 relative">
                            Our Services
                            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 mt-2"></div>
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Web Development</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Mobile Development</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Backend Development</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Frontend Development</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Team Augmentation</a></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 relative">
                            Solutions
                            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 mt-2"></div>
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Custom Software</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">E-commerce Platforms</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Enterprise Solutions</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">API Development</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Cloud Solutions</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 relative">
                            Company
                            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 mt-2"></div>
                        </h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Home</Link></li>
                            <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">About Us</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Contact</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
                            <p className="text-gray-300 text-sm">Get the latest insights on technology and business solutions.</p>
                        </div>
                        <div className="flex gap-3 max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                            />
                            <button className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="text-sm text-gray-400 mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} SynergyAlgo. All rights reserved.
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.223.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}