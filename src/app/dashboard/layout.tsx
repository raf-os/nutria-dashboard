import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";

export default function Layout ({ children } : { children: React.ReactNode; }) {
    return (
        <div className="flex flex-row flex-grow w-full min-h-dvh">
            <div id="sidebar" className="flex-shrink-0 w-[320px] z-10">
                <Navbar />
            </div>
            
            <div className="flex flex-col w-full h-full">
                <Topbar />

                <div className="p-8 overflow-scroll">
                    {children}
                </div>
            </div>
        </div>
    );
}