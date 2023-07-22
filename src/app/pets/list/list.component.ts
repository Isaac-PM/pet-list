import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/pet.model';
import { PetsService } from 'src/app/pets.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    pets!: Pet[];

    constructor(
        private petsService: PetsService
    ) { }

    ngOnInit() {
        // this.pets = this.petsService.pets;
        this.petsService.getPets().subscribe(
            (data: Object) => {
                this.pets = [];
                let dataPets: Pet[] = data as Pet[];
                console.log(dataPets);
                for (let pet of dataPets) {
                    if (pet !== null) {
                        this.pets.push(
                            new Pet(pet.name, pet.age, pet.type, pet.id)
                        );
                    }
                }
                this.petsService.pets = this.pets;
            }
        );
    }
}
