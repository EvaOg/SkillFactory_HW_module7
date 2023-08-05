// Задание 4

/*Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
Общие требования:

Имена функций, свойств и методов должны быть информативными
Соблюдайте best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и так далее.*/


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