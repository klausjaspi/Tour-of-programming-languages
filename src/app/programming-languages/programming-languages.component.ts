import { Component, OnInit } from '@angular/core';
import { Language } from '../language';
import { LANGUAGES } from '../mock-languages';
import { LanguageService } from '../language.service';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-programming-languages',
  templateUrl: './programming-languages.component.html',
  styleUrls: ['./programming-languages.component.scss']
})
export class ProgrammingLanguagesComponent implements OnInit {

  programming_languages: Language[] = [];
  
  constructor(private languageService: LanguageService) {}
    
  ngOnInit(): void {
    this.getLanguages();
  }

  getLanguages(): void {
    this.languageService.getLanguages()
    .subscribe(programming_languages => this.programming_languages = programming_languages);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.languageService.addLanguage({ name } as Language).subscribe(language => {
      this.programming_languages.push(language)
    })
  }

  delete(language: Language): void{
    this.programming_languages = this.programming_languages.filter(h => h !== language);
    this.languageService.deleteLanguage(language.id).subscribe();
  }
}
