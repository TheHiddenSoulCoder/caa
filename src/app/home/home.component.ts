import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractListComponent } from './contract-list/contract-list.component';
import { Contract } from '../contract';
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContractListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  contractList: Contract[] = [];
  contractService: ContractService = inject(ContractService);

  constructor() {
    this.contractList = this.contractService.getAllContracts();
  }
}
