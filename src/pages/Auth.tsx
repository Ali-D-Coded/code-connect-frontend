import React from "react";
import Register from "../components/Register";

export default function Auth() {
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="bg-blue-400 h-[80%] w-[80%]">
        <Register />
      </main>
    </div>
  );
}
