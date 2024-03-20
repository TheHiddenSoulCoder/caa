import { ContractItem } from './contract-item';

export interface Contract {
  title: string;
  icon: string;
  items: ContractItem[];
}
