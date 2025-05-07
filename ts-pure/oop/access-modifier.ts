class BankAccount {
    readonly id: number
    public accountNumber: string
    private balance: number
    protected owner: string

    constructor(id: number, accountNumber: string, owner: string) {
        this.id = id;
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = 0
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public withdraw(amount: number): boolean {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;

    }

    public getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(123, '233434', 'rtk')

account.deposit(1000)
console.log(account.getBalance())
account.withdraw(450)
console.log(account.getBalance())

// account.accountNumber - ok
// account.id - ok
// account.balance - not ok (private)
// account.owner  - not ok (protected)
