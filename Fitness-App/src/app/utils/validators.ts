export function weightValidator(x: string, y: string, z: string) {
    // Regular expression to check if the input contains only numeric characters
    const numericRegex = /^[0-9]+$/;

    if (x.length > 3 || y.length > 3 || z.length > 3) {
        return false;
    }

    // Check if the input contains only numeric characters
    if (!numericRegex.test(x) || !numericRegex.test(y) || !numericRegex.test(z)) {
        return false;
    }

    if (Number(x) <= 0 || Number(y) <= 0 || Number(z) <= 0) {
        return false;
    }

    return true; // Validation passed, all inputs are valid numbers
}

export function routineValidator(x: string, y: string, z: string) {
    // Regular expression to check if the input contains only numeric characters
    const numericRegex = /^[0-9]+$/;

    if (x.length > 2 || y.length > 20 || z.length > 5) {
        return false;
    }

    // Check if the input contains only numeric characters
    if (!numericRegex.test(x) || !numericRegex.test(z)) {
        return false;
    }

    if (Number(x) <= 0 || Number(x) > 16 ||  Number(z) <= 0 || Number(z) > 99999) {
        return false;
    }

    return true; // Validation passed, all inputs are valid numbers
}

export function nutritionValidator (x: string, y: string, z: string, a: string, b: string) {
    // Regular expression to check if the input contains only numeric characters
    const numericRegex = /^[0-9]+$/;

    if (x.length > 4 || y.length > 3 || z.length > 3 || a.length >  3 || b.length > 2) {
        return false;
    }

    // Check if the input contains only numeric characters
    if (!numericRegex.test(x) || !numericRegex.test(z)) {
        return false;
    }

    if (Number(x) <= 0 
    || Number(x) > 9999 
    || Number(y) <= 0 
    || Number(y) > 500
    || Number(z) <= 0
    || Number(z) > 500
    || Number(a) <= 0
    || Number(a) > 500
    || Number(b) <= 0
    || Number(b) > 15) {
        return false;
    }

    return true; // Validation passed, all inputs are valid numbers
}