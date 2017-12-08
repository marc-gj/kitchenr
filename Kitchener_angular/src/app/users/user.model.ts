export class User {

  constructor(
    private _username?: string | null | undefined,
    private _email?: string | null | undefined,
    private _password?: string | null | undefined) { }

  set username(username) {
    this._username = username;
  }
  set password(password) {
    this._password = password;
  }
  set email(email) {
    this._email = email;
  }

  get username() {
    return this._username;
  }
  get password() {
    return this._password;
  }
  get email() {
    return this._email;
  }
}
