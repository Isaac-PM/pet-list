import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { PetComponent } from './pets/pet/pet.component';
import { PetsComponent } from './pets/pets.component';
import { FormComponent } from './pets/form/form.component';
import { ErrorsComponent } from './errors/errors.component';
import { ListComponent } from './pets/list/list.component';
import { PetsService } from './pets.service';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        PetComponent,
        PetsComponent,
        FormComponent,
        ErrorsComponent,
        ListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        HttpClientModule
    ],
    providers: [
        PetsService,
        HttpClientModule,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
