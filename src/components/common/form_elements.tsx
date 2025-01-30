import clsx from "clsx";

interface IBaseInputElement {
    children: React.ReactNode;
    id: string;
    className?: string;
}

interface ICheckBox extends IBaseInputElement {
    radioClass?: string;
    labelClass?: string;
}

interface IInputText extends IBaseInputElement{
    label?: string;
}

export function InputText({id, className, children, label}: IInputText) {
    return (
        <div
            className={clsx(
                'flex',
                className,
            )}
        >

            <input
                type="text"
                name={ id }
                id={ id }
            />
            { children }
        </div>
    )
}

export function CheckBox({id, className, children, radioClass, labelClass} : ICheckBox) {
    return (
        <div
            className={clsx(
                'flex pl-8',
                className,
            )}
        >
            <input
                type="checkbox"
                id={ id }
                name={ id }
                className={clsx(
                    'border-2 mr-2',
                    radioClass,
                )}
            />

            <label
                htmlFor={ id }
            >
                {children}
            </label>
        </div>
    )
}