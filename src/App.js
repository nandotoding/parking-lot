import {ParkingLotService} from "./service/ParkingLotService.js";
import {Car} from "./model/Car.js"

const runApp = async () => {
    const service = new ParkingLotService();
    const car1 = new Car("BE001", "Alex");
    const car2 = new Car("B2021", "Blex");
    const car3 = new Car("C012", "Clex");
    const car4 = new Car("D0101", "Dlex");
    const car5 = new Car("E1000", "Elex");

    await service.createPark(3).then(r => console.log(r));
    await service.park(car1).then(r => console.log(r)).catch(r => console.log(r));
    await service.check().then(r => console.log(r)).catch(r => console.log(r));
    await service.park(car2).then(r => console.log(r)).catch(r => console.log(r));
    await service.leave("B2021").then(r => console.log(r)).catch(r => console.log(r));
    await service.park(car3).then(r => console.log(r)).catch(r => console.log(r));
    await service.park(car4).then(r => console.log(r)).catch(r => console.log(r));
    await service.leave("B2019").then(r => console.log(r)).catch(r => console.log(r));
    await service.park(car5).then(r => console.log(r)).catch(r => console.log(r));
    await service.park(car1).then(r => console.log(r)).catch(r => console.log(r));
    await service.leave("B2021").then(r => console.log(r)).catch(r => console.log(r));
    await service.check().then(r => console.log(r)).catch(r => console.log(r));
    await service.leave("BE001").then(r => console.log(r)).catch(r => console.log(r));
    await service.check().then(r => console.log(r)).catch(r => console.log(r));
}

runApp().then();