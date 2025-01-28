import Navbar from "@/components/navbar";

export default function Layout ({ children } : { children: React.ReactNode; }) {
    return (
        <div className="flex flex-row min-h-dvh">
            <div className="flex-shrink-0 w-[320px] min-h-dvh">
                <Navbar />
            </div>
            
            <div className="flex p-8 w-full h-full">
                {children}
            </div>
        </div>
    );
}