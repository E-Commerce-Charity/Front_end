import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { AboutComponent } from './components/about/about.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyGuardGuard } from './my-guard.guard';
import { ThanksComponent } from './components/thanks/thanks.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ThanksDonationComponent } from './components/thanks-donation/thanks-donation.component';
var Routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  // { path: 'auth/resetpassword', component: ResetpasswordComponent },
  { path: 'auth/resetpassword/:id', component: ResetpasswordComponent },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: 'contact', component: ContactComponent },

  { path: 'cart', component: CartComponent, canActivate: [MyGuardGuard] },
  {
    path: 'product',
    component: ProductPageComponent,
    canActivate: [MyGuardGuard],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [MyGuardGuard] },

  {
    path: 'thanks',
    component: ThanksDonationComponent,
    canActivate: [MyGuardGuard],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
