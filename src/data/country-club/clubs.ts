// Define the country club enum and league mappings
export enum CountryClub {
  ENGLAND = "England",
  SPAIN = "Spain",
  GERMANY = "Germany",
  ITALY = "Italy",
  FRANCE = "France",
}

export const countryLeagueMap: Record<CountryClub, string> = {
  [CountryClub.ENGLAND]: "Premier League",
  [CountryClub.SPAIN]: "La Liga",
  [CountryClub.GERMANY]: "Bundesliga",
  [CountryClub.ITALY]: "Serie A",
  [CountryClub.FRANCE]: "Ligue 1",
}

export const countryClubOptions = Object.values(CountryClub)