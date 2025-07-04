import React from 'react';

export default function Workflow() {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-4">
          <div className="text-4xl mb-2">🗂️</div>
          <p>Browse and filter documentation snippets by category and tags.</p>
        </div>
        <div className="p-4">
          <div className="text-4xl mb-2">📝</div>
          <p>Submit and review internal feedback or version approval requests.</p>
        </div>
        <div className="p-4">
          <div className="text-4xl mb-2">✅</div>
          <p>Approve updates and publish changes seamlessly to keep docs accurate.</p>
        </div>
      </div>
    </section>
  );
}
