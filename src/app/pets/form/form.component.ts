import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pet, PetType } from 'src/app/pet.model';
import { PetsService } from 'src/app/pets.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    petName!: string;
    petAge!: number;
    petType!: string;
    petIndex!: number;

    constructor(
        private petsService: PetsService,
        private toastr: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        if (this.route.snapshot.queryParams['petIndex'] !== undefined) {
            this.petIndex = +(this.route.snapshot.queryParams['petIndex']);
            let pet = this.petsService.getPet(this.petIndex);
            this.petName = pet.name;
            this.petAge = pet.age;
            this.petType = Pet.stringToPetType(pet.type);
        }
    }

    addOrModifyPet(): void {
        if (
            this.petName === undefined ||
            this.petAge === undefined ||
            this.petType === undefined ||
            this.petName.trim() === '' ||
            this.petAge <= 0 ||
            this.petType.trim() === ''
        ) {
            this.toastr.error('Please enter a valid name, age and type', 'Error');
            return;
        }

        let pet = new Pet(
            this.petName,
            this.petAge,
            Pet.stringToPetType(this.petType)
        );
        if (this.petIndex === undefined) {
            this.addPet(pet);
        } else {
            this.modifyPet(pet);
        }
    }

    async addPet(pet: Pet): Promise<void> {
        this.toastr.success('Pet added successfully', 'Success');
        await this.petsService.addPet(pet);
        this.router.navigate(['/pets/list']);
    }

    async modifyPet(pet: Pet): Promise<void> {
        this.toastr.success('Pet modified successfully', 'Success');
        await this.petsService.modifyPet(this.petIndex, pet);
        this.router.navigate(['/pets/list']);
    }

    async deletePet(): Promise<void> {
        this.toastr.success('Pet deleted successfully', 'Success');
        await this.petsService.deletePet(this.petIndex);
        this.router.navigate(['/pets/list']);
    }
}