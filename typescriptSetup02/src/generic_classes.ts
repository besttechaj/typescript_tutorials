// console.log(`generic class`);

interface Database {
  connection: string;
  username: string;
  password: string;
}

const anotherFunction = <T, U extends Database>(
  valOne: T,
  valTwo: U
): object => {
  return { valOne, valTwo };
};

// x -> anotherFunction(11, `malvika`);

// console.log(
//   anotherFunction(22, {
//     connection: `mongodb_connection`,
//     username: `malvika`,
//     password: `makl@1123`,
//   })
// );

//# more examples

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(products: T) {
    this.cart.push();
  }
}
