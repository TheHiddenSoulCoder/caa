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
  contractFiltered: Contract[] = [];
  contractService: ContractService = inject(ContractService);

  constructor() {
    this.contractList = this.contractService.getAllContracts();
    this.contractFiltered = this.contractList;
  }

  filterResults(text: string) {
    if (!text) {
      this.contractFiltered = this.contractList;
      return;
    }

    this.contractFiltered = this.contractList.filter(
      contract => contract?.title.toLowerCase().includes(text.toLowerCase())
    );
  }
}
