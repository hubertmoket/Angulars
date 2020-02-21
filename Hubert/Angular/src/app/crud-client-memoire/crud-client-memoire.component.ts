import { Component, OnInit } from '@angular/core';
import {Client} from '../model/client';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-crud-client-memoire',
  templateUrl: './crud-client-memoire.component.html',
  styleUrls: ['./crud-client-memoire.component.css']
})
export class CrudClientMemoireComponent implements OnInit {

  private clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clients=this.clientService.tabClients;
  }



}
