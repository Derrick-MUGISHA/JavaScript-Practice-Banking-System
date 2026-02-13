function validateBankPassword(password) {

    if (password.length < 8) {
        return "Access Denied";
    }

    if (password.toLowerCase().includes("password")) {
        return "Access Denied";
    }

    const vowels = "aeiou";
    let hasVowel = false;

    for (let i = 0; i < password.length; i++) {
        if (vowels.includes(password[i].toLowerCase())) {
            hasVowel = true;
            break;
        }
    }

    if (!hasVowel) {
        return "Access Denied";
    }

    return "Access Granted";
}

console.log(validateBankPassword("SecureBank1")); 
console.log(validateBankPassword("password123")); 
console.log(validateBankPassword("bcdfghjk"));    
