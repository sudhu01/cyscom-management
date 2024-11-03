'use client'

import { SessionProvider } from "next-auth/react";
import { Chakra_Petch, Oswald } from "next/font/google"
import Table1 from "../../src/app/Table1"
import Table2 from "../../src/app/Table2"
import Table3 from "../../src/app/Table3"
import { createRoot } from 'react-dom/client'
import '../../src/app/globals.css'

const chakra = Chakra_Petch({
    weight: '700',
    subsets: ['latin']
})
const oswald = Oswald({
    subsets: ['latin'],
  })
   
function Leaderboard(){

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
            root.render(<section id='Leaderboard' className="bg-black  w-full h-[100vh]">
                <span className={`${chakra.className} text-white font-bold relative mx-16 top-64 text-6xl`}>LEADER</span>
                <br></br>
                <span className={`${chakra.className} text-white font-bold text-6xl absolute left-64 my-72`}>BOARD</span>
                <Table3 left="left-1/4"></Table3>
                <div className='bg-black inline-block p-2 relative left-1/2 border'>
                    <button type="button" onClick={display3} id="b3" className={`${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 4</button>
                    <button type="button" onClick={display2} id="b2" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 5</button>
                    <button type="button" onClick={display1} id="b1" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 6</button>
                </div>
            </section>)
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
            root.render(<section id='Leaderboard' className="bg-black  w-full h-[100vh]">
                <span className={`${chakra.className} text-white font-bold relative mx-16 top-64 text-6xl`}>LEADER</span>
                <br></br>
                <span className={`${chakra.className} text-white font-bold text-6xl absolute left-64 my-72`}>BOARD</span>
                <Table2 left="left-1/4"></Table2>
                <div className='bg-black inline-block p-2 relative left-1/2 border'>
                    <button type="button" onClick={display3} id="b3" className={`${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 4</button>
                    <button type="button" onClick={display2} id="b2" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 5</button>
                    <button type="button" onClick={display1} id="b1" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 6</button>
                </div>
            </section>)
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
            root.render(<section id='Leaderboard' className="bg-black  w-full h-[100vh]">
                <span className={`${chakra.className} text-white font-bold relative mx-16 top-64 text-6xl`}>LEADER</span>
                <br></br>
                <span className={`${chakra.className} text-white font-bold text-6xl absolute left-64 my-72`}>BOARD</span>
                <Table1 left="left-1/4"></Table1>
                <div className='bg-black inline-block p-2 relative left-1/2 border'>
                    <button type="button" onClick={display3} id="b3" className={`${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 4</button>
                    <button type="button" onClick={display2} id="b2" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 5</button>
                    <button type="button" onClick={display1} id="b1" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 6</button>
                </div>
            </section>)
          }

    }
    

    return(
        <div className="dashboard_body">
            <nav id="sidebar">
                <ul>
                    <l1>
                        <button id="toggle-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"/></svg>
                        </button>
                    </l1>
                    <l1 className="active">
                        <a href="http://localhost:3000/member/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                        <span>Home</span></a>
                    </l1>
                    <l1>
                        <a href="http://localhost:3000/member/leaderboard">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-200h160v-320H160v320Zm240 0h160v-560H400v560Zm240 0h160v-240H640v240ZM80-120v-480h240v-240h320v320h240v400H80Z"/></svg>
                        <span>Leaderboard</span></a>
                    </l1>
                    <l1>
                        <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m424-318 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm280-590q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/></svg>
                        <span>Contributions</span></a>
                    </l1>
                    <l1>
                        <button className="dropdown-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-360 280-560h400L480-360Z"/></svg>
                        <span>Tasks</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/></svg>
                        </button>
                        <ul className="sub-menu">
                            <l1><a href="">Pending</a></l1>
                            <l1><a href="">Completed</a></l1>
                        </ul>
                    </l1>
                </ul>
            </nav>
        <section id='Leaderboard' className="bg-black  w-full h-[100vh]">
            <span className={`${chakra.className} text-white font-bold relative mx-16 top-64 text-6xl`}>LEADER</span>
            <br></br>
            <span className={`${chakra.className} text-white font-bold text-6xl absolute left-64 my-72`}>BOARD</span>
            <Table1 left="left-1/4"></Table1>
            <div className='bg-black inline-block p-2 relative left-1/2 border'>
                <button type="button" onClick={display3} id="b3" className={`${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 4</button>
                <button type="button" onClick={display2} id="b2" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 5</button>
                <button type="button" onClick={display1} id="b1" className={` ${oswald.className} text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 hover:cursor-pointer overflow-hidden`}>Act 6</button>
            </div>
        </section>
        </div>
    )

}

export default Leaderboard