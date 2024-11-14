import { cn } from '../../lib/utils';

export const Button = ({children, className}) => {
  return (
    <button 
        className={cn(
            "py-3 sm:py-4 px-3.5 sm:px-[25px] font-bold rounded-full text-white bg-gradient-primary opacity-90 hover:opacity-100 transition-all delay-150 text-xs md:text-base ",
            className
        )}
        >           
            {children}
        </button>
    );
};

   