        // Задание 1.

        // Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль 
        // все ключи и значения только собственных свойств. Данная функция не должна 
        // возвращать значение.

        const obj = {
            myProp: 100,
            1: 200,
            a: 23
        };

        for (let key in obj) {
            if(obj.hasOwnProperty(key)){
              console.log(`${key}`)
            }
          }