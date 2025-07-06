import React from "react"

import { Header } from "../../layout/header";
import { LandingSection } from "./main-section";
import { ServicesSection } from "./services-section";
import { ContactSection } from "./contact-section";

const Index: React.FC = () => {
    return (
        <div className="bg-primary text-primary-foreground min-h-screen">
            <Header />
            <div >
                <LandingSection />
                <ServicesSection />
                <ContactSection />
            </div>
        </div>
    )
}

export default Index;