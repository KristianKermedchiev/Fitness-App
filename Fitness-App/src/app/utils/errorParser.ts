export function errorParser (value: string): string{
    let parsedError = '';
    switch(value){
        case 'Firebase: Error (auth/wrong-password).': 
        parsedError = 'Incorrect Password';
            break;
        case 'Firebase: Error (auth/invalid-email).':
            parsedError = 'Invalid Email';
            break;
        case 'Firebase: Error (auth/email-already-in-use).':
            parsedError = 'Email is already taken';
            break;
        case 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).':
            parsedError = 'Invalid Email';
            break;
        case 'Firebase: The email address is badly formatted.':
            parsedError = 'Please provide a valid email';
            break;
        case 'Firebase: The email address is badly formatted. (auth/invalid-email). FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email).':
            parsedError = 'Please provide a valid email';
            break;
        default: 
        parsedError = 'Something went wrong';
            break;
    }

    return parsedError;
}