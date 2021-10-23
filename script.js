// 1. ამოიღეთ user ცვლადის სტუდენტის სტატუსი.

let person = {
  firstname: 'alec',
  lastname: 'boldwin',
  age: 63,
  status: 'guilty'
}

console.log(person.status);

// 2. შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი; (for, while ციკლების საშუალებით);

let max = ['redBull', 'formula1', 'champion', 1, ['youngestChampion', 'worldChampion']]

for (let a = 0; a < max.length; a++) {
  console.log(max[a]);
}

let t = 0;
while (t < max.length) {
  console.log(max[t]);
  t++;
}

// 3. შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let n in numbers) {
  if (numbers[n] > 5) {
    console.log(numbers[n]); 
  }
}
// 4.მოცემული მაისივიდან კონსოლში გამოვიტანოთ მარტო ის ობიექტი რომლის status  მნიშვნელობა არის true;
 
let users = [
  {username:'test1', status:false},
  {username:'test2', status:false},
  {username:'test3', status:true}
]

for (const p in users) {
  if (users[p].status === true) {
    console.log(users[p]);    
  }
}

// 5. მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];

for (let item1 of arr) {
  for (let item2 of item1) {
    if (item2 > 0) {
      console.log(item2);
    }
  }
}

// 6. რას დააუბრუნებს 6 === “6”? (true ან false) ახსენით რატო?

console.log(6 === '6'); // დააბრუნებს false, რადგან სამი ტოლობა ნიშნავს მკაცრ ტოლობას და ამ დროს არ ხდება ტიპების კონვერტაცია.
// ამ მაგალითში კი ერთმანეთს შევადარეთ რიცხვითი ტიპი და სტრინგ ტიპი, რაც განსხვავებული ტიპებია და ამიტომაც დააბრუნა false პასუხი.


// 7. მოცემულია მასივი:ამოიღეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა 5-ზე მეტია და მოიცავენ ‘ava’-ს;

let array = ["html", "css", "bootstrap", "javascript","python"];

for (const thing of array) {
  if(thing.includes('ava')){
    console.log(thing);
  }
}


// 8.მოცემულია ობიექტი: თუ უსერის ასაკი მეტია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი: hello;
// თუ უსერის სახელი უდრის გიორგის მაშინ დაიბეჭდოს ტექსტი: hello giorgi;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

let user2 = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
}

if (user2.age > 18 && user2.studentstatus === 'active'){
  console.log('hello');
}
if (user2.name === 'giorgi') {
  console.log('hello giorgi');
}
if (user2.studentstatus === 'active' || user2.age < 25) {
  console.log('hello world');
}else {
  console.log('error');
}

// 9. მოცემულია მასივი: გამოიტანეთ მარტო სრტინგები;

let array45 = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];

for (const items of array45) {
  if (typeof items == 'string') {
    console.log(items);
  }
  
}
