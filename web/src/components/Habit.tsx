interface HabitProps {
  completed: number
} 

export function Habit(props: HabitProps){
  return (
    <div className="bg-zinc-900 text-white rounded m-2 text-center flex items-center justify-center p-1">Habit{ props.completed }</div>
  )
}