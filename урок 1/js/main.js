class People {
    /**
     * Класс Человек
     * @param {String} fio по формату "Фамилия Имя Отчество"
     * @param {String} birthday день рождения по формату""24.11.1999"
     * @param {String} numbers "номер", если больше 2 номеров, телефона
     * @param {Number} room комната
     */
    constructor(fio, birthday, numbers, room) {
        let name = fio.toLowerCase().split(" ");
        this.name = {};
        this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
        this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
        this.name.o = name[2][0].toUpperCase() + name[2].slice(1)
        
        let date = birthday.split(".");
        this.date = {};
        this.date.d = +date[0]
        this.date.m = +date[1]
        this.date.y = +date[2]

        this.numbers = numbers.split(", ")

        this.room = +room
    }
}
let People1 = new People("ТкаыыВЫенко Данил Михайлович", "06.06.1995", "983423478123", 523);
let People2 = new People("Пиздюшко Алексей МИхайлович", "23.10.1995", "983423471231", 521);
let People3 = new People("ТкарчАнко ДЕнил МИхайлович", "27.12.1995", "9834234713132", 5123);
let People4 = new People("ТкаМАкоВ ДаРОСл МИхАРлович", "11.02.1995", "9834231231", 5123);