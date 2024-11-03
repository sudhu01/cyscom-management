'use client'

import { Chakra_Petch, Oswald } from "next/font/google"
import Table1 from "./Table1.jsx"
import Table2 from "./Table2.jsx"
import Table3 from "./Table3.jsx"
import { createRoot } from 'react-dom/client'
import './globals.css'

const chakra = Chakra_Petch({
    weight: '700',
    subsets: ['latin']
})
const oswald = Oswald({
    subsets: ['latin'],
  })
   
function Leaderboard(props){

    function display3(){
        const t1 = document.getElementById('t1')
        const t2 = document.getElementById('t2')
        if(t1){
            t1.remove()
        }
        if(t2){
            t2.remove()
        }
        
        
        const lb = document.getElementById('Leaderboard')
        if (lb) {
            const root = createRoot(lb);
            root.render(<><span className={`${chakra.className} text-white font-bold absolute inset-x-20 my-64 text-6xl`}>LEADER</span>
                <br></br>
                <span className={`${chakra.className} text-white font-bold text-6xl absolute inset-x-24 my-72`}>BOARD</span><Table3 left="left-1/3"/><div className='bg-[#001b42] inline-block p-2 relative -top-56 left-20 border'>
                <button type="button" onClick={display3} id="b3" className={`${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 4</button>
                <button type="button" onClick={display2} id="b2" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 5</button>
                <button type="button" onClick={display1} id="b1" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 6</button>
            </div></>)
          }

    }

    function display2(){
        const t1 = document.getElementById('t1')
        const t3 = document.getElementById('t3')
        if(t1){
            t1.remove()
        }
        if(t3){
            t3.remove()
        }
        
        
        const lb = document.getElementById('Leaderboard')
        if (lb) {
            const root = createRoot(lb);
            root.render(<><span className={`${chakra.className} text-white font-bold absolute inset-x-20 my-64 text-6xl`}>LEADER</span>
                <br></br>
                <span className={`${chakra.className} text-white font-bold text-6xl absolute inset-x-24 my-72`}>BOARD</span><Table2 left="left-1/3"/><div className='bg-[#001b42] inline-block p-2 relative -top-56 left-20 border'>
                <button type="button" onClick={display3} id="b3" className={`${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 4</button>
                <button type="button" onClick={display2} id="b2" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 5</button>
                <button type="button" onClick={display1} id="b1" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 6</button>
            </div></>)
          }

    }

    function display1(){
        const t3 = document.getElementById('t3')
        const t2 = document.getElementById('t2')
        if(t3){
            t3.remove()
        }
        if(t2){
            t2.remove()
        }
        
        
        const lb = document.getElementById('Leaderboard')
        if (lb) {
            const root = createRoot(lb);
            root.render(<><span className={`${chakra.className} text-white font-bold absolute inset-x-20 my-64 text-6xl`}>LEADER</span>
                <br></br>
                <span className={`${chakra.className} text-white font-bold text-6xl absolute inset-x-24 my-72`}>BOARD</span><Table1 left="left-1/3"/><div className='bg-[#001b42] inline-block p-2 relative -top-56 left-20 border'>
                <button type="button" onClick={display3} id="b3" className={`${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 4</button>
                <button type="button" onClick={display2} id="b2" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 5</button>
                <button type="button" onClick={display1} id="b1" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 6</button>
            </div></>)
          }

    }
    

    return(
        
        <section id='Leaderboard' className={`bg-[#001b42]  w-full h-[700px] ${props.hidden}`}>
            <span className={`${chakra.className} text-white font-bold absolute inset-x-20 my-64 text-6xl`}>LEADER</span>
            <br></br>
            <span className={`${chakra.className} text-white font-bold text-6xl absolute inset-x-24 my-72`}>BOARD</span>
            <Table1 left="left-1/3"></Table1>
            <div className='bg-[#001b42] inline-block p-2 relative -top-56 left-20 border'>
                <button type="button" onClick={display3} id="b3" className={`${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 4</button>
                <button type="button" onClick={display2} id="b2" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 5</button>
                <button type="button" onClick={display1} id="b1" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 6</button>
            </div>
        </section>
    )

}

export default Leaderboard