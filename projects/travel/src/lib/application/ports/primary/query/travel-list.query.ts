import { TravelListItemQuery } from "./travel-list-item.query";

export class TravelListQuery {
  constructor(public readonly items: TravelListItemQuery[]) {}
}
