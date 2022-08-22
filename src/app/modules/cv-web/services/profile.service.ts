import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProfileModel } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl: string = environment.apiURL + "profiles/"

  constructor(private http: HttpClient) { }


  getAllProfiles(): Observable<ProfileModel[]> {
    console.log(this.apiUrl)
    return this.http.get<ProfileModel[]>(this.apiUrl);
  }

  getProfile(id: string): Observable<ProfileModel> {
    return this.http.get<ProfileModel>(this.apiUrl + id);
  }

  createProfile(profile: ProfileModel): Observable<ProfileModel> {
    return this.http.post<ProfileModel>(this.apiUrl, profile);
  }

  deleteProfile(id: string): Observable<ProfileModel> {
    return this.http.delete<ProfileModel>(this.apiUrl + id);
  }

  saveProfile(profile: ProfileModel): Observable<ProfileModel> {
    return this.http.put<ProfileModel>(this.apiUrl + profile.id, profile );
  }


}
