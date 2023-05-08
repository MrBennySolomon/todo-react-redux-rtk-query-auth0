import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/features/task.slice';
import { useGetEmojiQuery } from '../redux/features/emoji.slice'

export default function Create() {
    const [taskName, setTaskName] = useState('');
    const [taskDetails, setTaskDetails] = useState('');

    const f = useRef(null);
    const dispatch = useDispatch();
    const { data, error, isLoading } = useGetEmojiQuery()

    return <div>
        <h1>create task</h1>
        <form ref={f} onSubmit={(e) => {
            e.preventDefault();
            dispatch(createTask({ name: taskName, details: taskDetails, isComplete: false, emoji: data ? data.htmlCode[0] : '' }));
            setTaskName('');
            setTaskDetails('');
            f.current.reset();
        }}>
            <label htmlFor="taskName">Name</label>
            <input value={taskName} type="text" name='taskName' onInput={(e) => {
                setTaskName(e.target.value);
            }} />
            <label htmlFor="taskDetails">Details</label>
            <input value={taskDetails} type="text" name='taskDetails' onInput={(e) => {
                setTaskDetails(e.target.value);
            }} />
            <div>{isLoading ? 'generating emoji' : ''}</div>
            <div>{error ? error : ''}</div>
            <button>create</button>
        </form>
    </div>;
}
