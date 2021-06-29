import { Farmer } from "../../model/farmer.model";
import { SearchParams } from "../search-params";

export declare abstract class FarmerSearchAbstractProvider {
  abstract searchFarmers(params: SearchParams): Promise<Farmer[]>;
}
