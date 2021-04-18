export class Vehicle {
    id !: number;
    brand !: string;
    model !: string;
    numberDoors !: number;
    color !: string;
    price !: number;

    constructor (
        id: number,
        brand: string,
        model: string,
        numberDoors: number,
        color: string,
        price: number
    ){
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.numberDoors = numberDoors;
        this.color = color;
        this.price = price;
    }
}