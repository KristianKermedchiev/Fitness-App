export function errorParser(value: string): string {
    let parsedError = '';
    switch (value) {
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
        case 'Error: Firebase: Password should be at least 6 characters (auth/weak-password).':
            parsedError = 'Password must be at least 6 characters long.'
            break;
        case 'FirebaseError: Firebase: The email address is already in use by another account. (auth/email-already-in-use).':
            parsedError = 'Email is already in use.'
            break;
        default:
            parsedError = 'Something went wrong';
            break;
    }
    return parsedError;
}