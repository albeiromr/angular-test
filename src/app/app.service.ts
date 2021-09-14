import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './users/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  private _usuarioSeleccionado: IUser = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: 'string',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  };

  get getUsuarioSeleccionado():IUser{
    return this._usuarioSeleccionado;
  }

  set setUsuarioSeleccionado(usuario:IUser){
    this._usuarioSeleccionado = usuario;
  }

  constructor(private http: HttpClient) {
    const usuarioLocalStorage: string  = localStorage.getItem("usuarioSeleccionado") || "";
    if(usuarioLocalStorage !== "") this._usuarioSeleccionado = JSON.parse(usuarioLocalStorage);
  }

  getsUsuarios(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
