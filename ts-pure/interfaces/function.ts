function greet(name: string): string {
    return `${name} is mine`
}

function logMessage(msg: string): void {
    console.log(msg)
}

function calculateSum(a:number, b:number):number {
    return a+b
}

function createGreeting(name: string, greeting?: string): string {
    return name + (greeting ? " " + greeting : "")
}

const multiply = (a: number, b: number): number => a * b
