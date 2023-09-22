// eslint-disable-next-line no-unused-vars
import React from "react";
import { TimeInput } from "@mantine/dates";
import { ActionIcon } from "@mantine/core";
import { IconClock } from "@tabler/icons-react";
import { useRef } from "react";
import { DateInput } from "@mantine/dates";
// import { useNavigate } from "react-router";

const Customdiv = (props) => {
  const data =props
  const ref = useRef(null);
  // const navigate =useNavigate

  return (
    <div className="flex w-6/6 h-32 bg-gray-500 flex-row justify-center items-center text-black font-bold rounded-lg">
      <div className="flex h-full w-52 flex-col items-center">
        <div className="flex w-full h-96 items-center ">
          <DateInput
            valueFormat="DD/MM/YYYY"
            label="Date input"
            placeholder="Date input"
            maw={400}
            mx="auto"
          />
        </div>
        <div className="flex w-full h-96">
          <TimeInput
            label="Select the time"
            ref={ref}
            rightSection={
              <ActionIcon onClick={() => ref.current.showPicker()}>
                <IconClock size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            maw={400}
            mx="auto"
          />
        </div>
      </div>
      <div className="flex w-80 h-full"><h2>{data?.title}</h2></div>
      <div className="flex flex-row h-full w-56  justify-center items-center ml-2">
        <div className="flex w-full h-10  ">
          <button className="bg-green-700 h-full w-full rounded-md font-bold text-lg " >
            COMPLETED
          </button>
        </div>
        <div className="flex w-full h-10 mt-4 items-center justify-center">
          <button className="bg-green-700 h-full w-full rounded-md font-bold text-lg ml-3 mb-4">
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customdiv;
