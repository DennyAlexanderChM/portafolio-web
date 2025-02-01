import React from 'react'
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Desarrollador Web", "Diseñador UI/UX", "Freelancer"],
        autoStart: true,
        loop: true,
        delay: 90,
        deleteSpeed: 90,
      }}
      
    />
  )
}

export default Type