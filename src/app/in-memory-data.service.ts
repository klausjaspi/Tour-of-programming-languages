import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Language } from './language';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const languages = [
      { id: 11, name: 'Ruby' },
      { id: 12, name: 'R' },
      { id: 13, name: 'NextJS' },
      { id: 14, name: 'Python' },
      { id: 15, name: 'JavaScript' },
      { id: 16, name: 'SQL' },
      { id: 17, name: 'C' },
      { id: 18, name: 'C#' },
      { id: 19, name: 'SASS' },
    ];
    return {languages};
  }

  genId(languages: Language[]): number {
    return languages.length > 0 ? Math.max(...languages.map(language => language.id)) + 1 : 11;
  }
}
