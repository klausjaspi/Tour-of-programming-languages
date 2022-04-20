import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../language';

@Component({
  selector: 'app-language-details',
  templateUrl: './language-details.component.html',
  styleUrls: ['./language-details.component.scss']
})
export class LanguageDetailsComponent implements OnInit {

  @Input() language?: Language;

  constructor() { }

  ngOnInit(): void {
  }

}
