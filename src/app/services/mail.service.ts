import { Injectable } from '@angular/core';
import { EmailBody, PostEmailResponse } from 'src/app/interfaces/email';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient
  ) { }

  sendEmail(emailData: EmailBody): Observable<PostEmailResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        responseType: 'json'
      }),
    };

    return this.http.post('/send', JSON.stringify(emailData), httpOptions);
  }
}
