import React, {useState} from "react";
import {Button} from "../../components/Button/Button.js";
import Header from "../../components/Header/Header.js";
import {Input} from "../../components/Input/Input.js";
import {Screen} from "../../components/Screen/Screen.js";
import {useRouter} from "next/router";
import {PROJECTS} from "../../constants/constants.js";

const ProjectOverviewScreen = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [files, serFiles] = useState([]);
  const router = useRouter();
  const {index} = router.query;
  const project = PROJECTS[parseInt(index)];
  return (
    <Screen>
      <Header iconName="back" iconAction={() => router.back()} />
      <div className="w-full h-full bg-blue-100 p-3 flex justify-center items-center flex-col px-8">
        <label className="block text-gray-700 text-lg font-bold text-center mb-10">
          Voto realizado con éxito! Muchas gracias por tu participación ciudadana.
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-5">
          Saldo Restante:
        </label>

        <label className="block text-gray-700 text-base font-bold mb-2">
          0 tokens
        </label>

        <div className=" w-screen flex justify-around items-center mt-10">
          <Button text="Aceptar" onClick={() => Router.push(`/home`)} />
        </div>
      </div>
    </Screen>
  );
};

export default ProjectOverviewScreen;
