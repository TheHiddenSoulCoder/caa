import { Injectable } from '@angular/core';
import { Contract } from './contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  mockDataUrl: string = 'http://localhost:3000/contracts';
  contractList: Contract[] = [];

  constructor() {
    this.getAllContracts().then((contracts: Contract[]) => {
      this.contractList = contracts;
    });
  }

  sanitizeContract(contract: Contract): Contract {
    contract.icon = contract.icon.trim();
    contract.items.forEach(item => {
      item.name = item.name.replace(/<br>/g, '\n').trim();
    });
    return contract;
  }

  async getAllContracts(): Promise<Contract[]> {
    const mockData: Response = await fetch(this.mockDataUrl);
    const contracts: Contract[] = await mockData.json() ?? [];
    return contracts.map(contract => this.sanitizeContract(contract));
  }
}
