// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

    const obj = {
        myProp: 100,
        1: 200,
        a: 23
    };

    const objFunc = (obj, key) => key in obj
    
    console.log(objFunc(obj, "myProp"))