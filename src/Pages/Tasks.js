import { faHouse } from "@fortawesome/free-solid-svg-icons"
import Title from "../Components/Title"
import Task from "../Components/Task"

const Tasks = () => {
    const task = { id: 1, title: ' ent using libraries like Redux or context API. ent using libraries like Redux or context API. ent using libraries like Redux or context API.', completed: false };
    const task2 = { id: 2, title: 'Learn React', completed: true };

    return (
        <div className="w-3/4 bg-zinc-800 m-4 rounded-xl p-10">
            <Title text="Tasks" icon={faHouse} color="text-red-500" />
            <Task task={task}/>
            <Task task={task2}/>
        </div>
    )
}

export default Tasks