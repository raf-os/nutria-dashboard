import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Configurações',
}

function UserTextInput({ className, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
    <input
        { ...rest }
        className={clsx(
            'w-full px-2 py-1 border text-slate-600 border-gray-400 outline-2 outline-rose-500 focus:outline focus:text-gray-900',
            className,
        )}
    />
}

function ContentTable({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
    return (
        <div
            id={id}
            className={clsx(
                'w-full px-2 rounded-lg bg-slate-600 text-(--foreground)',
                className,
            )}
        >
            { children }
        </div>
    )
}

export default function UserConfigPage() {
    return (
        <>
            <ContentTable>
                test
            </ContentTable>
        </>
    )
}