import React, {useState} from "react";
import {Button} from "../../components/Button/Button.js";
import Header from "../../components/Header/Header.js";
import {Input} from "../../components/Input/Input.js";
import {Screen} from "../../components/Screen/Screen.js";
import {useRouter} from "next/router";

const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [files, serFiles] = useState([]);
  const router = useRouter();

  const fileSelectedHandler = (event) => {
    console.log({files: event.target.files});
    serFiles(event.target.files);
  };
  return (
    <Screen>
      <Header iconName="back" iconAction={() => router.back()} />
      <div className="w-full h-full bg-blue-100 p-3">
        <Input
          value={projectName}
          onChange={(evt) => setProjectName(evt.target.value)}
          placeholder="Nombre del proyecto"
          label="Ingresa el nombre del proyecto"
          type="text"
          id="project-name"
        />
        <Input
          value={projectDescription}
          onChange={(evt) => setProjectDescription(evt.target.value)}
          label="Ingresa la descripcion del proyecto"
          type="text"
          id="project-name"
          variant="textarea"
        />
        <input type="file" multiple onChange={fileSelectedHandler} />

        <div className="absolute bottom-10 left-0 w-screen flex justify-center">
          <Button
            text="Enviar"
            onClick={() =>
              console.log({projectName, projectDescription, files})
            }
          />
        </div>
      </div>
    </Screen>
  );
};

export default AddProject;
