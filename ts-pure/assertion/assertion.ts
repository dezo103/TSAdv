const someValue: any = "feirj er geirge"

const lengthVal: number = (<string>someValue).length

const lengthVal2: number = (someValue as string).length // предпочттельнее

// non nullable

const myElement: HTMLElement | null = document.getElementById("myElement")

myElement && (myElement.style.color = "red")
