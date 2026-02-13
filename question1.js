function atmTransaction(transactionType, amount, balance) {

    let newBalance = balance;
    let message = "";

    if (transactionType === "Withdrawal") {

        if (amount <= 0) {
            return "Invalid Amount";
        }

        if (amount > balance) {
            return "Insufficient Funds";
        }

        newBalance = balance - amount;
        message = "Withdrawal Successful. New Balance: " + newBalance;

    } 
    else if (transactionType === "Deposit") {

        if (amount <= 0) {
            return "Invalid Amount";
        }

        newBalance = balance + amount;
        message = "Deposit Successful. New Balance: " + newBalance;

    } 
    else if (transactionType === "Check Balance") {

        message = "Current Balance: " + balance;
        newBalance = balance;

    } 
    else {
        return "Invalid Transaction Type";
    }

    if (newBalance > 10000) {
        message += " (VIP Status)";
    }

    if (newBalance === 0) {
        message += " (Account Empty)";
    }

    return message;
}

console.log(atmTransaction("Deposit", 12000, 0));

// using switch case

function atmTransaction(transactionType, amount, balance) {

    let newBalance = balance;
    let message = "";

    switch (transactionType) {

        case "Withdrawal":
            if (amount <= 0) {
                return "Invalid Amount";
            }

            if (amount > balance) {
                return "Insufficient Funds";
            }

            newBalance = balance - amount;
            message = "Withdrawal Successful. New Balance: " + newBalance;
            break;


        case "Deposit":
            if (amount <= 0) {
                return "Invalid Amount";
            }

            newBalance = balance + amount;
            message = "Deposit Successful. New Balance: " + newBalance;
            break;


        case "Check Balance":
            message = "Current Balance: " + balance;
            break;


        default:
            return "Invalid Transaction Type";
    }

    // VIP & Account Empty logic
    if (newBalance > 10000) {
        message += " (VIP Status)";
    }

    if (newBalance === 0) {
        message += " (Account Empty)";
    }

    return message;
}
