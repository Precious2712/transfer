export interface Player {
  name: string;
  price: number;
  nationality: string;
  image?: string;
  assist: number;
  dribble: number;
  goals: number;
  position: string;
  club: string;
}

export interface topLeague {
  name: string;
  leagueName: {
    club: string;
    players: Player[];
  }[];
}