import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudyModel } from '../models/study';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {

  apiUrl: string = environment.apiURL + "studies/"

  constructor(private http: HttpClient) { }


  getAllStudies(): Observable<StudyModel[]> {
    console.log(this.apiUrl)
    return this.http.get<StudyModel[]>(this.apiUrl);
  }

  getStudy(id: string): Observable<StudyModel> {
    return this.http.get<StudyModel>(this.apiUrl + id);
  }

  createStudy(study: StudyModel): Observable<StudyModel> {
    return this.http.post<StudyModel>(this.apiUrl, study);
  }

  deleteStudy(id: string): Observable<StudyModel> {
    return this.http.delete<StudyModel>(this.apiUrl + id);
  }

  saveStudy(study: StudyModel): Observable<StudyModel> {
    return this.http.put<StudyModel>(this.apiUrl + study.id, study);
  }

}