import { Component } from '@angular/core';

import { AppService } from 'src/app/app.service';

import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-individual-user',
  templateUrl: './individual-user.component.html',
  styleUrls: ['./individual-user.component.scss']
})

export class IndividualUserComponent {

  usuarioSeleccionado: IUser;

  constructor(private appService: AppService) {
    this.usuarioSeleccionado = this.appService.getUsuarioSeleccionado;
  }

}
