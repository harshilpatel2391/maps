import { User } from './User';
import { Company } from './Company';
import { GoogleMap } from './GoogleMap';

const user = new User();
const company = new Company();
console.log(user);
console.log(company);

const googleMap = new GoogleMap("map");
googleMap.addMarker(user);
googleMap.addMarker(company);


