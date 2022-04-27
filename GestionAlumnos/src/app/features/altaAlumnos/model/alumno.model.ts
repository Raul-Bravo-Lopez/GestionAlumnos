export class Alumno {

  private _id: string;
  private _name: string;
  private _surname1: string;
  private _surname2?: string;
  private _email: string;
  private _dni: string;
  private _phone1: string;
  private _phone2?: string;
  private _country: string;
  private _province: string;
  private _cp: number;
  private _location: string;
  private _nickname: string;
  private _password: string;

  constructor(id: string, name: string, surname1: string, email: string, dni: string, phone1: string, country: string, province: string, cp: number,
    location: string, nickname: string, password: string, surname2?: string, phone2?: string){
    this._id = id;
    this._name = name;
    this._surname1 = surname1;
    if(!!surname2 && surname2.length > 0){
      this._surname2 = surname2;
    }
    this._email = email;
    this._dni = dni;
    this._phone1 = phone1;
    if(!!phone2 && phone2.length > 0){
      this._phone2 = phone2;
    }
    this._country = country;
    this._province = province;
    this._cp = cp;
    this._location = location;
    this._nickname = nickname;
    this._password = password;
  }

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get surname1(): string {
        return this._surname1;
    }

    public set surname1(surname1: string) {
        this._surname1 = surname1;
    }

    public get surname2(): string | undefined {
        return this._surname2;
    }

    public set surname2(surname2: string | undefined) {
        this._surname2 = surname2;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get dni(): string {
        return this._dni;
    }

    public set dni(dni: string) {
        this._dni = dni;
    }

    public get phone1(): string {
        return this._phone1;
    }

    public set phone1(phone1: string) {
        this._phone1 = phone1;
    }

    public get phone2(): string | undefined {
        return this._phone2;
    }

    public set phone2(phone2: string | undefined) {
        this._phone2 = phone2;
    }

    public get country(): string {
        return this._country;
    }

    public set country(country: string) {
        this._country = country;
    }

    public get province(): string {
        return this._province;
    }

    public set province(province: string) {
        this._province = province;
    }

    public get cp(): number {
        return this._cp;
    }

    public set cp(cp: number) {
        this._cp = cp;
    }

    public get location(): string {
        return this._location;
    }

    public set location(location: string) {
        this._location = location;
    }

    public get nickname(): string {
        return this._nickname;
    }

    public set nickname(nickname: string) {
        this._nickname = nickname;
    }

    public get password(): string {
        return this._password;
    }

    public set password(password: string) {
        this._password = password;
    }

}
