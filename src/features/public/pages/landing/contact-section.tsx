import { Mail as MailIcon, Phone as PhoneIcon } from "lucide-react";

export const ContactSection = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const form = new FormData(event.target as HTMLFormElement);        const data = Object.fromEntries(form.entries());
        console.log(data)
    }

    return (
        <div className="py-20 mx-auto max-w-7xl px-4 lg:px-8 bg-slate-900">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Let's Build Something
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400"> Amazing</span>
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Ready to transform your ideas into reality? Get in touch with our team and let's start crafting your next breakthrough project.
                </p>
            </div>

            <div className="lg:flex lg:gap-16 lg:items-start">                <div className="mb-12 lg:mb-0 lg:basis-[45%]">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
                        <p className="text-slate-400 leading-relaxed">
                            We believe in turning ideas into reality and we're ready to join your journey. 
                            Reach out to us and let's start discussing your project.
                        </p>
                    </div>                    
                    {/* Contact Information Cards */}
                    <div className="space-y-6">
                        <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-700/50">
                            <div className="flex items-center gap-4">
                                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg shadow-lg">
                                    <MailIcon className="size-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Email Us</h4>
                                    <a 
                                        href="mailto:synergyalgo.dev@gmail.com" 
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium underline-offset-2 hover:underline"
                                    >
                                        synergyalgo.dev@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-700/50">
                            <div className="flex items-center gap-4">
                                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-lg shadow-lg">
                                    <PhoneIcon className="size-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Call Us</h4>
                                    <a 
                                        href="tel:+1234567890" 
                                        className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium underline-offset-2 hover:underline"
                                    >
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                {/* Contact Form */}
                <div className="lg:basis-[55%]">
                    <div className="bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-8">
                        <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
                        
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="first_name" className="text-sm font-medium text-slate-300">
                                        First Name
                                    </label>
                                    <input 
                                        type="text" 
                                        name="first_name"
                                        id="first_name" 
                                        placeholder="John" 
                                        className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 hover:border-slate-500 bg-slate-700 text-white placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last_name" className="text-sm font-medium text-slate-300">
                                        Last Name
                                    </label>
                                    <input 
                                        type="text" 
                                        name="last_name"
                                        id="last_name" 
                                        placeholder="Doe" 
                                        className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 hover:border-slate-500 bg-slate-700 text-white placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300">
                                    Email Address
                                </label>
                                <input 
                                    type="email" 
                                    name="email"
                                    id="email" 
                                    placeholder="example@domain.com" 
                                    className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 hover:border-slate-500 bg-slate-700 text-white placeholder:text-slate-400"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-slate-300">
                                    Phone Number
                                </label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    id="phone" 
                                    placeholder="+1 (555) 123-4567"
                                    className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 hover:border-slate-500 bg-slate-700 text-white placeholder:text-slate-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">
                                    Message
                                </label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    rows={5} 
                                    required 
                                    placeholder="Tell us about your project and how we can help you..."
                                    className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 hover:border-slate-500 resize-none bg-slate-700 text-white placeholder:text-slate-400"
                                />
                            </div>

                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-4 focus:ring-cyan-200/20 shadow-lg hover:shadow-xl"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div></div>
        </div>
    )
}