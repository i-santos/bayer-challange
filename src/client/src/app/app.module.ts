import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSnackBarModule,
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FarmerSearchAbstractProvider } from "src/services/farmer/farmer.service";
import { AppComponent } from "./app.component";
import { FarmerSearchCardComponent } from "./farmer-search-card/farmer-search-card.component";

@NgModule({
  declarations: [AppComponent, FarmerSearchCardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule,
  ],
  providers: [FarmerSearchAbstractProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
