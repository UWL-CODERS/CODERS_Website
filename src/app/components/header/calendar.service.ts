import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CalendarService {
  private apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  private calendarId = '61d2c536ecd3a2b20ec4b8693e7193b78600b2970188ec7d2e3d26f5412de18d@group.calendar.google.com';

  constructor(private http: HttpClient) {}

  getUpcomingEvents(maxResults: number = 3): Observable<any> {
    const url = `https://www.googleapis.com/calendar/v3/calendars/${this.calendarId}/events`;
    let params = new HttpParams()
      .set('key', this.apiKey)
      .set('orderBy', 'startTime')
      .set('singleEvents', 'true')
      .set('timeMin', new Date().toISOString())
      .set('maxResults', maxResults.toString());

    return this.http.get(url, { params });
  }
}
