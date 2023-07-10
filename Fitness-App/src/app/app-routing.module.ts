import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CalorieCalculatorComponent } from './calorie-calculator/calorie-calculator.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UpdateProfileComponent } from './my-profile/update-profile/update-profile.component';
import { CreateComponent } from './recipes/create/create.component';
import { DetailsComponent } from './recipes/details/details.component';
import { EditComponent } from './recipes/edit/edit.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { IdParamGuard } from './guards/idParam.guard';


const routes: Routes = [

  // Does not need auth
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'resetPassword', component: ForgotPasswordComponent},
  
  // Needs auth
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard]},
  { path: 'calculator', component: CalorieCalculatorComponent, canActivate: [AuthGuard]},
  { path: 'about', component: AboutUsComponent, canActivate: [AuthGuard]},
  { path: 'contacts', component: ContactUsComponent, canActivate: [AuthGuard]},
  { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: MyProfileComponent, canActivate: [AuthGuard]},
  { path: 'profile/updateProfile', component: UpdateProfileComponent, canActivate: [AuthGuard]},
  { path: 'recipes/create', component: CreateComponent, canActivate: [AuthGuard]},
  { path: 'recipes/details/:id', component: DetailsComponent, canActivate: [IdParamGuard, AuthGuard]},
  { path: 'recipes/details/:id/edit', component: EditComponent, canActivate: [IdParamGuard, AuthGuard]},

  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }