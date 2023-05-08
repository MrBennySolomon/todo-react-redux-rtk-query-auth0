import { useDispatch, useSelector } from 'react-redux';
import { completeTask, updateTask } from '../redux/features/task.slice';
import sanitizeHtml from 'sanitize-html';
import { useLazyGetEmojiQuery } from '../redux/features/emoji.slice'

export default function Read() {
    const dispatch = useDispatch();
    const [trigger, result, lastPromiseInfo] = useLazyGetEmojiQuery();
    // console.log('lastPromiseInfo', lastPromiseInfo);
    // console.log('result', result);
    // console.log('trigger', trigger)
    const tasks = useSelector((state) => {
        return state.tasks;
    });
    return (<div>
        <h1>read page</h1>
        <h4>tasks:</h4>
        <div>{tasks.map(task => {
            return <div key={task.name} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ textDecoration: !task.isComplete ? 'none' : 'line-through' }}>name: {task.name}</div>
                <div>details: {task.details}</div>
                <span role='img' dangerouslySetInnerHTML={{ __html: sanitizeHtml(task.emoji) }}></span>
                <div style={{ display: 'flex', margin: 'auto' }}>
                    <label htmlFor="isComplete">Is Done?</label>
                    <input type="checkbox" name="isComplete" id="isComplete" checked={task.isComplete} onChange={async () => {
                        const newRes = await trigger();
                        const updatedTask = { ...task, emoji: newRes.data.htmlCode[0] };
                        dispatch(updateTask(updatedTask))
                        dispatch(completeTask({ name: task.name }));

                    }} />
                </div>
                <hr />
            </div>
        })}</div>
    </div>);
}
