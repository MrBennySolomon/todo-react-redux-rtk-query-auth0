export default function Update() {
    return <div>
        <h1>update task</h1>
        <form action="#">
            <label htmlFor="taskName">Name</label>
            <input type="text" name='taskName' />
            <label htmlFor="taskDetails">Details</label>
            <input type="text" name='taskDetails' />
            <button>update</button>
        </form>
    </div>;
}
