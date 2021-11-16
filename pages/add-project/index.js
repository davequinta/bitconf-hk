import React, {useState} from "react";
import {Button} from "../../components/Button/Button.js";
import {Card} from "../../components/Card/Card.js";
import Header from "../../components/Header/Header.js";
import {Input} from "../../components/Input/Input.js";
import {Screen} from "../../components/Screen/Screen.js";
const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projecDescription, setProjectDescription] = useState("");
  const [files, serFiles] = useState([]);

  const fileSelectedHandler = (event) => {
    console.log({files: event.target.files});
    serFiles(event.target.files);
  };
  return (
    <Screen>
      <Header iconName="back" />
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
          value={projecDescription}
          onChange={(evt) => setProjectDescription(evt.target.value)}
          label="Ingresa el la descripcion del proyecto"
          type="text"
          id="project-name"
          variant="textarea"
        />
        <input type="file" multiple onChange={fileSelectedHandler} />
      </div>
    </Screen>
  );
};

export default AddProject;
