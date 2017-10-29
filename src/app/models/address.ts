export class Address {

  id: number;
  name: string;
  postalCode: string;
  country: string;
  city: string;
  region: string;
  address: string;
  phone: string;

  constructor(id: number, name: string, postalCode: string, country: string, city: string, region: string, address: string, phone: string) {
    this.id = id;
    this.name = name;
    this.postalCode = postalCode;
    this.country = country;
    this.city = city;
    this.region = region;
    this.address = address;
    this.phone = phone;
  }

}
