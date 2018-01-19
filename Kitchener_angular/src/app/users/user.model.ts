export class User {

  username: string | null | undefined;
  email: string | null | undefined;
  password: string | null | undefined;


  static make(event: {username: string, email: string, password: string}) {
    return {
      username: event.username,
      email: event.email,
      password: event.password
    };
  }
}
