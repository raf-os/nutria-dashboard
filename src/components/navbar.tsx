import Link from "next/link";
import { buildDashboardRoute } from "@/lib/defs";
import NavbarLink from "@/components/navbarlink";

export default function Navbar() {
    const routes = [
        buildDashboardRoute(0,'Dietas', 'user-diets', {icon: 'icon-folder'}),
        buildDashboardRoute(1, 'Preferências', 'user-prefs', {icon: 'icon-cog'}),
        buildDashboardRoute(-1, 'Sair', null, {icon: 'arrow-uturn-left'})
    ]

    return (
        <div className="flex flex-col justify-start sidenav">
            <div className="p-4 flex-none">
                <Link href="/dashboard" className="text-3xl font-bold">NutrIA Dashboard</Link>
            </div>

            <ul className="flex flex-col basis-full flex-wrap w-full px-4 gap-2">
            {routes.map((route) => (
                <NavbarLink key={route.id} label={route.name} linkref={route.route} icon={route.icon} />
            ))}
            </ul>
        </div>
    );
}