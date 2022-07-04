export class TravelListItemQuery {
  public readonly text: string 
  constructor(
    private readonly _name: string,
    private readonly _continent: string,
    private readonly _currency = '$',
    ) {
      this.text = `${this._name} for ${this._currency}${this._continent}`;
    }
  }
  

