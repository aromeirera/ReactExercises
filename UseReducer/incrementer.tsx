//import { useReducer } from "react"
//const [count,dispatch]=(reducer,initialState)
// function reducer(state:number,action : any){
    
// }
export function Counter (){
return (
 <>
    <div className="flex justify-between bg-black text-amber-50 ">
        <h1 className="flex justify-center ">Counter</h1>
        <h2>0</h2>
        <div>
            <button className="text-3xl h-9 w-9 rounded-full text-blue-400 bg-gray-500">+</button>
            <button className="text-3xl h-9 w-9 rounded-full text-blue-400 bg-gray-500">-</button>
            <button className="text-3xl h-9 w-9 rounded-full text-blue-400 bg-gray-500">Reset</button>

        </div>
    </div>
 
 </>
)
}
