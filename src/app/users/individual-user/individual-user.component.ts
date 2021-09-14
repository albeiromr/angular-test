import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-individual-user',
  templateUrl: './individual-user.component.html',
  styleUrls: ['./individual-user.component.scss']
})
export class IndividualUserComponent implements OnInit {

  constructor(private appService: AppService) {}

  ngOnInit(): void {
  }

}
