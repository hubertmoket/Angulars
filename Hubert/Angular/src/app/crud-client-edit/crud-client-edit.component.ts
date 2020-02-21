import { Component, OnInit } from '@angular/core';
import {Client} from '../model/client';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-crud-client-edith',
  templateUrl: './crud-client-edit.component.html',
  styleUrls: ['./crud-client-edit.component.css']
})
export class CrudClientEdithComponent implements OnInit {

  private client: Client = new Client();
  private create: boolean =true;
  private clientOld: Client = null;
  private index:number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private clientService: ClientService) {
    this.activatedRoute.params.subscribe(params => {
      if (params.index){
        this.index=params.index;
        this.create=false;
        this.client = this.clientService.tabClients[params.index];
        this.clientOld=new Client((this.client.prenom, this.client.nom, this.client.ca));
      }

    });
  }

  ngOnInit() {
  }

  public save(){
    // this.clientService.add(this.client);
    if (this.create){
      this.clientService.add(this.client);
    }
    this.router.navigate(['/crudClient']);
  }

  public cancel(){
    if (!this.create){
      this.clientService.tabClients[this.index]=this.clientOld;
    }
    this.router.navigate(['/crudClient']);
  }
}
