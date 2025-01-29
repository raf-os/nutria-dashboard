import Image from "next/image";
import clsx from "clsx";

export default function ProfileIcon({ size, className, tag, children }: { size?: string, className?: string, tag?: string, children?: React.ReactNode }) {
    return (
        <>
        { (tag=="before" && children)?children:null }
        <Image
            src="/assets/images/profile-pics/default.webp"
            alt="profile picture"
            width={120}
            height={120}
            className={clsx(
                size && `size-[${size}px]`,
                !size && 'max-h-full w-auto',
                "rounded-full object-contain",
                className,
            )}
        />
        { (tag!="before" && children)?children:null }
        </>
    )
}