class CheckingAccount extends Account {
    //constructor
    constructor(number) {
        super(number);
        this.overdraft_limit = 0;
    }

    setOverdraft_limit(limit) {
        this.overdraft_limit = limit;
    }

    getOverdraft_limit() {
        return this.overdraft_limit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance + this.getOverdraft_limit())) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance + ": overdraft_limit " + this.overdraft_limit;
    }

}


