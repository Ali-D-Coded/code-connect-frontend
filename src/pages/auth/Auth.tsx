import React from "react";
import Register from "../../components/Register";
import { Tabs } from "antd";
import "./auth.css";
import Login from "../../components/Login";

const onChange = (key: string) => {
  console.log(key);
};

export default function Auth() {
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="h-[80%] w-[80%]  flex justify-center">
        <Tabs onChange={onChange} className="w-[100%]">
          <Tabs.TabPane
            tab="Register"
            key="2"
            className="flex justify-center p-10"
          >
            <Register />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Login"
            key="1"
            className="flex justify-center p-10"
          >
            <Login />
          </Tabs.TabPane>
        </Tabs>
      </main>
    </div>
  );
}
