import { Button } from "@components/ui/button"

export const Header = () => {
    return (
        <header>
            <div className="flex items-center justify-between max-w-6xl mx-auto py-2">
                <div className="text-primary font-bold text-xl">SynergyAlgo</div>
                <div>
                    <Button variant="outline" size="sm">
                        Let's Chat
                    </Button>
                    {/* <button className="bg-primary text-white py-2 px-4 rounded-md text-sm font-semibold "></button> */}
                </div>
            </div>
        </header>
    )
}

