export enum PetType {
    OTHER = 'Other',
    DOG = 'Dog',
    CAT = 'Cat',
    BIRD = 'Bird',
    FISH = 'Fish',
    REPTILE = 'Reptile'
}

export class Pet {
    id: string = "";
    constructor(
        public name: string,
        public age: number,
        public type: PetType,
        id?: string
    ) {
        // If id was not passed in, generate one
        if (id) {
            this.id = id;
        } else {
            this.id = Pet.getId(this);
            console.log("Pet created: ", this);
        }
    }

    getFace(): string {
        switch (this.type) {
            case PetType.DOG:
                return '🐶';
            case PetType.CAT:
                return '😺';
            case PetType.BIRD:
                return '🐦';
            case PetType.FISH:
                return '🐟';
            case PetType.REPTILE:
                return '🦎';
            default:
                return '🐾';
        }
    }

    static getId(pet: Pet): string {
        let idBeforeHash: string = pet.name + pet.age.toString() + pet.type;
        let hash: number = 0;
        let character: number = 0;
        for (let i = 0; i < idBeforeHash.length; i++) {
            character = idBeforeHash.charCodeAt(i);
            hash += ((hash << 5) - hash) + character;
            hash |= 0;
        }
        if (hash < 0) {
            hash *= -1;
        }
        return hash.toString();
    }

    static stringToPetType(type: string): PetType {
        switch (type) {
            case 'Dog':
                return PetType.DOG;
            case 'Cat':
                return PetType.CAT;
            case 'Bird':
                return PetType.BIRD;
            case 'Fish':
                return PetType.FISH;
            case 'Reptile':
                return PetType.REPTILE;
            default:
                return PetType.OTHER;
        }
    }

    static petTypeToString(type: PetType): string {
        switch (type) {
            case PetType.DOG:
                return 'Dog';
            case PetType.CAT:
                return 'Cat';
            case PetType.BIRD:
                return 'Bird';
            case PetType.FISH:
                return 'Fish';
            case PetType.REPTILE:
                return 'Reptile';
            default:
                return 'Other';
        }
    }
}