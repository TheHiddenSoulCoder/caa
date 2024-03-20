import { Component, Input } from '@angular/core';
import { Contract } from '../../contract';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contract-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contract-list.component.html',
  styleUrl: './contract-list.component.scss'
})
export class ContractListComponent {
  @Input() contract!: Contract;
}
