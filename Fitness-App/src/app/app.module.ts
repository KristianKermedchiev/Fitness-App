import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BodyComponent } from './body/body.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { StatisticsComponent } from './statistics/statistics.component';
import { MidWidgetsComponent } from './mid-widgets/mid-widgets.component';
import { BottomWidgetsComponent } from './bottom-widgets/bottom-widgets.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalorieCalculatorComponent } from './calorie-calculator/calorie-calculator.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UpdateProfileComponent } from './my-profile/update-profile/update-profile.component';
import { CreateComponent } from './recipes/create/create.component';
import { DetailsComponent } from './recipes/details/details.component';
import { EditComponent } from './recipes/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SideNavComponent,
    BodyComponent,
    TopNavComponent,
    TopWidgetsComponent,
    StatisticsComponent,
    MidWidgetsComponent,
    BottomWidgetsComponent,
    CalorieCalculatorComponent,
    AboutUsComponent,
    ContactUsComponent,
    MyProfileComponent,
    RecipesComponent,
    UpdateProfileComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HighchartsChartModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }