/**
 * Created by Florent on 12/03/2017.
 */
export class Bookmaker {
  private _name: string;
  private _url: string;

  constructor() {
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
