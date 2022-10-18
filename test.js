describe("Account : getNumber", function () {
    it("takes no arguments and returns number of an account",
        function () {
            assert.equal(12345, new Account(12345).getNumber());
        });
});
describe("Account : getBalance", function () {
    it("takes no arguments and returns balance of an account",
        function () {
            assert.equal(0.0, new Account(12345).getBalance());
        });
});

describe("Account : deposit", function () {
    it("takes a -ve amount and generates range error",
        function () {
            try{
                new Account(12345).deposit(-1000);
            }
            catch(e){
                assert.equal('Deposit amount has to be greater than zero', e.message);
            }
        });

    it("takes valid amount and deposits it on an account",
        function () {
            let acc = new Account(12345);
            acc.deposit(2000);
            assert.equal(2000, acc.getBalance());
        });
});
describe("Account : withdraw", function () {
    it("takes a -ve amount and generates range error",
        function () {
            try{
                new Account(12345).withdraw(-1000);
            }
            catch(e){
                assert.equal('Withdraw amount has to be greater than zero', e.message);
            }
        });
    it("takes a insufficient fund and generates insufficnent range error",
        function () {
            try{
                let acc = new Account(12345);
                acc.deposit(1000);
                acc.withdraw(2000);
            }
            catch(e){
                assert.equal('Insufficient funds', e.message);
            }
        });
    it("takes valid amount and withdraw it from on an account",
        function () {
            let acc = new Account(12345);
            acc.deposit(2000);
            acc.withdraw(1200);
            assert.equal(800, acc.getBalance());
        });
});
describe("Account : toString", function () {
    it("takes no arguments and returns a string of account description",
        function () {
            let acc = new Account(12345);
            acc.deposit(2000);
            assert.equal("Account 12345: balance 2000", acc.toString());
        });
});

// probmem 2 a) tests end


// probmem 2 b) tests

describe("SavingsAccount : getInterest", function () {
    it("takes no arguments and returns interest rate of a Savings Account",
        function () {
            let savAcc = new SavingsAccount(12345, 12);
            assert.equal(12, savAcc.getInterest());
        });
});
describe("SavingsAccount : setInterest", function () {
    it("takes interest percentage and sets a saving account interest",
        function () {
            let savAcc = new SavingsAccount(12345, 12);
            savAcc.setInterest(15);
            assert.equal(15, savAcc.getInterest());
        });
});
describe("SavingsAccount : addInterest", function () {
    it("takes no arguments and calculates and updates the balance after adding interest",
        function () {
            let savAcc = new SavingsAccount(12345, 10);
            savAcc.deposit(2000);
            savAcc.addInterest();
            assert.equal(2200, savAcc.getBalance());
        });
});
describe("SavingsAccount : toString", function () {
    it("takes no arguments and returns a string of saving account description",
        function () {
            let savAcc = new SavingsAccount(12345, 10);
            savAcc.deposit(2000);
            assert.equal("Account No: 12345, Balance: 2000, Interest: 10", savAcc.toString());
        });
});

// probmem 2 b) tests end

// probmem 2 c) tests

describe("CheckingAccount : getOverDraftLimit", function () {
    it("takes no arguments and returns over draft limit of a checking account",
        function () {
            let chkAcc = new CheckingAccount(12345, 1000);
            assert.equal(1000, chkAcc.getOverDraftLimit());
        });
});
describe("CheckingAccount : setOverDraftLimit", function () {
    it("takes over draft limit and sets a checking account over draft limit",
        function () {
            let chkAcc = new CheckingAccount(12345, 1000);
            chkAcc.setOverDraftLimit(1500);
            assert.equal(1500, chkAcc.getOverDraftLimit());
        });
});
describe("CheckingAccount : withdraw", function () {
    it("takes a exceeded overdraft amount and generates range error",
        function () {
            try{
                let chkAcc = new CheckingAccount(12345, 1000);
                chkAcc.deposit(200);
                chkAcc.withdraw(1500);
            }
            catch(e){
                assert.equal('Withdraw amount has crossed the over draft limit', e.message);
            }
        });
    it("takes valid amount and withdraw it from on an account",
        function () {
            let chkAcc = new CheckingAccount(12345, 1000);
            chkAcc.withdraw(800);
            assert.equal(-800, chkAcc.getBalance());
        });
});
describe("CheckingAccount : toString", function () {
    it("takes no arguments and returns a string of checking account description",
        function () {
            let chkAcc = new CheckingAccount(12345, 1000);
            chkAcc.deposit(500);
            assert.equal("Account No: 12345, Balance: 500, OverDraftAmount: 1000", chkAcc.toString());
        });
});

// probmem 2 c) tests end







// probmem 2 d) tests

describe("Bank : addAccount", function () {
    it("takes no arguments and adds an account to account list and returns number of accounts created",
        function () {
            let bank = new Bank();
            bank.addAccount();
            assert.equal(2, bank.addAccount());
        });
});
describe("Bank : addSavingAccount", function () {
    it("takes interest and adds saving account to account list and returns number of accounts created",
        function () {
            let bank = new Bank();
            bank.addAccount();
            bank.addSavingAccount(10);
            assert.equal(3, bank.addSavingAccount(1200));
        });
});
describe("Bank : addCheckingAccount", function () {
    it("takes overdraft and adds checking account to account list and returns number of accounts created",
        function () {
            let bank = new Bank();
            bank.addAccount();
            bank.addSavingAccount(10);
            bank.addCheckingAccount(10000);
            assert.equal(4, bank.addCheckingAccount(12000));
        });
});
describe("Bank : closeAccount", function () {
    it("takes an account number and removes an object of with that account number",
        function () {
            let bank = new Bank();
            bank.addAccount();
            bank.addSavingAccount(10);
            bank.addCheckingAccount(10000);
            bank.closeAccount(11);
            // console.log(bank.accountList);
            assert.deepEqual([{_number: 10, _balance:0}, {_number:12, _balance: 0, _overDraftLimit:10000}], bank.accountList);
        });
});
describe("Bank : accountReport", function () {
    it("takes no arguments and returns a string of list of all the accounts",
        function () {
            let bank = new Bank();
            bank.addAccount();
            bank.addSavingAccount(10);
            // bank.accountList[bank.accountList.length-1].deposit();
            bank.addCheckingAccount(10000);
            // console.log(bank.accountReport());
            assert.equal("Account 13: balance 0\nAccount No: 14, Balance: 0, Interest: 10\nAccount No: 15, Balance: 0, OverDraftAmount: 10000", bank.accountReport());
        });
});

// probmem 2 d) tests end


// probmem 2 e) tests

describe("Bank : endOfMonth", function () {
    it("takes no arguments and returns a string of output of endOfMonth() function from all the objects",
        function () {
            let bank = new Bank();
            bank.addAccount();
            bank.addSavingAccount(10);
            bank.accountList[bank.accountList.length-1].deposit(1000);
            bank.addCheckingAccount(10000);
            bank.accountList[bank.accountList.length-1].withdraw(2000);
            // console.log(bank.endOfMonth());
            assert.equal("\n,Interest added SavingsAccount 17: balance: 1100 interest: 10\n,Warning, low balance CheckingAccount 18: balance: -2000 overdraft limit: 10000\n", bank.endOfMonth());
        });
});
