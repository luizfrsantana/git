const factorial = async (number) => {
    let result = 1;
    while(number > 0) {
        result = result * number;
        number = number - 1;
    }

    return result;
}

export default factorial