import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Pet, PetType } from "./pet.model";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

@Injectable()
export class PetsService {
    public pets: Pet[] = [];

    /*
    new Pet('Fido', 3, PetType.DOG),
    new Pet('Kitty', 2, PetType.CAT),
    new Pet('Polly', 4, PetType.BIRD),
    new Pet('Bubbles', 1, PetType.FISH),
    new Pet('Spike', 5, PetType.REPTILE),
    new Pet('Buddy', 6, PetType.DOG),
    new Pet('Fluffy', 7, PetType.CAT)
    */

    constructor(
        private dataService: DataService
    ) { }

    getPets() {
        return this.dataService.loadPets();
    }

    async addPet(pet: Pet): Promise<void> {
        this.pets.push(pet);
        await this.dataService.savePets(this.pets);
    }

    getPet(index: number): Pet {
        return this.pets[index];
    }

    async modifyPet(index: number, pet: Pet): Promise<void> {
        let oldPet = this.pets[index];
        oldPet.name = pet.name;
        oldPet.age = pet.age;
        oldPet.type = pet.type;
        await this.dataService.modifyPet(index, pet);
    }

    async deletePet(index: number): Promise<void> {
        await this.dataService.deletePet(index, this.pets);
        this.pets.splice(index, 1);
    }
}