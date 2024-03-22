import { TestBed } from '@angular/core/testing';

import { ContractService } from './contract.service';
import { Contract } from './contract';

describe('ContractService', () => {
  let service: ContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return contracts', (done) => {
    service.getAllContracts().then(contracts => {
      expect(contracts).toBeTruthy();
      expect(contracts.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should return contracts with valid structure', (done) => {
    service.getAllContracts().then((contracts: Contract[]) => {
      contracts.forEach((contract: Contract) => {
        expect(contract.title).toBeTruthy();
        expect(contract.icon).toBeTruthy();
        expect(contract.items).toBeTruthy();
        expect(contract.items.length).toBeGreaterThan(0);
        contract.items.forEach(item => {
          expect(item.label).toBeTruthy();
          expect(item.name).toBeTruthy();
        });
      });
      done();
    });
  });

  it('should return contracts with unique titles', (done) => {
    service.getAllContracts().then((contracts: Contract[]) => {
      const titles = contracts.map((contract: Contract) => contract.title);
      const uniqueTitles = [...new Set(titles)];
      expect(uniqueTitles.length).toEqual(titles.length);
      done();
    });
  });

  it('should return contracts with unique icons', (done) => {
    service.getAllContracts().then((contracts: Contract[]) => {
      const icons = contracts.map((contract: Contract) => contract.icon);
      const uniqueIcons = [...new Set(icons)];
      expect(uniqueIcons.length).toEqual(icons.length);
      done();
    });
  });

  it('should return contracts with items having unique labels', (done) => {
    service.getAllContracts().then((contracts: Contract[]) => {
      contracts.forEach((contract: Contract) => {
        const labels = contract.items.map(item => item.label);
        const uniqueLabels = [...new Set(labels)];
        expect(uniqueLabels.length).toEqual(labels.length);
      });
      done();
    });
  });

  it('should fetch and sanitize contracts', async () => {
    const contracts = await service.getAllContracts();
    expect(contracts).toBeTruthy();
    expect(contracts.length).toBeGreaterThan(0);
    contracts.forEach(contract => {
      expect(contract.icon).not.toContain(' ');
      expect(contract.items.every(item => !item.name.includes('<br>'))).toBeTrue();
    });
  });

  it('should return empty array if fetch fails', async () => {
    service.mockDataUrl = 'http://invalid-url';
    const contracts = await service.getAllContracts();
    expect(contracts).toEqual([]);
  });

  it('should sanitize contracts correctly', () => {
    const contrat: Contract = {
      title: 'Contract Title',
      icon: ' icon ',
      items: [{ name: 'name<br>', label: 'label' }]
    };
    const sanitizedContract = service.sanitizeContract(contrat);
    expect(sanitizedContract.icon).toEqual('icon');
    expect(sanitizedContract.items[0].name).toEqual('name\n');
  });
});
