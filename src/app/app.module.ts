import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './components/card/card.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactHeaderComponent } from './components/contact/contact-header/contact-header.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ProductPageComponent } from './components/product-page/product-page.component';
import {
  MatError,
  MatFormFieldControl,
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AboutHeaderComponent } from './components/about/about-header/about-header.component';
import { YsectionComponent } from './components/ysection/ysection.component';
import { ThanksComponent } from './components/thanks/thanks.component';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import {MaterialExampleModule} from '../material.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    CardComponent,
    AboutHeaderComponent,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    ContactHeaderComponent,
    ContactFormComponent,
    ContactComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
    ProductPageComponent,
    ProfileComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    YsectionComponent,
    AboutComponent,
    ThanksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(Routes),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    // FontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [AboutHeaderComponent, CardComponent],

  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },

    FormsModule,
    // RouterModule.forRoot(Routes),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent],
})
export class AppModule {}
