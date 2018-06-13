import { RouterModule, Routes } from "@angular/router";

import { DasbooardComponent } from "./pages/dasbooard/dasbooard.component";
import { LoginComponent } from "./login/login.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";
import { ProgressComponent } from "./pages/progress/progress.component";

const appRoutes: Routes = [
  { path: "dasboard", component: DasbooardComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: LoginComponent },
  { path: "progress", component: ProgressComponent },
  { path: "", redirectTo: "/dasboard", pathMatch: "full" },
  { path: "**", component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
