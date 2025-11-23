import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 20C50 20 65 25 75 35C85 45 85 60 75 75C65 85 50 85 35 80C20 75 15 60 20 45C25 30 40 25 50 40C60 55 45 65 35 55"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-hive-500"
      />
      <circle cx="50" cy="20" r="6" fill="currentColor" className="text-hive-400" />
      <circle cx="75" cy="35" r="6" fill="currentColor" className="text-hive-400" />
      <circle cx="75" cy="75" r="6" fill="currentColor" className="text-hive-400" />
      <circle cx="35" cy="80" r="6" fill="currentColor" className="text-hive-400" />
      <circle cx="20" cy="45" r="6" fill="currentColor" className="text-hive-400" />
      <circle cx="50" cy="40" r="6" fill="currentColor" className="text-hive-400" />
    </svg>
  );
};

export default Logo;