import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './users/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  getsUsuarios():Observable<IUser[]>{
    return this.http.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
  }

}
