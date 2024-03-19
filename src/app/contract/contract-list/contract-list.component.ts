import { Component } from '@angular/core';
import {ContractItemComponent} from "./contract-item/contract-item.component";

@Component({
  selector: 'app-contract-list',
  standalone: true,
  imports: [
    ContractItemComponent
  ],
  templateUrl: './contract-list.component.html',
  styleUrl: './contract-list.component.scss'
})
export class ContractListComponent {

}
