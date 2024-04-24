import factorial from "./factorial.js";
import {fork} from "child_process";

// Node with Child Process
for (let index = 1; index < 50; index++) {

    const child = fork('factorial_child.js', [index]);

    child.on('message', (data) => {
        console.log(`Factorial of ${index}: ${data}`);
        child.kill();
    });

}