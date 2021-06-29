import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Farmer } from "src/model/farmer.model";
import { FarmerSearchAbstractProvider } from "src/services/farmer/farmer-searcher-abstract-provider";

@Component({
  selector: "farmer-search-card",
  templateUrl: "./farmer-search-card.component.html",
  styleUrls: ["./farmer-search-card.component.scss"],
})
export class FarmerSearchCardComponent implements OnInit {
  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() onPartnerSelectedEvent = new EventEmitter();
  @Output() onSearchEvent = new EventEmitter();

  termInput = "";

  constructor() {}

  ngOnInit() {}

  onSearchClick() {
    if (this.termInput) {
      this.onSearchEvent.emit();

      this.farmerSearchAbstractProvider
        .searchFarmers({ term: this.termInput })
        .then((res) => {
          this.onPartnerSelectedEvent.emit(res[0] as Farmer);
        })
        .catch((err) => {
          this.onPartnerSelectedEvent.emit(
            new Error(
              (err.error && err.error.message) ||
                "Action could not be completed"
            )
          );
        });
    } else {
      this.onPartnerSelectedEvent.emit(
        new Error("Name or Doc number is required")
      );
    }
  }
}
