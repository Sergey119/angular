
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";
  
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
  
@NgModule({
  imports: [BrowserModule, 
              BrowserAnimationsModule, 
            ButtonModule, RippleModule],
  declarations: [],
  bootstrap: [],
})
export class AppModule {}