import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { WeaponsComponent } from './admin/weapons/weapons.component';
import { WeaponFormComponent } from './admin/weapons/weapon-form/weapon-form.component';
import { WeaponSearchComponent } from './admin/weapons/weapon-search/weapon-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    WeaponsComponent,
    WeaponFormComponent,
    WeaponSearchComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
