/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (!Number.isInteger(balance) || balance <= 0) {
    return null;
  } else {
    var account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    var currentNumber = this.nextAccountNumber;
    this.nextAccountNumber++;
  }
  return currentNumber;
};

Bank.prototype.getAccount = function (number) {
  for (var index = 0; index < this.accounts.length; index++) {
    var accountNumber = this.accounts[index].number;
    var account = this.accounts[index];
    if (accountNumber === number) {
      return account;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (var index = 0; index < this.accounts.length; index++) {
    total += this.accounts[index].getBalance();
  }
  return total;
};
