import React from 'react'
import {useEffect} from "react"
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutContext } from '../hooks/useWorkoutsContext';

const Home = () => {
  // const [workouts, setWorkouts] = useState([]);
  const  {workouts, dispatch} = useWorkoutContext();

  useEffect(()=>{
    const fetchData = async () => {
      const data = await fetch("/api/workouts");
      const res = await data.json();

      if (data.ok){
        // setWorkouts(res);
        dispatch({type: 'SET_WORKOUT', payload: res})
      } 
    }
    fetchData();
  },[dispatch])

  return (
    <div className='grid grid-cols-6 grid-flow-col gap-4'>
      <div className='flex flex-col flex-1 gap-4 col-span-3 transition-all'>
        {workouts && workouts.map((workout)=>(
          <WorkoutDetails key={workout._id} workout={workout} />
        ))

        }
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home