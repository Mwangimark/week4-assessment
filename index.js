// Banking System
class BankAccount {
    constructor(AccountNumber, accountHolder, balance) {
        this._accountNumber = AccountNumber
        this._accountHolder = accountHolder
        this._balance = balance
    }

    getaccountNumber() {
        return this._accountNumber;
    }

    getaccountHolder() {
        return this._accountHolder;
    }

    getbalance() {
        return this._balance;
    }

    deposit(amount) {
        this.balance = + amount
        console.log("You have deposited  " + amount + "  in account number  " + this._accountNumber+ "  balance is  "+this._balance)
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("you need to put a number greater than 0")
        }
        else if (amount <= this.balance) {
            this._balance -= amount
            console.log("you have withdraw  " + amount + "  your balance is  " + this._balance)
        } else if (amount > this._balance) {
            console.log("you need to put a lower amount from your balance")
        }
    }
}

class SavingsAccount extends BankAccount{
    constructor(AccountNumber, accountHolder, balance,interestRate){
        super(AccountNumber, accountHolder, balance,interestRate)
        this._interestRate = interestRate
    }
     calculateInterest(){
        const interestamount = this._balance* this._interestRate
        console.log("Interst rate for Account Number  "+ this._accountNumber + "  is  "+ interestamount)
        return interestamount
    }
}

class CheckingAccount extends BankAccount{
    constructor(AccountNumber, accountHolder, balance,overDraftLimit){
       super(AccountNumber, accountHolder, balance,interestRate)
       this._overDraftLimit = overDraftLimit
    }

     withdraw(amount){
        if(amount<= this._balance){
            console.log("Withdraw" +amount+ "from Account Number"+this._accountNumber)
        }
        else if (amount<= this._balance+this._overDraftLimit){
            console.log("Withdraw" +amount+ "(including overdraft) from Account Number"+this._accountNumber)
        }else if(amount> this._balance+ this._overDraftLimit){
            console.log("You cannot withdraw, withdraw amount less than"+(this._balance+this._overDraftLimit))
        }
    }
}

// ============ Examples to Use================

const Mark = new SavingsAccount(1234,"Mark",5000,0.2)
console.log(Mark.getaccountNumber())
console.log(Mark.getaccountHolder())
console.log(Mark.getbalance())
console.log(Mark.calculateInterest())
console.log(Mark.deposit(5000))
console.log(Mark.withdraw(2000))
console.log(Mark._balance)


