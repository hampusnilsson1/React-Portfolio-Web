import React from "react";
import hampusimg from "../assets/hampusimg.jpg";

function About() {
  return (
    <section className="mb-48">
      <div className="flex justify-center mt-24 py-10 mx-auto mx-32 xl:mx-0">
        <div className="mr-12 lg:mr-32 my-auto pb-16">
          <h1 className="text-green-300 text-4xl font-bold mb-2">About me</h1>
          <p className="text-wrap w-[300px] xl:w-[500px]">
            Hello, I’m Hampus Nilsson, a software developer passionate about
            technology and bringing ideas to life through programming.
            Proficient in Java, Python, C#, and frontend development with HTML,
            CSS, and JavaScript, I’ve built everything from AI-powered apps to
            engaging games in Unity. When I’m not coding, you’ll find me at the
            gym, lifting weights and challenging myself to improve every day.
          </p>
        </div>
        <div className="w-[460px] h-[460px] flex justify-center items-center">
          <img
            src={hampusimg}
            alt="Profile Picture"
            className="rounded-full shadow-2xl my-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
