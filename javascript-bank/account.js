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

};
