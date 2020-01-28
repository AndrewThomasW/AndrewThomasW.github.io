'use strict';
//create account with number 1234
let account = new Account(1234);

describe("getNumber()", function () {

    //test account.getNumber()
    it("account.getNumber() returns 1234", function () {
        assert.equal(account.getNumber(), 1234);
    });
});

describe("getBalance()", function () {

    //test account.getBalance()
    it("account.getBalance returns 0", function () {
        assert.equal(account.getBalance(), 0);
    });
});

describe("deposit()", function () {

    //test account.getBalance() after depositing 5000
    it("account.getBalance returns 5000", function () {
        account.deposit(5000);
        assert.equal(account.getBalance(), 5000);
    });
});

describe("withdraw()", function () {

    //test account.getBalance() after withdrawing 3000
    it("account.getBalance returns 2000", function () {
        account.withdraw(3000);
        assert.equal(account.getBalance(), 2000);
    });
});

describe("toString()", function () {

    //test account.getBalance() after withdrawing 3000
    it("account.getBalance returns Account 1234: balance 2000", function () {
        console.log(account.toString());
        assert.equal(account.toString(), 'Account 1234: balance 2000');
    });
});

//SAVINGS ACCOUNT

let mysavings = new SavingsAccount('0141075400');
mysavings.deposit(135000);
mysavings.setInterest(10);
mysavings.addInterest();


describe('setInterest() and getInterest()', function () {
    it('Expected output of getInterest() after setInterest(10) is 10', function () {
        assert.equal(mysavings.getInterest(), 10);
    })
});

describe('addInterest()', function () {
    it('Expected output of getBalance() after smysavings.addInterest(); is 148500', function () {
        assert.equal(mysavings.getBalance(), 148500);
    })
});

describe('savings toString()', function () {
    it('Expected output of toString() after call to mysavings.toString(); is Account 0141075400: balance 148500: interest 10', function () {
        assert.equal(mysavings.toString(), 'Account 0141075400: balance 148500: interest 10');
    })
});


//CHECKING ACCOUNT


let mychecking = new CheckingAccount('110110075');
mychecking.setOverdraft_limit(10000);
mychecking.deposit(10000);
mychecking.withdraw(20000);



describe("withdraw() and setOverdraft_limit()  ", function () {
    it("'Expected output of mychecking.getBalance() after mychecking.deposit(10000) and mychecking.withdraw(20000) is -10000'", function () {
        assert.equal(mychecking.getBalance(), -10000);
    })
});

describe(" checking toString()  ", function () {
    it("'Expected output of  mychecking.toString() is Account 110110075: balance -10000: overdraft_limit 10000", function () {
        assert.equal(mychecking.toString(), 'Account 110110075: balance -10000: overdraft_limit 10000');
    })
});


// BANK
//create a bank object barclays
let barclays = new Bank();

describe("addAccount()", function () {

    //test barclays.addAccount()
    it("addAccount() returns 64001", function () {
        assert.equal(barclays.addAccount(), 64001);
    });
});

describe("addSavingsAccount(10)", function () {

    //test barclays.addSavingsAccount(10)
    it("addSavingsAccount(10) returns 64002", function () {
        assert.equal(barclays.addSavingsAccount(10), 64002);
    });
});

describe("addCheckingAccount(1000)", function () {

    //test barclays.addCheckingAccount(1000)
    it("addCheckingAccount(1000) returns 64003", function () {
        assert.equal(barclays.addCheckingAccount(1000), 64003);
    });
});

describe("closeAccount(64002) and accountReport()", function () {

    //test accountReport()
    it("closeAccount(64002) and toString() returns all accounts without 64002", function () {
        //closeAccount(64002)
        barclays.closeAccount(64002);
        assert.equal(barclays.accountReport(), "Account 64001: balance 0\nAccount 64003: balance 0: overdraft_limit 1000\n");
    });
});




