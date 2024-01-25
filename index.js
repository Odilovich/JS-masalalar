//1-masala-----------------------------

// function createHelloWorld() {
//     return "Hello, World!";
//   }
  
//   function alwaysReturnSalomDunyo() {
//     return "Salom dunyo";
//   }
  
//   console.log(createHelloWorld());
//   console.log(alwaysReturnSalomDunyo());

//2-masala-----------------------------

// function createIncrementingFunction(initialValue) {
//     let n = initialValue;
  
//     function increment() {
//       const result = n;
//       n += 1;
//       return result;
//     }
  
//     return increment;
//   }
  
//   const incrementFunction = createIncrementingFunction(5);
  
//   console.log(incrementFunction());
//   console.log(incrementFunction());
//   console.log(incrementFunction());

//3-masala-----------------------------

// function testFunction() {
//     let son1;
  
//     function toBe(son2) {
//       if (son1 === son2) {
//         return true;
//       } else {
//         throw new Error("Teng emas");
//       }
//     }
  
//     function notToBe(son2) {
//       if (son1 !== son2) {
//         return true;
//       } else {
//         throw new Error("Teng");
//       }
//     }
  
//     function setValue(son2) {
//       son1 = son2;
//       return { toBe, notToBe };
//     }
  
//     return { setValue };
//   }
  
//   try {
//     const tester = testFunction();
//     // tester.setValue(17).toBe(5);
//     // tester.setValue(17).notToBe(17);
//   } catch (error) {
//     console.log(error.message);
//   }

//4-masala-----------------------------

// function createCounter(boshlangichQiymat) {
//     let count = boshlangichQiymat;
  
//     function increment() {
//       count += 1;
//       return count;
//     }
  
//     function decrement() {
//       count -= 1;
//       return count;
//     }
  
//     function reset() {
//       count = boshlangichQiymat;
//       return count;
//     }
  
//     return { increment, decrement, reset };
//   }
  
//   const counter = createCounter(17);
  
//   console.log(counter.increment());
//   console.log(counter.decrement());
//   console.log(counter.reset());

//5-masala-----------------------------

// function mapWithIndex(arr, fn) {
//     const returnedArray = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       returnedArray[i] = fn(arr[i], i);
//     }
  
//     return returnedArray;
//   }
  
//   const inputArray = [1, 2, 3, 4, 5];
  
//   function exampleFunction(qiymat, index) {
//     return qiymat * index;
//   }
  
//   const resultArray = mapWithIndex(inputArray, exampleFunction);
//   console.log(resultArray);

//6-masala-----------------------------
  
  
  
  
  