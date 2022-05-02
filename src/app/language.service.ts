import { Injectable } from '@angular/core';
import { Language } from './language';
import { LANGUAGES } from './mock-languages';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error);
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getLanguages(): Observable<Language[]>{
    return this.http.get<Language[]>(this.languagesUrl)
      .pipe(
        tap(_ => this.log('fetched languages')),
        catchError(this.handleError<Language[]>('getLanguages', []))
    );
  }
  
  getLanguage(id: number): Observable<Language> {
    const url = `${this.languagesUrl}/${id}`;

    return this.http.get<Language>(url).pipe(
      tap(_=> this.log(`fetched language id=${id}`)),
      catchError(this.handleError<Language>(`getLanguage id=${id}`))
    );
  }

  private log(message: string){
      this.messageService.add(`LanguageService: ${message}`)
  }
  private languagesUrl = 'api/languages';

  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type':'applications/json'}
    )
  };

  updateLanguage(language: Language): Observable<any> {
    return this.http.put(this.languagesUrl, language, 
      this.httpOptions).pipe(
        tap(_ => this.log(`updated language id=${language.id}`)),
        catchError(this.handleError<any>('updateLanguage'))
      );
  }

  addLanguage(language: Language): Observable<Language> {
    return this.http.post<Language>(this.languagesUrl, language, this.httpOptions).pipe(
      tap((newLanguage: Language) => this.log(`added language w/id=${newLanguage.id}`)),
      catchError(this.handleError<Language>('addLanguage'))
    );
  }

  deleteLanguage(id: number): Observable<Language>{
    const url = `${this.languagesUrl}/${id}`;

    return this.http.delete<Language>(url,
      this.httpOptions).pipe(
        tap(_ => this.log(`deleted language id=${id}`)),
        catchError(this.handleError<Language>('deleteLanguage'))
      );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }
}
