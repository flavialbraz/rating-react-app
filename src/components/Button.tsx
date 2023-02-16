

interface ButtonProps {
  type?: "button" | "submit" | "reset",
  className?: string,
  children: string,
  isDisabled?: boolean,

}

export function Button({ children, className, isDisabled }: ButtonProps) {
  
    return (
    <button className={className} disabled={isDisabled}>
      {children}
    </button>
    
  );
}
