import React from 'react';

// Shared class strings so every section uses the same buttons and surfaces
export const btn = {
  primary:
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-violet-800 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-800/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-900 hover:shadow-xl hover:shadow-violet-800/30',
  dark:
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-slate-900 px-7 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800',
  outline:
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-7 py-3.5 font-semibold text-slate-900 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:ring-slate-300',
  light:
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-7 py-3.5 font-semibold text-violet-900 shadow-lg shadow-violet-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-50',
  ghostLight:
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white/10 px-7 py-3.5 font-semibold text-white ring-1 ring-white/40 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20'
};

export const card =
  'rounded-3xl bg-white ring-1 ring-slate-200/80 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift';

export function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-violet-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-violet-900 ring-1 ring-violet-200/70 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-violet-800"></span>
      {children}
    </span>
  );
}

export function Highlight({ children }) {
  return (
    <span className="bg-gradient-to-r from-violet-800 to-purple-600 bg-clip-text text-transparent">
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
      className={`flex flex-shrink-0 items-center justify-center bg-violet-50 text-violet-900 ring-1 ring-violet-100 ${sizes[size]} ${className}`}
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

// Compact call-to-action strip used at the end of sections
export function CTAStrip({ title, description, children }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-50 via-white to-purple-50 p-8 ring-1 ring-violet-100 md:p-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-200/40 blur-3xl"></div>
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
              {description && <p className="mt-3 text-lg text-slate-600">{description}</p>}
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-shrink-0">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
