import faker from 'faker';
import { mappable } from './GoogleMap';

export class Company implements mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `
        <div>
        <h1>Company name is ${this.companyName}</h1>
        <h3>Catchphrase is ${this.catchPhrase}</h3>
        </div>
        `;
    }
}