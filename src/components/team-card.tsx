"use client";

import react from "react";

interface Match {
  against: string;
  score: string;
}

interface TeamCardProps {
  name?: string;
  description?: string;
  matches?: Match[];
  foundationYear?: number;
  sport?: string;
  logoUrl?: string;
}

export default function TeamCard({
  name,
  description,
  matches = [],
  foundationYear,
  sport,
  logoUrl,
}: TeamCardProps) {
  return (
    <div className="bg-white max-w-md rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="mb-4">
          {logoUrl && (
            <img
              src={logoUrl}
              alt={`${name} logo`}
              className="w-16 h-16 object-contain mb-4"
            />
          )}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          <div className="mt-3 text-sm text-gray-500">
            {sport && <span>Sport: {sport}</span>}
            {foundationYear && (
              <span className="ml-4">Founded: {foundationYear}</span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Matches</h3>
          <ul className="space-y-2">
            {matches?.map((match) => (
              <li
                key={match.against}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                <span className="text-gray-600">{match.score}</span>
                <span className="text-gray-800">{match.against}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
