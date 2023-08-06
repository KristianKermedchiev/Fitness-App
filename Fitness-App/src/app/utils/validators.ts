export function weightValidator(x: string, y: string, z: string) {
    const numericRegex = /^[0-9]+$/;

    if (x.length > 3 || y.length > 3 || z.length > 3) {
        return false;
    }

    if (!numericRegex.test(x) || !numericRegex.test(y) || !numericRegex.test(z)) {
        return false;
    }

    if (Number(x) <= 0 || Number(y) <= 0 || Number(z) <= 0) {
        return false;
    }

    return true; 
}

export function routineValidator(x: string, y: string, z: string) {
    const numericRegex = /^[0-9]+$/;

    if (x.length > 2 || y.length > 20 || z.length > 5) {
        return false;
    }

    if (!numericRegex.test(x) || !numericRegex.test(z)) {
        return false;
    }

    if (Number(x) <= 0 || Number(x) > 16 || Number(z) <= 0 || Number(z) > 99999) {
        return false;
    }

    return true; 
}

export function nutritionValidator(x: string, y: string, z: string, a: string, b: string) {
    const numericRegex = /^[0-9]+$/;

    if (x.length > 4 || y.length > 3 || z.length > 3 || a.length > 3 || b.length > 2) {
        return false;
    }

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

    return true; 
}

export function calculatorValidator(age: number, sex: string, height: number, weight: number, activiy: string) {
    if (sex === '' || activiy === '' || !age || !height || !weight) {
        return false;
    }

    if (Number(age) <= 0
        || Number(age) > 99
        || Number(height) <= 0
        || Number(height) > 250
        || Number(weight) <= 0
        || Number(weight) > 500) {
        return false;
    }

    return true; 

}

export function profileValidator(firstName: string, lastName: string, email: string, height: string, age: string){
    if(firstName.length > 20 || lastName.length > 20 || email.length > 30 || height.length > 4 || age.length > 3){
        return false;
    }

    return true; 
}

export function recipeValidator (name: string, difficulty: string, spicy: string, vegan: string, picture: string, description: string){
    
    if (!name || !difficulty || !spicy || !vegan || !picture ||!description) {
        return false;
    }

    if(name.length > 20 || description.length > 999){
        return false;
    }

    return true; 
}