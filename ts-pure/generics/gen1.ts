interface IBox<T> {
    value: T;
}

const numberBox: IBox<number> = {
    value: 5,
}

const stringBox: IBox<string> = {
    value: "efgf"
}

type Pair<T, U> = {
    first: T,
    second: U,
}

const pair: Pair<string, number> = {
    first: 'sdfsd',
    second: 567
}
