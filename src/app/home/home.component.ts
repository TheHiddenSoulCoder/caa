import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractListComponent } from './contract-list/contract-list.component';
import { Contract } from '../contract';
import { ContractService } from '../contract.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContractListComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public contractList: Contract[] = [];
  public contractFiltered: Contract[] = [];
  public contractTitleSelected: string = '';
  public contractTitleEmitted: string = '';
  private contractService: ContractService = inject(ContractService);

  constructor() {
    this.contractService.getAllContracts().then((contracts: Contract[]) => {
      this.contractList = contracts;
      this.contractFiltered = contracts;
    });
  }

  public filterResults(text: string) {
    if (!text) {
      this.contractFiltered = this.contractList;
      return;
    }

    this.contractFiltered = this.contractList.filter(
      contract => contract?.title.toLowerCase().includes(text.toLowerCase())
    );
  }

  public contractModification(title: string) {
    this.contractTitleEmitted = title;
  }
}
