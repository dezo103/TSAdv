{
    const API_URL: string = "https://jsonplaceholder.typicode.com/todos/1";

    interface ITodo {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
}

    const fetchTodos: ()  => Promise<void> = async () => {
        try {
            const res: Response = await fetch(API_URL)
            const data: ITodo = await res.json()
        } catch (e:unknown) {
            console.error(e instanceof Error && e.message);
        }
    }


}
