namespace MathUtils {
    export function add(a: number, b: number): number { // нужно импортировать для доступности из внескоуповой области
        return a + b;
    }

    export function substract(a: number, b: number): number {
        return a - b;
    }
}

const sum = MathUtils.add(1,3)
const diff = MathUtils.substract(1,3)

// Но ES-модули предпочтительнее чем namespaces
