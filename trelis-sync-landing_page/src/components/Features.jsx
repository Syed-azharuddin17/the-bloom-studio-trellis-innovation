import React from 'react';

export default function Features() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">Internal Tool Features</h2>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Release Notes Manager</h3>
          <p>Team leads can create, tag, and share internal updates for better visibility across teams.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Snippet Browser</h3>
          <p>Browse and search documentation snippets with category and tag filtering to speed up dev workflows.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Approval Queue</h3>
          <p>Manage version suggestions or feedback with a clear approval workflow for documentation updates.</p>
        </div>
      </div>
    </section>
  );
}
