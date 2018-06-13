import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//RUTAS
import { APP_ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";
import { DasbooardComponent } from "./pages/dasbooard/dasbooard.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { HeaderComponent } from "./shared/header/header.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { BreadcrumbsComponent } from "./shared/breadcrumbs/breadcrumbs.component";
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DasbooardComponent,
    ProgressComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent
  ],
  imports: [BrowserModule, APP_ROUTES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
