export enum UserPermissions {
    Guest = 1 << 0, // 1
    Subscriber = 1 << 1, // 2
    Operator = 1 << 2, // 4
    Admin = 1 << 3, // 8
}

export function compareUserPermissions(origin: number, comparison: number): Boolean {
    const result = origin & comparison;
    return result == comparison;
}

export type User = {
    id: string;
    name: string;
    password: string;
    email: string;
    permissions: number;
}

type DashboardRoute = {
    id: number;
    name: string;
    route: string;
    icon?: string | undefined;
}

export function buildDashboardRoute(_id: number, _name: string, _route: string | null, { icon }: {icon?: string} = {}): DashboardRoute {
    const myroute: DashboardRoute = {
        id: _id,
        name: _name,
        route: _route!=null? `/dashboard/${_route}`: '#',
        ...(icon && {icon: icon}),
    }
    return myroute;
}