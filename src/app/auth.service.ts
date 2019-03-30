import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  async login(username: string, password: string): Promise<Boolean> {
    try {
      const credentials = {
        username: username,
        password: password
      }
      await this.http.post("http://localhost:3000/auth/login", credentials).toPromise();
      return true;
    }
    catch (err) {

      console.log("Invalid Credentials");
      return false;
    }

  }
}
