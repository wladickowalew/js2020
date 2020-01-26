console.log("all ok")
punkt2_2()


function punkt2_1() {
	//разница в сравнении
	let d = {key: "value"};
	let e = {key: "value"} == d;  //нестрогое сравнение
	console.log(e);
	let a = {key: "value"} === d; //строгое сравнение
	console.log(a);
	let b = d;
	let c = b === d;              //ссылаются на один и тот же объект
	console.log(c);
}

function punkt2_2() {
	//экранирование
	console.log("кино \"аватар\" \n \\n - перевод строки");
	//функции строк
	let s = " The Quick bRown FOX quickly jumps over The lazy dog.  "
	console.log(s[1] + s[3])
	console.log(s.indexOf("e"))     // первое вхождение
	console.log(s.lastIndexOf("e")) // последнее вхождение
	console.log(s.indexOf("ф"))     // если нет такого символа
	console.log(s.replace("o", "OOO")) //замена
	let mas = s.split(" ");
	console.log(mas);
	console.log("192.168.1.1".split("."))
	console.log(mas.join("-^-"))
	console.log(s.substr(5, 11)) // выерать из строки 11 символов начиная с 5 индекса
	console.log(s.toLowerCase()) // в нижний регистр
	console.log(s.toUpperCase()) // в верхний регистр
	console.log(s.trim()) //обрезает пробельныесимволы в начале и в конце
}