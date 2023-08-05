    //Задание 3.    
    // Написать функцию, которая создает пустой объект, но без прототипа

        
    let newObj = Object.create(Object.prototype)
    console.log(Object.getPrototypeOf(newObj))