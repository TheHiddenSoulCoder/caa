import { TestBed } from '@angular/core/testing';

import { ContractService } from './contract.service';

describe('ContractService', () => {
  let service: ContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return contracts', () => {
    const contracts = service.getAllContracts();
    expect(contracts).toBeTruthy();
    expect(contracts.length).toBeGreaterThan(0);
  });

  it('should return contracts with valid structure', () => {
    const contracts = service.getAllContracts();
    contracts.forEach(contract => {
      expect(contract.title).toBeTruthy();
      expect(contract.icon).toBeTruthy();
      expect(contract.items).toBeTruthy();
      expect(contract.items.length).toBeGreaterThan(0);
      contract.items.forEach(item => {
        expect(item.label).toBeTruthy();
        expect(item.name).toBeTruthy();
      });
    });
  });

  it('should return contracts with unique titles', () => {
    const contracts = service.getAllContracts();
    const titles = contracts.map(contract => contract.title);
    const uniqueTitles = [...new Set(titles)];
    expect(uniqueTitles.length).toEqual(titles.length);
  });

  it('should return contracts with unique icons', () => {
    const contracts = service.getAllContracts();
    const icons = contracts.map(contract => contract.icon);
    const uniqueIcons = [...new Set(icons)];
    expect(uniqueIcons.length).toEqual(icons.length);
  });

  it('should return contracts with items having unique labels', () => {
    const contracts = service.getAllContracts();
    contracts.forEach(contract => {
      const labels = contract.items.map(item => item.label);
      const uniqueLabels = [...new Set(labels)];
      expect(uniqueLabels.length).toEqual(labels.length);
    });
  });
});
