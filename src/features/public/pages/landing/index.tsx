import React from "react"

import { Header } from "../../layout/header";
import { LandingSection } from "./main-section";

const Index: React.FC = () => {
    return (
        <>
            <Header />
            <div>
                <LandingSection />
            </div>
        </>
    )
}

export default Index;