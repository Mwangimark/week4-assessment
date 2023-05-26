// class BankAccount {
//     constructor(accountNumber, accountHolder, balance) {
//       this._accountNumber = accountNumber;
//       this._accountHolder = accountHolder;
//       this._balance = balance;
//     }
  
//     get accountNumber() {
//       return this._accountNumber;
//     }
  
//     get accountHolder() {
//       return this._accountHolder;
//     }
  
//     get balance() {
//       return this._balance;
//     }
  
    // deposit(amount) {
    //   this._balance += amount;
    //   console.log(`Deposited ${amount} into account ${this.accountNumber}`);
    // }
  
//     withdraw(amount) {
//       if (amount <= this._balance) {
//         this._balance -= amount;
//         console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
//       } else {
//         console.log(`Insufficient funds in account ${this.accountNumber}`);
//       }
//     }
//   }
  
//   class SavingsAccount extends BankAccount {
//     constructor(accountNumber, accountHolder, balance, interestRate) {
//       super(accountNumber, accountHolder, balance);
//       this._interestRate = interestRate;
//     }
  
//     calculateInterest() {
//       const interestAmount = this._balance * this._interestRate;
//       console.log(`Interest amount for account ${this.accountNumber}: ${interestAmount}`);
//       return interestAmount;
//     }
//   }
  
//   class CheckingAccount extends BankAccount {
//     constructor(accountNumber, accountHolder, balance, overdraftLimit) {
//       super(accountNumber, accountHolder, balance);
//       this._overdraftLimit = overdraftLimit;
//     }
  
//     withdraw(amount) {
//       if (amount <= this._balance) {
//         this._balance -= amount;
//         console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
//       } else if (amount <= this._balance + this._overdraftLimit) {
//         this._balance -= amount;
//         console.log(`Withdrawn ${amount} (including overdraft) from account ${this.accountNumber}`);
//       } else {
//         console.log(`Withdrawal amount exceeds overdraft limit for account ${this.accountNumber}`);
//       }
//     }
//   }
  
  // Example usage
//   const savingsAccount = new SavingsAccount("SA001", "John Doe", 5000, 0.05);
//   savingsAccount.getAccountNumber(); // SA001
//   savingsAccount.getAccountHolder(); // John Doe
//   savingsAccount.getBalance(); // 5000
//   savingsAccount.deposit(1000); // Deposited 1000 into account SA001
//   savingsAccount.withdraw(2000); // Withdrawn 2000 from account SA001
//   savingsAccount.calculateInterest(); // Interest amount for account SA001: 250
  
//   const checkingAccount = new CheckingAccount("CA001", "Jane Smith", 3000, 2000);
//   checkingAccount.getAccountNumber(); // CA001
//   checkingAccount.getAccountHolder(); // Jane Smith
//   checkingAccount.getBalance(); // 3000
//   checkingAccount.deposit(500); // Deposited 500 into account CA001
//   checkingAccount.withdraw(4000); // Withdrawn 4000 (including overdraft) from account CA001
  