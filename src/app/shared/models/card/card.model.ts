// export interface Card {
//   id: string;
//   day: string;
//   time: string;
//   set: string;
// }

export class Card {
  public day: string;
  public time: string;
  public set: string;

  constructor(day: string, time: string, set: string) {
    this.day = day;
    this.time = time;
    this.set = set;
  }
}
