import { Component, OnInit } from '@angular/core';
import { Language } from '../language';
import { LANGUAGES } from '../mock-languages';
import { LanguageService } from '../language.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-programming-languages',
  templateUrl: './programming-languages.component.html',
  styleUrls: ['./programming-languages.component.scss']
})
export class ProgrammingLanguagesComponent implements OnInit {

  programming_languages: Language[] = [];
  selectedLanguage?: Language;
  
  constructor(private languageService: LanguageService,
    private messageService: MessageService) {}
    
  ngOnInit(): void {
    this.getLanguages();
  }

  onSelect(language: Language): void{
    this.selectedLanguage = language;
    this.messageService.add(`LanguagesComponent: Selected language id=${language.id}`)
  }

  getLanguages(): void {
    this.languageService.getLanguages()
    .subscribe(programming_languages => this.programming_languages = programming_languages);
  }
}
