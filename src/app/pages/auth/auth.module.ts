import { NgModule } from "@angular/core";

import { SigninComponent } from "./signin/signin.component";
import { RegistrationComponent } from "./registration/registration.component";
import { SharedModule } from "../../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { ToastModule } from "primeng/toast";

@NgModule({
  declarations: [SigninComponent, RegistrationComponent],
  imports: [SharedModule, AuthRoutingModule],
  providers: [],
})
export class AuthModule {}
