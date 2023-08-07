// Задание 5
//Переписать консольное приложение из предыдущего юнита на классы.
// Общие требования:

// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.


const pluggedDevices = [];
const sortedPluggedDevices = pluggedDevices.sort((a, b) => b - a);

class Socket {
 
    pluginDevice(newDevice) {
        pluggedDevices.push(newDevice.devPower)
        newDevice.turnOn()
        console.log(`Device ${newDevice.devName} plugged in`)
    }
    
    /**
     * Remove given Device from plugged in devices list of this socket, if the given device is plugged in. If the device is not plugged in, inform the user
     * @param {*} newDevice 
     * @returns 
     */
    unplugDevice(newDevice) {
        let indexofEl = pluggedDevices.indexOf(newDevice.devPower)
        if (indexofEl == -1) {
            console.log("this device is not plugged in, cannot unplug")
            return
        } else {
            pluggedDevices.splice(indexofEl, 1)  // remove this devie from the list
            newDevice.turnOff()  // turn the device off
            console.log(`Device ${newDevice.devName} is unplugged`)
        }
    }

    /**
     * Calculate total power of all devices that are plugged into current Socket
     * @returns 
     */
    totalPower(){
        let totalP = 0;
        for (let item of pluggedDevices) {
            return totalP = totalP + item
        } 
    }
}   


class Device {
    isOn = false;
    constructor(name, power) {
        this.devName = name;
        this.devPower = power;
    }

    turnOn(){
        this.isOn = true;
    }

    turnOff(){
        this.isOn = false;
    }

    info(){
        if (this.isOn) {
            return (`This ${this.devName} is on and it takes ${this.devPower}`)
        } else {
            return (`This ${this.devName} is off`)
        }
    }    
}

let rozetka = new Socket();
let computer = new Device ('Computer', 220);
let laptop = new Device ('Laptop', 100);
let computer2 = new Device('Computer2', 230)

rozetka.pluginDevice(computer);

rozetka.pluginDevice(laptop);


console.log(sortedPluggedDevices)

rozetka.unplugDevice(computer)
console.log(sortedPluggedDevices)

console.log(rozetka.totalPower())