import {ParkingLot} from "../model/ParkingLot.js";

export class ParkingLotService {
    constructor() {
        this.parkingLot = new ParkingLot();
    }

    createPark = (cap) => {
        return new Promise(resolve => {
            setTimeout(() => {
                this.parkingLot.capacity = cap;
                resolve(`Successfully created parking lot with a capacity of ${cap} cars`);
            }, 1000)
        });
    };

    park = (car) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.parkingLot.cars.length < this.parkingLot.capacity) {
                    if (!this.parkingLot.cars.includes(car)) {
                        this.parkingLot.cars.push(car);
                        this.parkingLot.capacity--;
                        resolve(`Successfully parked ${car.owner}'s car with license number ${car.licNum}`);
                    }
                    reject(`${car.owner}'car with license number ${car.licNum} has been parked`);
                }
                reject('Parking Lot is full');
            }, 1000)
        });
    };

    leave = (licNum) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                for (let i = 0; i < this.parkingLot.cars.length; i++) {
                    if (this.parkingLot.cars[i].licNum === licNum) {
                        const owner = this.parkingLot.cars[i].owner;
                        this.parkingLot.cars.splice(i, 1);
                        this.parkingLot.capacity++;
                        resolve(`${owner}'s car with license number ${licNum} has left`);
                    }
                }
                reject(`There is no car with license number ${licNum}`);
            }, 1000);
        });
    }

    check = () => {
        return new Promise(resolve => {
           setTimeout(() => {
               const info = {
                   capacity: this.parkingLot.capacity + this.parkingLot.cars.length,
                   remaining: this.parkingLot.capacity,
                   parkedCars: this.parkingLot.cars
               };
               resolve(info);
           }, 1000);
        });
    };
}