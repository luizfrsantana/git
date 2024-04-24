import factorial from "./factorial.js";
import {fork} from "child_process";

// Node with Child Process
for (let index = 1; index < 50; index++) {
    // start_time = performance.now();
    const child = fork('factorial_child.js', [index]);

    child.on('message', (data) => {
        console.log(`Factorial of ${index}: ${data}`);
        child.kill();
    });
    // end_time = performance.now();

    // console.log(`   --> ${end_time-start_time}`);
}