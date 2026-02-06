import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 tracking-wide";
  
  const variants = {
    primary: "bg-[#FF6600] text-white hover:bg-[#CC5200] hover:shadow-[0_0_20px_rgba(255,102,0,0.4)] hover:-translate-y-1",
    outline: "border-2 border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white",
    ghost: "text-[#C0C0C0] hover:text-[#FF6600] hover:bg-[#1E1E1E]",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;