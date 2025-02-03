import React from "react";


const TimeBasedGreeting = () => {
  const currentHour = new Date().getHours();
  let greeting = "Good Morning!";
  if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon!";
  } else if (currentHour >= 18) {
    greeting = "Good Evening!";
  }

  return (
    <div className="text-center text-white font-bold text-3xl mt-12 mb-8">
      {greeting} Welcome to Nimbus Coffee!
    </div>
  );
};


export default TimeBasedGreeting;
