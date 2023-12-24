// String 1

// let n = 10;

// for (let i = 65; i < 65 + n; i++) {
//     let stringBig = String.fromCharCode(i);
//     console.log(stringBig);
// }

// String 2

// let n = "1111";

// if (/[0-9]/.test(n)) {
//   console.log("digit");
// } else if (/[a-zA-Z]/.test(n)) {
//   console.log("lotin");
// } else {
//   console.log("nol");
// }

// String 3

// let satr = "abdulaziz";

// let first = satr.charCodeAt(0);

// let last = satr.charCodeAt(satr.length - 1);

// console.log("Birinchi belgi UTF-16 kodi:", first);
// console.log("Oxirgi belgi UTF-16 kodi:", last);

// String 4

// let n = 3;
// let belgi = "ROLEX ";
// let sum = belgi;

// for (let i = 1; i < n; i++) {
//   sum += belgi;
// }

// console.log(sum);

// String 5

// let satr = "Abdulaziz";

// let res = "";

// for (let i = satr.length - 1; i >= 0; i--) {
//   res += satr[i];
// }

// console.log(res);

// String 6

// function getStringStars(str, N) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     res += str[i];
//     for (let j = 1; j <= N; j++) {
//       res += "*";
//     }
//   }
//   return res;
// }

// let satr = "Abdulaziz";
// let N = 5;

// let = newSatr = getStringStars(satr, N);

// console.log(newSatr);

// String 7

// let str = "Abdu1aziz";
// let count = 0;

// for (const el of str) {
//   if (!isNaN(el) && el != " ") {
//     console.log(el);
//     count++;
//   }
// }

// string 8

// let str = "Abdu1az1z";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   if (
//     (str.charCodeAt(i) >= 1072 && str.charCodeAt(i) <= 1105) ||
//     (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
//   ) {
//     count++;
//   }
// }

// console.log({count} );

// String 9

// let str = "Abdulaziz";
// let res = "";

// for (let i = 0; i < str.length; i++) {
//   if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
//     res += str[i].toLowerCase();
//   } else {
//     res += str[i];
//   }
// }

// console.log(res);

// string 10

// let str = "AbduLaziZ";
// let res = "";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] == str[i].toUpperCase()) {
//     res += str[i].toLowerCase();
//   } else if (str[i] == str[i].toLowerCase()) {
//     res += str[i].toUpperCase();
//   } else {
//     res += str[i];
//   }
// }

// console.log(res);

// string 11

// let str = "-70";

// if (+str == str) {
//   if (+str % 1 == 0) {
//     console.log(1);
//   } else {
//     console.log(2);
//   }
// } else {
//   console.log(0);
// }

// string 12

// let n = 150;

// let getInverseNumber = (num) =>
//   parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

// console.log(getInverseNumber(n));

// string 13

// let str = "15 + 56 - 55";

// console.log(eval(str));

// string 14

// let str1 = "Abdulaziz";
// let str2 = "123456789";
// let n1 = 3;
// let n2 = 7;
// let res = str1.slice(0, n1) + str2.slice(0, n2);

// console.log(res);

// string 15

// let str = "Abdu-lazi-z";
// let belgi = "-";
// let res = "";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] == belgi) {
//     res += str[i];
//   }
//   res += str[i];
// }

// console.log(res);

// string 16

// let str1 = "dbcddef-ghi-jkldmn";
// let str2 = "d";
// let belgi = "-";
// let res = "";

// res = str1.split(str2).join(belgi + str2);

// console.log(res);

// string 17

// let str1 = "dbcddef-ghi-jkldmn";
// let str2 = "d";
// let res = 0;

// for (let i = 0; i < str1.length; i++) {
//   if (str1.startsWith(str2, i)) {
//     res++
//   }
// }

// console.log(res);

// string 18

// let str1 = "dbcddef-ghi-jkldmn";
// let str2 = "dd";
// let arr = [];
// let temp;

// if (str1.includes(str2)) {
//   temp = str1.search(str2);
//   arr = [...str1];
//   arr.splice(temp, str2.length)
//   str1 = arr.join("")
// }

// console.log(str1);

// string 19

// let str1 = "dbcddef-ghi-jkldmn";
// let str2 = "d";
// let res;

// res = str1.split(str2).join("");

// console.log(res);

// string 20

// let str1 = "dbcddef-ghi-jkldmn";
// let str2 = "d";
// let str3 = "g";
// let temp;
// let kesh = [];

// temp = str1.indexOf(str2);
// kesh = [...str1];

// kesh.splice(temp, str2.length, str3);
// str1 = kesh.join("");

// console.log(str1);

// string 21

// let str1 = "dbcddef-ghi-jkldmn";
// let str2 = "d";
// let str3 = "g";
// let temp;
// let kesh = [];

// temp = str1.lastIndexOf(str2);
// kesh = [...str1];

// kesh.splice(temp, str2.length, str3);
// str1 = kesh.join("");

// console.log(str1);

// string 22

// let str1 = "abdulaziz yoqubov";
// let temp = [];
// let res = 0;

// temp = str1.split(" ");

// for (const el of temp) {
//   if (el[0] == el[el.length - 1]) {
//     res++;
//   }
// }

// console.log(res);

// string 23

// let str1 = "Abdulazi Yoqubov";
// let temp = [];
// let count = 0;
// let res = 0;

// temp = str1.split(" ");

// for (const el of temp) {
//   for (const art of el) {
//     if (art == "A") {
//       count++
//     }
//   }
//   if (count == 2) {
//     res++;
//   }
//   count=0
// }

// console.log(res);

// string 24

// let str1 = "Abdulaziz Yoqubov";
// let temp = [];
// let res = "";

// const getMaxOfString = (str1) => {
//   temp = str1.split(" ");
//   for (const el of temp) {
//     if (res.length < el.length) {
//       res = el;
//     }
//   }
//   return res
// };

// console.log(getMaxOfString(str1));

// string 25

// let str1 = "Abdulaziz Yoqubov";
// let res = [];

// res = str1.split(" ").join(".");

// console.log(res);

// string 26

// let str1 = "abdulaziz yoqubov";
// let temp = [];
// let res = "";

// temp = str1.split(" ")

// for (let i = 0; i < temp.length; i++) {
//   res += temp[i].charAt(0).toUpperCase() + temp[i].slice(1) + " "
// }

// console.log(res);

// string 27

// let str1 = "abdulaziz yoqubov";
// let marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"]
// let res = 0;

// for (const el of str1) {
//   for (const mark of marks) {
//     if (el == mark) {
//       res++;
//     }
//   }
// }

// console.log(res);

// string 28

// let str = "D:/Qudrat_c++/books/My_book.exe";
// let lastSlash = "";
// let dot = "";
// let res = "";

// dot = str.indexOf(".");
// lastSlash = str.lastIndexOf("/");

// res = str.slice(lastSlash + 1, dot);

// console.log(res);

// string 29

// let str = "D:/Qudrat_c++/books/My_book.exe";
// let dot = "";
// let res = "";

// dot = str.indexOf(".");

// res = str.slice(dot + 1);

// console.log(res);

// string 30

// let str = "D:/Qudrat_c++/books/My_book.exe";
// let temp = [];

// temp = str.split("/");

// if (temp[temp.length - 1] == "") {
//   console.log("/");
// } else {
//   console.log(temp[temp.length - 2]);