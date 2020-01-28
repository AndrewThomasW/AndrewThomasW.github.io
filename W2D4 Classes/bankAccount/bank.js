class Bank {
    static nextNumber = 64001;
    //constructor
    constructor() {
        this.accounts = [];
    }

    addAccount() {
        let accNo = Bank.nextNumber;
        let account = new Account(accNo + '');
        Bank.nextNumber++;
        this.accounts.push(account);
        return (account.getNumber());
    }

    addSavingsAccount(interest) {
        let accNo = Bank.nextNumber;
        let saving = new SavingsAccount(accNo + '');
        Bank.nextNumber++;
        saving.setInterest(interest);
        this.accounts.push(saving);
        return (saving.getNumber());
    }

    addCheckingAccount(ovedrdraft) {
        let accNo = Bank.nextNumber;
        let checking = new CheckingAccount(accNo + '');
        Bank.nextNumber++;
        checking.setOverdraft_limit(ovedrdraft);
        this.accounts.push(checking);
        return (checking.getNumber());
    }

    closeAccount(number) {

        for (const value of this.accounts) {
            if (value.getNumber() === number + '') {
                const index = this.accounts.indexOf(value);
                this.accounts.splice(index, 1);
            }
        }
    }

    accountReport() {
        let string = '';
        for (let i = 0; i < this.accounts.length; i++) {
            string += this.accounts[i].toString() + '\n';
        }
        return string;
    }


}

// let barclays = new Bank();
// barclays.addAccount();
// barclays.addSavingsAccount(10);
// barclays.addCheckingAccount(1000);
// console.log(barclays.accountReport());
// barclays.closeAccount(100110542);
// console.log(barclays.accountReport());



