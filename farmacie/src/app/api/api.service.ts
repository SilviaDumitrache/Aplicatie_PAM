import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllFarms() {
    return this.http.get(`${environment.apiUrl}/farm`);
  }

  getAllMeds() {
    return this.http.get(`${environment.apiUrl}/med`);
  }
}