import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from './pet.model';

@Injectable()
export class DataService {
    readonly DB_URL: string = 'YOUR FIREBASE URL';
    constructor(
        private httpClient: HttpClient
    ) { }

    loadPets() {
        return this.httpClient.get(this.DB_URL + 'pets.json');
    }

    async savePets(pets: Pet[]): Promise<boolean> {
        try {
            const response = await this.httpClient.put(this.DB_URL + 'pets.json', pets).toPromise();
            console.log("Result of saving pets: ", response);
            return true;
        } catch (error) {
            console.log("Error saving pets: ", error);
            return false;
        }
    }


    // savePets(pets: Pet[]) {
    //     /*
    //     // POST genera un nuevo registro en la base de datos (copia).
    //     this.httpClient.post(this.DB_URL + 'pets.json', pets).subscribe (
    //         response => console.log("Result of saving pets: ", response),
    //         error => console.log("Error saving pets: ", error)
    //     );
    //     */

    //     // PUT actualiza un registro en la base de datos(sobreescribe).
    //     this.httpClient.put(this.DB_URL + 'pets.json', pets).subscribe(
    //         response => console.log("Result of saving pets: ", response),
    //         error => console.log("Error saving pets: ", error)
    //     );
    // }

    async modifyPet(index: number, pet: Pet): Promise<boolean> {
        const urlModify: string = this.DB_URL + 'pets/' + index + '.json';
        try {
            const response = await this.httpClient.put(urlModify, pet).toPromise();
            console.log("Result of modifying pet: ", response);
            return true;
        } catch (error) {
            console.log("Error modifying pet: ", error);
            return false;
        }
    }

    async deletePet(index: number, pets: Pet[]): Promise<boolean> {
        // FIXME: No se puede borrar un registro de la base de datos.
        // let petId: string = pets[index].id;
        const urlDelete: string = this.DB_URL + 'pets/' + index + '.json';
        try {
            const response = await this.httpClient.delete(urlDelete).toPromise();
            console.log("Result of deleting pet: ", response);
            return true;
        } catch (error) {
            console.log("Error deleting pet: ", error);
            return false;
        }
    }

}
