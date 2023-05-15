import React, { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutsContext';

const WorkoutForm = () => {
    const {dispatch} = useWorkoutContext();
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad]= useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout ={title,reps,load};

        const response = await fetch("api/workouts",{
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await response.json();
        if(!response.ok){
            setError(json.err)
            setEmptyFields(json.emptyFields);
        }
        if(response.ok){
            setTitle("");
            setReps("");
            setLoad("");
            setError(null);
            setEmptyFields([]);
            console.log("new workout Added",json)
            dispatch({type: "CREATE_WORKOUT", payload: json})
        }
    }

  return (
    <form action="" onSubmit={handleSubmit} className='flex flex-col justify-evenly col-span-3 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-4 h-[400px]'>
        <p className='font-bold'>Set a new Workout</p>
        <label htmlFor="">Workout Title</label>
        <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title')?'border-red-600 border-solid border-2':'border-solid border-2 border-indigo-600'}
        />
        <label htmlFor="">Load (in KG):</label>
        <input 
            type="number" 
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            className={emptyFields.includes('load')?'border-red-600 border-solid border-2':'border-solid border-2 border-indigo-600'}
        />
        <label htmlFor="">Reps:</label>
        <input 
            type="number" 
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            className={emptyFields.includes('reps')?'border-red-600 border-solid border-2':'border-solid border-2 border-indigo-600'}
        />
        <button type="submit" className='bg-indigo-500 hover:bg-indigo-700 text-white text-sm font-bold py-2 px-4 rounded'>Add Workout</button>
        {error && <p>{error}</p>}
    </form>
  )
}

export default WorkoutForm