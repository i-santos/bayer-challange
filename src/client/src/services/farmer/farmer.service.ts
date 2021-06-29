import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Farmer } from "src/model/farmer.model";
import { SearchParams } from "../search-params";

@Injectable({
  providedIn: "root",
})
export class FarmerSearchAbstractProvider {
  private farmersUrl = "/api/farmers";

  constructor(private http: HttpClient) {}

  searchFarmers(params: SearchParams): Promise<Farmer[]> {
    return this.http
      .get<Farmer[]>(`${this.farmersUrl}/${params.term}`)
      .toPromise();
  }
}
