import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExperienceModel } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  apiUrl: string = environment.apiURL + "experiences/"

  constructor(private http: HttpClient) { }


  getAllExperiences(): Observable<ExperienceModel[]> {
    console.log(this.apiUrl)
    return this.http.get<ExperienceModel[]>(this.apiUrl);
  }

  getExperience(id: string): Observable<ExperienceModel> {
    return this.http.get<ExperienceModel>(this.apiUrl + id);
  }

  createExperience(experience: ExperienceModel): Observable<ExperienceModel> {
    return this.http.post<ExperienceModel>(this.apiUrl, experience);
  }

  deleteExperience(id: string): Observable<ExperienceModel> {
    return this.http.delete<ExperienceModel>(this.apiUrl + id);
  }

  saveExperience(experience: ExperienceModel): Observable<ExperienceModel> {
    return this.http.put<ExperienceModel>(this.apiUrl + experience.id, experience);
  }

}