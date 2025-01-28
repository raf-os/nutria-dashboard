import Link from "next/link";
import { buildDashboardRoute } from "@/lib/defs";
import Button from "@/components/common/button";

export default function Navbar() {
    const routes = [
        buildDashboardRoute(0,'Dietas', 'user-diets'),
        buildDashboardRoute(1, 'Configurações', 'user-configs'),
    ]

    return (
        <div className="flex flex-col justify-start sidenav">
            <div className="p-4 flex-none">
                <Link href="/dashboard" className="text-3xl font-bold">NutrIA Dashboard</Link>
            </div>

            <ul className="flex flex-col basis-full flex-wrap w-full px-4 gap-2">
            {routes.map((route) => (
                <NavbarLink key={route.id} label={route.name} linkref={route.route} />
            ))}
            </ul>

            <div className="flex-initial">
                <LoginBox />
            </div>
        </div>
    );
}

function LoginBox() {
    return (
        <div className="p-4 m-2">
            <Button>Logout</Button>
        </div>
    )
}

function NavbarLink({ label, linkref } : {label: string, linkref: string}) {
    return (
        <Link href={linkref}>
            <li className="px-2 py-1 text-lg font-bold rounded-md transition-[padding-left] hover:pl-4 hover:before:content-['>_'] hover:text-yellow-400">
                {label}
            </li>
        </Link>
    )
}