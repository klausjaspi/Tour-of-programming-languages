import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../language';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-language-details',
  templateUrl: './language-details.component.html',
  styleUrls: ['./language-details.component.scss']
})
export class LanguageDetailsComponent implements OnInit {

  @Input() language?: Language;

  constructor(
    private route: ActivatedRoute,
    private languageService: LanguageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLanguage();
  }

  getLanguage(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.languageService.getLanguage(id).subscribe(language => this.language = language);
  }

  save(): void{
    if (this.language) {
      this.languageService.updateLanguage(this.language)
      .subscribe(() => this.goBack());
    }
  }

  goBack(): void{
    this.location.back();
  }

}
