import YOU from "../assets/Images/YOU.jpg";
import { BackgroundImage, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

 const Firstpage = () => {
    const navigate = useNavigate();
  return (
    <div className="flex  bg-slate-500 w-full h-screen ">
      <BackgroundImage src={YOU}>
        <Text>WELCOME</Text>
        <div><text>Welcome to complete</text> </div>
        
        </BackgroundImage>
        </div>
  )
};


export default Firstpage