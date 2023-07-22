import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pets/form/form.component';
import { PetsComponent } from './pets/pets.component';
import { ErrorsComponent } from './errors/errors.component';
import { ListComponent } from './pets/list/list.component';

const routes: Routes = [
    { path: '', redirectTo: '/pets/list', pathMatch: 'full' },
    {
        path: 'pets', component: PetsComponent, children: [
            { path: 'list', component: ListComponent },
            { path: 'add', component: FormComponent },
            { path: 'modify', component: FormComponent }
        ]
    },
    { path: '**', component: ErrorsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
