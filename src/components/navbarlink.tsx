'use client';

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { IconContext } from "react-icons";
import { HiOutlineDocumentText, HiOutlineCog8Tooth, HiOutlineArrowUturnLeft } from "react-icons/hi2";

const iconReference = new Map([
    ["icon-folder", (<HiOutlineDocumentText />)],
    ["icon-cog", (<HiOutlineCog8Tooth />)],
    ["arrow-uturn-left", (<HiOutlineArrowUturnLeft />)],
    ["Default", null],
]);

export default function NavbarLink({ label, linkref, icon } : {label: string, linkref: string, icon?: string}) {
    const pathname = usePathname();
    const iconName = icon? icon: label;
    const iconRender = IconWrapper({iconName});

    return (
        <Link href={linkref}>
            <li className={clsx(
                    "flex flex-row items-center px-2 py-1 text-lg font-bold rounded-md hover:text-yellow-400",
                    { "bg-white/20": pathname === linkref }
                )}>
                { iconRender }
                { label }
            </li>
        </Link>
    )
}

function IconWrapper({ iconName }: { iconName?:string }) {
    if (!iconName) return null;
    const myIcon = iconReference.get(iconName);
    if (!myIcon) return null;
    return (
        <IconContext.Provider value={{className: "inline-block mr-2"}}>
            { myIcon }
        </IconContext.Provider>
    )
}