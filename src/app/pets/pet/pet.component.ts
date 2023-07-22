import { Component, Input } from '@angular/core';
import { Pet } from 'src/app/pet.model';

@Component({
    selector: 'tr[app-pet]',
    templateUrl: './pet.component.html',
    styleUrls: ['./pet.component.css']
})
export class PetComponent {
    @Input() subPet!: Pet;
    @Input() subIndex!: number;
}
