{
    const myButton: HTMLButtonElement | null = document.querySelector("button");

    myButton?.addEventListener("click", (event: MouseEvent) => {})

    const myInput: HTMLInputElement | null  = document.querySelector("input");

    myInput?.addEventListener("dragstart",(event: DragEvent) => {})
}
