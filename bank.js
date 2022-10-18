class Bank {

    accountList = [];
    static nextNumber = 0;
    constructor() {}
    addAccount() {
        // debugger;
        this.accountList.push(new Account(++Bank.nextNumber));
        return this.accountList.length;
    }

    addSavingAccount(interest) {
        this.accountList.push(new SavingsAccount(++Bank.nextNumber, interest));
        return this.accountList.length;
    }

    addCheckingAccount(overDraftLimit) {
        this.accountList.push(new CheckingAccount(++Bank.nextNumber, overDraftLimit));
        return this.accountList.length;
    }

    closeAccount(number) {
        this.accountList = this.accountList.filter(acc => acc._number != number);
    }

    accountReport() {
        let accListStrArray = [];
        for(let acc of this.accountList){
            accListStrArray.push(acc.toString());
        }
        return accListStrArray.join("\n");
    }

    endOfMonth() {
        return this.accountList.map(acc => acc.endOfMonth()).map(str=> str + "\n").toString();
    }

}
