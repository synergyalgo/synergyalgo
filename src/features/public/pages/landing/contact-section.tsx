import { Mail as MailIcon, Phone as PhoneIcon } from "lucide-react";

export const ContactSection = () => {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const form = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(form.entries());
        console.log(data)
    }

    return (
        <div className="py-12 mx-auto max-w-6xl px-2">
            <div className="md:flex md:gap-4 ">

                <div className="mb-6 md:m-0 md:basis-[50%]">
                    <div className="mb-6">
                        <div className="text-2xl font-bold mb-4">Collaborate with us to build greatness.</div>
                        <div className="text-sm" >We believe in turning ideas into reality and we're ready to join your journey. Reach out to us and let's start discussing your project.</div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <MailIcon className="size-5" />
                            <div className="text-sm">
                                <a href="mailto:synergyalgo.dev@gmail.com">synergyalgo.dev@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                            <PhoneIcon className="size-5" />
                            <div className="text-sm">
                                <a href="tel:+1234567890" className="text-sm">+1 (234) 567-890</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex-auto">

                    <form className="" onSubmit={handleSubmit}>
                        <div className="md:flex md:gap-2 mb-4">
                            <div className="flex flex-col md:basis-full">
                                <label htmlFor="first_name" className="text-sm mb-2">First Name</label>
                                <input type="text" id="first_name" placeholder="John" className="text-sm border border-white p-2 rounded-md focus-within:ring-2 focus-within:ring-blue-400 outline-none" />
                            </div>
                            <div className="flex flex-col md:basis-full">
                                <label htmlFor="last_name" className="text-sm mb-2">Last Name</label>
                                <input type="text" id="last_name" placeholder="Deo" className="text-sm border border-white p-2 rounded-md focus-within:ring-2 focus-within:ring-blue-400 outline-none " />
                            </div>
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="email" className="text-sm mb-2">Email</label>
                            <input type="email" id="email" placeholder="example@domain.com" className="text-sm border border-white p-2 rounded-md focus-within:ring-2 focus-within:ring-blue-400 outline-none" />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="phone" className="text-sm mb-2">Phone</label>
                            <input type="text" id="phone" className="text-sm border border-white p-2 rounded-md focus-within:ring-2 focus-within:ring-blue-400 outline-none" />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="message" className="text-sm mb-2">Message</label>
                            <textarea id="message" rows={4} required placeholder="Enter your message here..." className="text-sm border border-white p-2 rounded-md focus-within:ring-2 focus-within:ring-blue-400 outline-none resize-none" />
                        </div>

                        <div className="flex mt-6">
                            <button type="submit" className="w-full text-sm bg-white text-primary py-2 px-4 rounded cursor-pointer font-semibold">Send Request</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}