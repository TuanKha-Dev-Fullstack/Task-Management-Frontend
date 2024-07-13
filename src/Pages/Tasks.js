import { faHouse } from "@fortawesome/free-solid-svg-icons"
import Title from "../Components/Title"

const Tasks = () => {
    return (
        <div className="w-3/4 bg-zinc-800 m-4 rounded-xl p-10">
            <Title text="Tasks" icon={faHouse} color="text-red-500" />
        </div>
    )
}

export default Tasks