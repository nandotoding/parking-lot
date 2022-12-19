class Parking {

    constructor(cmd) {
        this.cmd = cmd;
        this.parkCapacity = 0;
    }

    createPark = capacity => {
        this.parkCapacity = capacity;

    }
}