import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CardComponent } from './card/card.component';
import { SectionComponent } from './section/section.component';
import { UserComponent } from './user/user.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  MatError,
  MatFormFieldControl,
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ContactHeaderComponent } from './components/contact/contact-header/contact-header.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { ContactComponent } from './components/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './components/cart/cart.component';
// import {MaterialExampleModule} from '../material.module';

var Routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [
    AppComponent,

    CardComponent,
    SectionComponent,
    UserComponent,
    ProductPageComponent,
    SignupComponent,
    HeaderComponent,
    ErrorComponent,
    AboutComponent,
    ProfileComponent,
    LoginComponent,
    ContactHeaderComponent,
    ContactFormComponent,
    ContactComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,

    FormsModule,
    RouterModule.forRoot(Routes),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },

    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
