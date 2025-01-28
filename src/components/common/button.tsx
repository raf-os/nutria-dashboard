import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button({ children, className, ...rest}: ButtonProps) {
    return (
        <button
            {...rest}
            className = {clsx(
                'flex text-sm bg-blue-600 rounded-lg px-4 py-2 hover:bg-blue-500',
                className,
            )}
        >
            {children}
        </button>
    )
}