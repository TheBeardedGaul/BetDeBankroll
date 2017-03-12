import {Tipster} from "./tipster";
import {Bookmaker} from "./bookmaker";
/**
 * Created by Florent on 12/03/2017.
 */
export class Bet {
  private _betId: number;
  private _reference: string;
  private _datePrisePari: number;
  private _montantTotalPaye: number;
  private _gain: number;
  private _statut: string;
  private _cote: number;
  private _dateMatch: number;
  private _evenement: string;
  private _sport: string;

  constructor() {
  }

  get betId(): number {
    return this._betId;
  }

  set betId(value: number) {
    this._betId = value;
  }

  get reference(): string {
    return this._reference;
  }

  set reference(value: string) {
    this._reference = value;
  }

  get datePrisePari(): number {
    return this._datePrisePari;
  }

  set datePrisePari(value: number) {
    this._datePrisePari = value;
  }

  get montantTotalPaye(): number {
    return this._montantTotalPaye;
  }

  set montantTotalPaye(value: number) {
    this._montantTotalPaye = value;
  }

  get gain(): number {
    return this._gain;
  }

  set gain(value: number) {
    this._gain = value;
  }

  get statut(): string {
    return this._statut;
  }

  set statut(value: string) {
    this._statut = value;
  }

  get cote(): number {
    return this._cote;
  }

  set cote(value: number) {
    this._cote = value;
  }

  get dateMatch(): number {
    return this._dateMatch;
  }

  set dateMatch(value: number) {
    this._dateMatch = value;
  }

  get evenement(): string {
    return this._evenement;
  }

  set evenement(value: string) {
    this._evenement = value;
  }

  get sport(): string {
    return this._sport;
  }

  set sport(value: string) {
    this._sport = value;
  }
}
