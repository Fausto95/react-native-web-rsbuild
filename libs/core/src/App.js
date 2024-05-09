export const DummyComponent = ({ name }) => null;
export const DummyComponent2 = ({ value }) => <DummyComponent name="Dummy" />;
const App = () => <DummyComponent2 value={[2, 3, 4]} />;

export const dummyFunction = (value) => value;
export const dummyFunction2 = () => dummyFunction(true);

export const dummyObject = { name: "Dummy" };
export const dummyObject2 = { ...dummyObject, day: "Monday" };

export const dummyArray = [321, 123, 1234];
export const dummyArray2 = [...dummyArray, 1, 2, 3];

export const dummyString = "Hello, world";
export const dummyString2 = dummyString + "!";

export const dummyNumber = 10;
export const dummyNumber2 = dummyNumber + 1;

export default App;
