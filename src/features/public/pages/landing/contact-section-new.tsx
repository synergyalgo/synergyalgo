import { Mail as MailIcon, Phone as PhoneIcon } from "lucide-react";

export const ContactSection = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = new FormData(e.target as HTMLFormElement);
        console.log(Object.fromEntries(form.entries()));
    };

    return (
        <div className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Let's Build Something
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Amazing Together</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Ready to transform your ideas into reality? Get in touch with our team and let's start crafting your next breakthrough project.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We believe in turning ideas into reality and we're ready to join your journey. 
                            Reach out to us and let's start discussing your project.
                        </p>
                        
                        {/* Contact Cards */}
                        <div className="space-y-6">
                            <div className="flex items-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
                                    <MailIcon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                                    <a href="mailto:synergyalgo.dev@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium">
                                        synergyalgo.dev@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300">
                                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-lg mr-4">
                                    <PhoneIcon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                                    <a href="tel:+1234567890" className="text-green-600 hover:text-green-700 font-medium">
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        placeholder="John"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 hover:border-gray-400"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        placeholder="Doe"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 hover:border-gray-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                    Company Name <span className="text-gray-400">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    placeholder="Your Company"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 hover:border-gray-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@domain.com"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 hover:border-gray-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number <span className="text-gray-400">(Optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    placeholder="+1 (555) 123-4567"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 hover:border-gray-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Project Details <span className="text-gray-400">(Optional)</span>
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Tell us about your project and how we can help you..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 hover:border-gray-400 resize-none"
                                    rows={5}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-4 focus:ring-blue-200 shadow-lg hover:shadow-xl"
                            >
                                Send Message
                            </button>

                            <p className="text-sm text-gray-500 text-center">
                                By sending this form, I confirm that I have read and accepted the{" "}
                                <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                                    Privacy Policy
                                </a>.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
