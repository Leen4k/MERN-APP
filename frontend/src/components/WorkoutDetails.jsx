import React from 'react'
import{BiTrash} from 'react-icons/bi'
import { useWorkoutContext } from '../hooks/useWorkoutsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow';



const WorkoutDetails = ({workout}) => {

  const {dispatch} = useWorkoutContext();

  const handleClick = async () => {
    const data = await fetch("/api/workouts/"+workout._id,{method: 'DELETE'})
    const res = await data.json()

    if(data.ok){
      dispatch({type:"DELETE_WORKOUT", payload: res})
    }
  }

  return (
    <div className='shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 relative'>
        <p className='font-bold text-indigo-500 text-xl my-4'>{workout.title}</p>
        <p><span className='font-bold'>reps: </span>{workout.reps}</p>
        <p><span className='font-bold'>load: </span>{workout.load}</p>
        <p><span className="font-bold">created: </span>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
        {/* <p><span className="font-bold">updatedAt: </span>{workout.updatedAt}</p> */}
        <button onClick={handleClick} className='inline-flex absolute right-4 top-8 text-indigo-400 text-xl cursor-pointer'><BiTrash /></button>
    </div>
  )
}

export default WorkoutDetails