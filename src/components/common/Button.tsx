import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'connect';
  size?: 'normal' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'normal',
  children,
  onClick,
  className = '',
}) => {
  const baseClasses = "font-medium rounded-lg transition-colors duration-200";
  const sizeClasses = size === 'large' ? 'px-8 py-4 text-lg' : 'px-6 py-2 text-sm';
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    connect: "bg-black text-white hover:bg-gray-900 px-8 py-3 text-base font-semibold",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variant === 'connect' ? '' : sizeClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};