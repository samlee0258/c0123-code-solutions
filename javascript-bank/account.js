/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  } else {
    var deposit = new Transaction('deposit', amount);
    this.transactions.push(deposit);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  } else {
    var withdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawal);
    return true;
  }
};

Account.prototype.getBalance = function () {
  var totalDeposit = 0;
  var totalWithdrawal = 0;
  for (var index = 0; index < this.transactions.length; index++) {
    if (this.transactions.length < 0) {
      return 0;
    } else if (this.transactions[index].type === 'deposit') {
      totalDeposit += this.transactions[index].amount;
    } else if (this.transactions[index].type === 'withdrawal') {
      totalWithdrawal += this.transactions[index].amount;
    }
  }
  var balance = totalDeposit - totalWithdrawal;
  return balance;
};
