export default function Delete() {
    return <div>
        <h1>delete task</h1>
        <form action="#">
            <label htmlFor="taskName">Name</label>
            <input type="text" name='taskName' />
            <label htmlFor="id">id</label>
            <input type="number" name='id' />
            <button>delete</button>
        </form>
    </div>;
}
