import { Component } from '@angular/core';
import {ContractListComponent} from "./contract-list/contract-list.component";

@Component({
  selector: 'app-contract',
  standalone: true,
  imports: [
    ContractListComponent
  ],
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.scss'
})
export class ContractComponent {

}
