import React from 'react';

// Shared class strings so every section uses the same buttons and surfaces
export const btn = {
  primary:
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-red-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30',
  dark:
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-slate-900 px-7 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800',
  outline:
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-7 py-3.5 font-semibold text-slate-900 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:ring-slate-300',
  light:
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-7 py-3.5 font-semibold text-red-700 shadow-lg shadow-red-700/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-50',
  ghostLight:
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white/10 px-7 py-3.5 font-semibold text-white ring-1 ring-white/40 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20'
};

export const card =
  'rounded-3xl bg-white ring-1 ring-slate-200/80 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift';

export function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] sm:px-3.5 sm:text-xs sm:tracking-[0.14em] text-red-700 ring-1 ring-red-200/70 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
      {children}
    </span>
  );
}

export function Highlight({ children }) {
  return (
    <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export function IconBadge({ children, size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-10 w-10 rounded-xl',
    md: 'h-14 w-14 rounded-2xl',
    lg: 'h-16 w-16 rounded-2xl'
  };
  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center bg-red-50 text-red-700 ring-1 ring-red-100 ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, description, align = 'center', className = '' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`reveal max-w-3xl ${alignment} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-slate-600">{description}</p>
      )}
    </div>
  );
}
