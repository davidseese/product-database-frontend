import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IntroService {

  constructor(private readonly http: HttpClient) { }

  getIntroText(): Observable<string> {
    return this.http.get('http://localhost:8080/intro', {responseType: 'text'});
  }
}
