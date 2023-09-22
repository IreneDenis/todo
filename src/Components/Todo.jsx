// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { TextInput } from "@mantine/core";
import { Button } from "primereact/button";
import YOU from "../assets/Images/YOU.jpg";
import { BackgroundImage } from "@mantine/core";
import Customdiv from "./Customdiv";

const Todo = () => {
  const [data, setData] = useState([]);
  const [, setReload] = useState(true);
  const[title,] = useState();

  const AddTodo = () => {
    var temp = data;
    var count = temp.push({title:title});
    console.log(count, "count");
    setData(temp);
    setReload((reload) => !reload);
  };

  return (
    <div className="flex h-full w-full bg-white justify-center items-center ">
      <BackgroundImage src={YOU}>
        <div className="flex flex-col w-screen h-full justify-center items-center">
          <div className="flex flex-col  bg- h-5/6 w-3/6 items-center rounded-3xl border border-black ">
            <div className="flex underline font-bold text-6xl">
              MY TO-DO LIST
            </div>
            <div className="flex flex-row ">
              <div className="flex w-96  items-center ml-52 mt-5">
                <TextInput
                  className="flex w-full h-full"
                  placeholder="Write your task "
                />
              </div>
              <div className="flex w-80 items center "></div>
            </div>
            <div className=" w-20 h-10 mr-16 mt-1">
              <Button
                onClick={() => AddTodo()}
                className="bg-green-700 h-full w-full rounded-md font-bold text-lg "
                label="ADD"
              />
            </div>
            <div className="flex h-screen w-10/12 mt-3 justify-center items-center rounded-md">
              <div className="w-full h-full justify-center grid grid-cols-1 sm:grid-cols-1 bg-slate-200 md:grid-col-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1  ">
                {data?.map((data, index) => {
                  return <Customdiv key={index} data={data} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};
export default Todo;
