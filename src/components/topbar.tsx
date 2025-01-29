import ProfileIcon from "@/components/common/profile_icon";

export default function Topbar() {
    return (
        <div className="flex overflow-hidden w-full h-16 px-4 text-xl font-bold bg-[var(--bg-accent)] items-center justify-end border-b border-b-[var(--bg-accent-border)]">
            { /* Username here */}
            <ProfileIcon className="p-2" tag="before">
                <div className="mr-1">Username</div>
            </ProfileIcon>
        </div>
    )
}