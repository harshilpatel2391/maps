import faker, { fake } from 'faker';
import { mappable } from './GoogleMap';

export class User implements mappable {

    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `Username is ${this.name}`;
    }

}