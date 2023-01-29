// // let number = +prompt('Emter Number ?')

// // if(number >= 10 && number <= 20){
// //     console.log(`The num is correct: T ${number}`);
// // }else if(number >= 100){
// //     console.log('Your Number is grater than 100');
// // } else if(number >= 50 && number <= 60){
// //     console.log(`The number : ${number}`);
// // }else{
// //     console.log(`The number is smoller: F ${number}`)
// // }

// // let season = prompt('Enter your month')

// // if (season == 'December' || season == 'January' || season == 'February') {
// //     console.log('Winter');
// // }else if(season == 'March' ||season == 'April' || season == 'May'){
// //     console.log('Spring');
// // }else{
// //     console.log('There are no month like this !');
// // }

// // switch (season) {
// //     case 'December':
// //         console.log('Winter');
// //         break;
// //     case 'January':
// //         console.log('Winter');
// //         break;
// //     case 'February':
// //         console.log('Winter');
// //         break;
// //     case 'March':
// //         console.log('Spring');
// //         break;
// //     case 'April':
// //         console.log('Spring');
// //         break;
// //     case 'May':
// //         console.log('Spring');
// //         break;
// //     case 'June':
// //         console.log('Summer');
// //         break;
// //     case 'July':
// //         console.log('Summer');
// //         break;
// //     case 'August':
// //         console.log('Summer');
// //         break;
// //     case 'September':
// //         console.log('Autum');
// //         break;
// //     case 'October':
// //         console.log('Autum');
// //         break;
// //     case 'November':
// //         console.log('Autum');
// //         break;
// //     default:
// //         console.log('There are no month like this !');
// //         break;
// // }

// // let name = prompt('Name')
// // let obj = new Object()
// // if (name) {
// //     let age = +prompt('Age')
// //     obj.name = name;
// //     if (age) {
// //         obj.age = age;
// //         let isMarrid = confirm('Can we start ?')
// //         if (isMarrid == true) {
// //             obj.isMarrid = isMarrid;
// //             console.log(obj);
// //         }else{
// //             console.log('Good bye');
// //         }
// //     } else {
// //         console.log('Enter Your Age');
// //         alert('Enter Your age')
// //     }
// // }else{
// //     console.log('Enter Your Name');
// //     alert('Enter Your Name');
// // }

let arr = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing"
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. ',
    category: "men's clothing"
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions,',
    category: "men's clothing"
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. ',
    category: "men's clothing"
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. ",
    category: 'jewelery'
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave ',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Return or exchange any order within 30 days.',
    category: 'jewelery'
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    description:
      'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.',
    category: 'jewelery'
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    category: 'jewelery'
  },
  {
    id: 9,
    title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    price: 64,
    description:
      'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; ',
    category: 'electronics'
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 109,
    description:
      'Easy upgrade for faster boot up, shutdown, application load and response',
    category: 'electronics'
  }
]


    arr.forEach((item) =>{
    })
    let total = arr.reduce((a, b) => a + b.price, 0).toFixed(2)
    arr.sort((a,b) => a.category.localeCompare(b.category))
    console.log(arr);

// // arr.forEach(item =>{
// //     if (item.price < 100) {
// //         console.log(item);
// //     }else{
// //         console.log('No');
// //     }
// // })

// // let d = new Date()

// // console.log(d.getHours(), d.getMinutes());

// // let user = +prompt('Who do you want to del ?')

// // let array = arr.filter((item) => {
// //     return item.id !== user;
// // })
// // console.log(array);

// // switch (new Date().getDay()) {
// //     case 0:
// //       day = "Sunday";
// //       break;
// //     case 1:
// //       day = "Monday";
// //       break;
// //     case 2:
// //        day = "Tuesday";
// //       break;
// //     case 3:
// //       day = "Wednesday";
// //       break;
// //     case 4:
// //       day = "Thursday";
// //       break;
// //     case 5:
// //       day = "Friday";
// //       break;
// //     case 6:
// //       day = "Saturday";
// //   }

// //   console.log(new Date().getDay());
// // let text = "";
// // let i = 0;
// // while (i < 10) {
// //   text += "N:" + i;
// //   i++;
// // }

// // let array = [[1, 2, [3, [4, [6]]]], 1, 4, 'Apple', [{ name: 'Fozil', age: 21 }],[[1, 2, [3, [4, [6,[[1, 2, [3, [4, [6,[[1, 2, [3, [4, [6,[[1, 2, [3, [4, [6]]]], 1, 4, 'Apple', [{ name: 'Fozil', age: 21 }],[[1, 2, [3, [4, [6,[[1, 2, [3, [4, [6,[[1, 2, [3, [4, [6]]]], 1, 4, 'Apple', [{ name: 'Fozil', age: 21 }]]]]]], 1, 4, 'Apple', [{ name: 'Fozil', age: 21 }]]]]]], 1, 4, 'Apple', [{ name: 'Fozil', age: 21 }]]]]]]], 1, 4, 'Apple', [{ name: 'Fozil', age: 21 }]]]]]], 1, 4, 'Apple', [{ name: 'Fozil', age: 21 }]]]]]], 1, 4, 'Apple', [{ name: 'Fozil', age: 21 }]]]

// // [1,2,3,4,[6],'Apple', {name: 'Fozil', age: 21}]

// // let newArr = array.flat(Infinity)

// // console.log(newArr)

// // array.forEach(item =>{
// // console.log(item);
// // })

// let account = 7777
// let bank = 10000

// let nameUser = prompt('Enter Your Name ?')
// if (nameUser.toLowerCase().charAt(0) == 'a' && nameUser.length > 3) {
//     let age = +prompt('Enter your Age ?')
//     if (age >= 20 && age <= 40) {
//         let code = +prompt('Enter Code ?')
//         if (code == account) {
//             let money = +prompt('How much do yoy have money ?')
//             bank -= money
//             if (bank >= 100) {
//               document.write('<h1 style="color: red; font-size: 55px; margin: 0 auto;nameUser.toLowerCase().charAt(0)">Welcome to our Basiani Club !!</h1>')
//             }else{
//               document.write('<h1 style="color: red; font-size: 55px; margin: 0 auto;nameUser.toLowerCase().charAt(0)">Uyinga Borrrrrr !!</h1>')
//             }
//         }else{
//           alert('Code Xato')
//         }
//     }else{
//       document.write('<h1 style="color: red; font-size: 55px; margin: 0 auto;nameUser.toLowerCase().charAt(0)">Daminigni Ol !!</h1>')
//     }
// } else {
//   document.write('<h1 style="color: red; font-size: 55px; margin: 0 auto;nameUser.toLowerCase().charAt(0)">Uyinga Bor !!</h1>')
// }

// var randomNumber = () => { return Math.floor(Math.random() * 10) }

// let obj = {
//   name: 'Otabek',
//   lastname: 'Amonov',
//   age: 20,
//   fullName: function () {
//       return this.lastname + " " + this.name
//   },
//   catrgory: {
//     action: 'action',
//     cartoon: 'cartoon'
//   }
// }
// console.log(obj['age']);

// let txt = ''
// for (let i = 0; i <= 10; i++) {
//   txt = txt + i;
//   console.log(txt);

// }

// for (const item in obj) {
//     const element = obj[item];
//     console.log(item);
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     console.log(element);
// }


// let i = 0
// while (i < 9) {
//   txt = txt + i
//   i++;
//   console.log(txt)
// }

// do {
//   txt += i;
//   i++;
//   console.log(txt);
// } while (i < 9);






