import { cn } from '@/app/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export function Card({ children, className, hover = false, ...props }: CardProps) {
    return (
        <div
            className={cn(
                'bg-white rounded-xl shadow-md overflow-hidden',
                hover && 'hover:shadow-xl transition-all duration-300 hover:-translate-y-1',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('px-6 pt-6 pb-4', className)} {...props}>
            {children}
        </div>
    );
}

export function CardBody({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('px-6 py-4', className)} {...props}>
            {children}
        </div>
    );
}

export function CardFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('px-6 py-4 bg-gray-50', className)} {...props}>
            {children}
        </div>
    );
}