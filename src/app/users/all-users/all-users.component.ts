import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})

export class AllUsersComponent implements OnInit {

  usuarios:IUser[] = []

  constructor(private appService:AppService){}

  ngOnInit(): void {
    this.appService.getsUsuarios()
      .subscribe((response:IUser[]) => this.usuarios = response)
  }

  filtrarUsuario(usuario: IUser){
    this.appService.setUsuarioSeleccionado = usuario;
    localStorage.setItem("usuarioSeleccionado", JSON.stringify(usuario));
  }

}
