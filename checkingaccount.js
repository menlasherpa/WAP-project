class CheckingAccount extends Account {

    constructor(number, overDraftLimit) {
        super(number);
        this._overDraftLimit = overDraftLimit;
    }

    getOverDraftLimit() {
        return this._overDraftLimit;
    }

    setOverDraftLimit(overDraftLimit) {
        this._overDraftLimit = overDraftLimit;
    }

    withdraw(amount) {
        if (amount > (this._overDraftLimit + this._balance)) {
            throw new RangeError("Withdraw amount has crossed the over draft limit");
        }
        this._balance -= amount;
    }

    toString() {
        return "Account No: " + this.getNumber() + ", Balance: " + this._balance + ", OverDraftAmount: " + this._overDraftLimit;
    }

    endOfMonth() {
        if(this._balance < 0){
            return "Warning, low balance CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this._overDraftLimit;
        }
        return "";
    }

}
