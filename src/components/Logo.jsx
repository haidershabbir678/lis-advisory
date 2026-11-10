import React from 'react';

export default function Logo({ className = "w-8 h-8" }) {
  return (
    <div className={`relative flex items-center justify-center rounded-lg bg-[#0e1424] border border-sky-500/30 shadow-sm ${className}`}>
      <svg 
        viewBox="0 0 36 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-sky-400"
      >
        {/* Interconnected Knowledge Facets */}
        <path 
          d="M18 4L30 11V25L18 32L6 25V11L18 4Z" 
          stroke="currentColor" 
          strokeWidth="1.8" 
          strokeLinejoin="round"
          className="opacity-90"
        />
        <path 
          d="M18 4V32" 
          stroke="currentColor" 
          strokeWidth="1.4" 
          strokeDasharray="2 2"
          className="text-sky-300 opacity-60"
        />
        <path 
          d="M6 11L18 18L30 11" 
          stroke="currentColor" 
          strokeWidth="1.6" 
          strokeLinejoin="round"
        />
        <path 
          d="M6 25L18 18L30 25" 
          stroke="currentColor" 
          strokeWidth="1.6" 
          strokeLinejoin="round"
        />
        {/* Central Core Semantic Node */}
        <circle cx="18" cy="18" r="2.5" fill="#38bdf8" />
        <circle cx="18" cy="4" r="1.5" fill="#60a5fa" />
        <circle cx="30" cy="11" r="1.5" fill="#60a5fa" />
        <circle cx="30" cy="25" r="1.5" fill="#60a5fa" />
        <circle cx="18" cy="32" r="1.5" fill="#60a5fa" />
        <circle cx="6" cy="25" r="1.5" fill="#60a5fa" />
        <circle cx="6" cy="11" r="1.5" fill="#60a5fa" />
      </svg>
    </div>
  );
}
