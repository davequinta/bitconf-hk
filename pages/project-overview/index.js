import React, {useState} from "react";
import {Button} from "../../components/Button/Button.js";
import Header from "../../components/Header/Header.js";
import {Input} from "../../components/Input/Input.js";
import {Screen} from "../../components/Screen/Screen.js";
import {useRouter} from "next/router";
import {PROJECTS} from "../home/constants";

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
      <div className="w-full h-full bg-blue-100 p-3">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Nombre del Proyecto:
        </label>
        <span>{project.title}</span>
        <label class="block text-gray-700 text-sm font-bold mb-2 mt-5">
          Descripción del Proyecto:
        </label>
        <span>{project.description}</span>
      </div>
    </Screen>
  );
};

export default ProjectOverviewScreen;
