'use client'

import Welcome from "./Welcome.jsx"
import Leaderboard from "./Leaderboard.jsx"
import './globals.css'

export default function Home() {

  

  return (
    <>
        <Welcome hidden="" userInfo="" height="h-[80vh]"/>
      <section className="section-separator"></section>
      <Leaderboard hidden=""/>
    </>
  );
}