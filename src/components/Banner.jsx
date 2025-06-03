import React from 'react';
import { motion } from "motion/react"
import team1 from "../assets/team/team1.jpg"
import team2 from "../assets/team/team2.jpg"

const Banner = () => {
    return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
        <motion.img
        animate = {{y: [200, 100, 200]}}
        transition={{duration: 5, repeat: Infinity}}
      src={team1}
      className="max-w-sm rounded-4xl border-l-4 border-b-4 border-blue-500 rounded-b-0 shadow-2xl "
    />
        <motion.img
        animate = {{x: [200, 100, 200]}}
        transition={{duration: 7,  delay: 5, repeat: Infinity}}
      src={team2}
      className="max-w-sm rounded-4xl border-l-4 border-b-4 border-blue-500 rounded-b-0 shadow-2xl "
    />
    </div>
    <div className='flex-1'>
      <motion.h1 initial= {{scale: 0}}
        animate = {{scale: 1, transition: {duration: 5}}}
      className="text-5xl font-bold">Latest Jobs for You</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;