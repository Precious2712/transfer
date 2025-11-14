'use client';

export const countryLeagues = {
  Spain: ['La Liga', 'Segunda División'],
  England: ['Premier League', 'Championship'],
  France: ['Ligue 1', 'Ligue 2'],
  Italy: ['Serie A', 'Serie B'],
  Germany: ['Bundesliga', '2. Bundesliga']
} as const;

export type Country = keyof typeof countryLeagues;