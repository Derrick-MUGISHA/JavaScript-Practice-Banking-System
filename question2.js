function processLoanApplications(creditScores) {

    let eligibleCount = 0;
    let rejectedCount = 0;
    let bestScore = creditScores[0];
    let sum = 0;

    for (let i = 0; i < creditScores.length; i++) {

        const score = creditScores[i];

        if (score > 700) {
            eligibleCount++;
        }

        if (score < 600) {
            rejectedCount++;
        }


        if (score > bestScore) {
            bestScore = score;
        }


        sum += score;
    }

   
    let interestRate;

    if (sum % 2 === 0) {
        interestRate = 5;
    } else {
        interestRate = 4;
    }

    return `Eligible: ${eligibleCount}, Rejected: ${rejectedCount}, Best Score: ${bestScore}, Interest Rate: ${interestRate}%`;
}

console.log(processLoanApplications([650, 800, 500, 720, 95]));
