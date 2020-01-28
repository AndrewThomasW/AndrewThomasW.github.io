'use strict';

class SavingsAccount extends Account {
    //constructor
    constructor(number) {
        super(number); // the account number
        this._interest = 0;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(newInterest) {
        this._interest = newInterest;
    }

    addInterest() {
        let interestAmount = this.getBalance() * (this.getInterest() / 100);
        this.deposit(interestAmount);

    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }
}

