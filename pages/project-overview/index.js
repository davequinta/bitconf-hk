import React, {useState} from "react";
import {Button} from "../../components/Button/Button.js";
import Header from "../../components/Header/Header.js";
import {Input} from "../../components/Input/Input.js";
import {Screen} from "../../components/Screen/Screen.js";
import {useRouter} from "next/router";
import {PROJECTS} from "../../constants/constants.js";
import Router from "next/router";
import swal from "sweetalert";
import Image from "next/image";


const ProjectOverviewScreen = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [files, serFiles] = useState([]);
  const router = useRouter();
  const {index} = router.query;
  const project = PROJECTS[parseInt(index)];
  const handleVote = () => {
    swal({
      title: "",
      text: "Estás seguro que quieres votar por este proyecto?",
      icon: "warning",
      buttons: true,
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        Router.push(`/votes`);
      }
    });
  };

  return (
    <Screen>
      <Header iconName="back" iconAction={() => router.back()} />
      <div className="w-full h-full bg-blue-100 px-3 pt-10">
        
        <span className="block text-gray-700 text-xl font-bold mb-2">{project?.title ?? ""}</span>
        <div className="h-1/2 w-full relative">
            <Image objectFit="cover" src={project?.image ?? ""} alt="" layout="fill" />
          </div>
        <label class="block text-gray-700 text-sm font-bold mb-2 mt-5">
          Descripción del Proyecto:
        </label>
        <span className="text-sm">{project?.description ?? ""}</span>
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Autor del Proyecto:
        </label>
        <span className="text-sm">Jorge Ándres</span>

        <div className="absolute bottom-10 left-0 w-screen flex justify-center">
          <Button text="Votar" onClick={handleVote} />
        </div>
      </div>
    </Screen>
  );
};

export default ProjectOverviewScreen;
