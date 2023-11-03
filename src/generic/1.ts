/*
  Є функція getPromise(), яка повертає проміс, що добавляється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise(): Promise<[string, number]> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});
