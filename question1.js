function atmTransaction(transactionType, amount, balance) {

    // Normalize input to avoid case problems
    transactionType = transactionType.trim().toLowerCase();

    let newBalance = balance;
    let message = "";

    switch (transactionType) {

        case "1":
            if (amount <= 0) {
                return "Invalid Amount";
            }

            if (amount > balance) {
                return "Insufficient Funds";
            }

            newBalance = balance - amount;
            message = "Withdrawal Successful. New Balance: " + newBalance;
            break;

        case "2":
            if (amount <= 0) {
                return "Invalid Amount";
            }

            newBalance = balance + amount;
            message = "Deposit Successful. New Balance: " + newBalance;
            break;

        case "3":
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


