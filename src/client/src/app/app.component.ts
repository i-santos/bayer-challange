import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Farmer } from "src/model/farmer.model";
import { FarmerSearchAbstractProvider } from "src/services/farmer/farmer.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    public myFarmerSearchProvider: FarmerSearchAbstractProvider,
    private snackBar: MatSnackBar
  ) {}

  farmer: Farmer = new Farmer();

  searching = false;

  onPartnerSelectedEvent(response: Farmer | Error) {
    this.searching = false;

    if (response instanceof Error) {
      this.snackBar.open(response.message, "Ok", {
        panelClass: "style-error",
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: "top",
      });
      this.farmer = new Farmer();
      return;
    }

    this.snackBar.open("Found", "OK", {
      panelClass: "style-success",
      duration: 5000,
      horizontalPosition: "end",
      verticalPosition: "top",
    });
    this.farmer = response;
  }
}
