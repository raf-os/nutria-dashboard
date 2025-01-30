import Image from "next/image";
import clsx from "clsx";

export default function ProfileIcon({ size, className, tag, children, defaultSize }: { size?: string, className?: string, tag?: string, children?: React.ReactNode, defaultSize?: number[] }) {
    const baseSize: number[] = defaultSize?defaultSize : [120, 120];

    return (
        <>
        { (tag=="before" && children)?children:null }
        <Image
            src="/assets/images/profile-pics/default.webp"
            alt="profile picture"
            width={baseSize[0]}
            height={baseSize[1]}
            className={clsx(
                size && `size-[${size}px]`,
                !size && 'h-auto max-h-full w-auto',
                "rounded-full object-contain",
                className,
            )}
        />
        { (tag!="before" && children)?children:null }
        </>
    )
}