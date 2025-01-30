import clsx from "clsx";
import { Metadata } from "next";
import { InputText, CheckBox } from "@/components/common/form_elements";

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
                'w-full p-3 rounded-lg bg-slate-600 text-(--foreground)',
                className,
            )}
        >
            { children }
        </div>
    )
}

function ContentTableTitle({children} : {children: React.ReactNode}) {
    return (
        <h1 className="text-3xl font-bold pl-2 mb-4">
            {children}
        </h1>
    )
}

export default function UserConfigPage() {
    return (
        <form>
            <ContentTable>
                <ContentTableTitle>Configurações de Conta</ContentTableTitle>
                    <div className="flex flex-col gap-2">
                        <CheckBox id="test1">Yes</CheckBox>
                        <CheckBox id="test2">checkbox</CheckBox>
                        <InputText id="input-test-1" label="input label">as</InputText>
                    </div>
            </ContentTable>
        </form>
    )
}