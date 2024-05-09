import { dummyFunction, dummyObject } from "./App";
export * from "./App";

export const result = dummyFunction(dummyObject);

const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;

console.log("Hello World!");

export { add, subtract };
export default function () {
  console.log("Hello World!");
}
