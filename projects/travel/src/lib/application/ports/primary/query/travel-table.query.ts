import { TravelTableRowQuery } from "./travel-table-row.query";

export class TravelTableQuery {
  public readonly headers =  ['#','name','continent','visit', 'quantity'];
  public readonly rows: TravelTableRowQuery[];
  constructor(data: { id: number; name: string; continent: string; visit: number, quantity: number,}[]) {
    this.rows = data.map(
      (TravelPlaceDto) =>
      new TravelTableRowQuery ([
        TravelPlaceDto.id.toString(),
        TravelPlaceDto.name, 
        TravelPlaceDto.continent,
        TravelPlaceDto.visit.toString(),
        TravelPlaceDto.quantity.toString(),
      ])
    );
  }
}

