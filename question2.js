function processLoanApplications(creditScores) {
   
    let eligibleCount = 0;
    let rejectedCount = 0;
    let bestScore = 0;
    let  sum = 0;
    
     

    for ( let i = 0; i < creditScores.length; i++) {

        const score = creditScores[i];

        if (score >= 700) {
            eligibleCount++; // 1+1+1+1+1
        }

        if (score < 600) {
            rejectedCount++;  // 1+1+1+1
        }

        sum += score;
         
    }



    let interestRate; // initialization

    if (sum % 2 === 0) {
        interestRate = 5;
    } else {
        interestRate = 10;
    }

    return `Eligible: ${eligibleCount}, Rejected: ${rejectedCount}, Best Score: ${bestScore}, Interest Rate: ${interestRate}%`;
}

console.log(processLoanApplications([750, 680, 590, 720, 610]));