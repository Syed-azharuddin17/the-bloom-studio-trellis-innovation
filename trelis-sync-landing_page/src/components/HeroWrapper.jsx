import React from 'react';

export default function HeroWrapper({ children }) {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-4xl w-full text-center">
        {children}
      </div>
    </section>
  )
}