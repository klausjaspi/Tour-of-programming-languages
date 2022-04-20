import { Injectable } from '@angular/core';
import { Language } from './language';
import { LANGUAGES } from './mock-languages';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  getLanguages(): Observable<Language[]>{
    const languages = of(LANGUAGES);
    this.messageService.add('LanguageService: fetched languages');
    return languages;
  }

  constructor(private messageService: MessageService) { }
}
