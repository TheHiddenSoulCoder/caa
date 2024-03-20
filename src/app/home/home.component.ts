import { Component, inject, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
  contractList: Contract[] = [];
  contractService: ContractService = inject(ContractService);
  contractName: string = '';

  constructor() {
    this.contractList = this.contractService.getAllContracts();
  }

  ngOnInit(): void {
    if (this.contractList.length > 0) {
      this.contractName = this.contractList[0].title;
    }
  }
}
