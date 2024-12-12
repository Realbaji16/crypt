import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 md:hover:bg-white/10"
    >
      {children}
    </a>
  );
};