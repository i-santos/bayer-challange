import { Address } from "./address.model";
import { Document } from "./document.model";

export class Farmer {
  constructor() {
    this.document = new Document();
    this.address = new Address();
  }

  id: string;
  document: Document;
  name: string;
  address: Address;
}
