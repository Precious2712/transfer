import { CountryClub, countryLeagueMap } from "./clubs"

export const leagueTeamsMap: Record<string, string[]> = {
  [countryLeagueMap[CountryClub.ENGLAND]]: [
    "Liverpool",
    "Manchester United",
    "Manchester City",
    "Arsenal",
    "Chelsea",
    "Tottenham Hotspur",
    "Leicester City",
    "West Ham United",
    "Everton",
    "Aston Villa",
    "Newcastle United",
    "Crystal Palace",
  ],

  [countryLeagueMap[CountryClub.SPAIN]]: [
    "Barcelona",
    "Real Madrid",
    "Atletico Madrid",
    "Sevilla",
    "Valencia",
    "Real Sociedad",
    "Villarreal",
    "Athletic Bilbao",
    "Real Betis",
    "Celta Vigo",
    "Espanyol",
    "Getafe",
  ],

  [countryLeagueMap[CountryClub.GERMANY]]: [
    "Bayern Munich",
    "Borussia Dortmund",
    "RB Leipzig",
    "Bayer Leverkusen",
    "Borussia Mönchengladbach",
    "Wolfsburg",
    "Eintracht Frankfurt",
    "Hoffenheim",
    "Stuttgart",
    "Union Berlin",
    "Freiburg",
    "Hertha Berlin",
  ],

  [countryLeagueMap[CountryClub.ITALY]]: [
    "Juventus",
    "Inter Milan",
    "AC Milan",
    "Napoli",
    "Roma",
    "Lazio",
    "Atalanta",
    "Fiorentina",
    "Torino",
    "Sampdoria",
    "Bologna",
    "Sassuolo",
  ],

  [countryLeagueMap[CountryClub.FRANCE]]: [
    "Paris Saint-Germain",
    "Marseille",
    "Lyon",
    "Lille",
    "Monaco",
    "Nice",
    "Rennes",
    "Montpellier",
    "Strasbourg",
    "Nantes",
    "Bordeaux",
    "Saint-Étienne",
  ],
}

export function getTeamsForLeague(league: string): string[] {
  return leagueTeamsMap[league] || []
}