export interface ICard {
  id?: string;
  day?: string;
  time?: string;
  set?: string;
  description?: string;
}

export class Card {
  constructor(public day: string, public time: string, public set: string, public description: string) { }
}
