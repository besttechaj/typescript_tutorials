enum paymentStatus {
  pending,
  completed,
  failed,
}

const checkPaymentStatus = (status: paymentStatus) => {
  switch (status) {
    //cases
    case paymentStatus.pending:
      console.log(`payment is pending`);
      break;

    case paymentStatus.completed:
      console.log(`payment is completed`);
      break;

    case paymentStatus.failed:
      console.log(`payment is failed`);
      break;

    default:
      break;
  }
};

checkPaymentStatus(paymentStatus.pending);
checkPaymentStatus(paymentStatus.completed);
checkPaymentStatus(paymentStatus.failed);
