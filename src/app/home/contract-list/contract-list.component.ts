import { Component, Input } from '@angular/core';
import { Contract } from '../../contract';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencil, faFileContract, faCreditCard, faCoins, faPercent, faGift } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-contract-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './contract-list.component.html',
  styleUrl: './contract-list.component.scss'
})
export class ContractListComponent {
  @Input() contract!: Contract;

  protected readonly iconDict: Record<string, IconDefinition> = {
    'file-contract': faFileContract,
    'credit-card': faCreditCard,
    'coins': faCoins,
    'percent': faPercent,
    'gift': faGift
  }

  protected readonly faPencil = faPencil;
}
