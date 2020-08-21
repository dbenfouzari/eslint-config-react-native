import example from "./index";
import path from "path";

// Should cry about variable not used
const square = (n: number) => n * n;

// Should be okay
const square2 = (n: number) => n * n;
console.log(square2(5));
