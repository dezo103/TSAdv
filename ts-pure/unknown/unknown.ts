const anyValue: unknown = 123 // unknown Говорит нам о том, что все же надо проверить тип

if (typeof anyValue === "string") {
    console.log(anyValue.length)
}
