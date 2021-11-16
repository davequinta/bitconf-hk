import React, {useState} from "react";
import {Button} from "../../components/Button/Button.js";
import {Card} from "../../components/Card/Card.js";
import Header from "../../components/Header/Header.js";
import {Screen} from "../../components/Screen/Screen.js";
import Link from "next/link";
import Router from "next/router";
import {PROJECTS} from "../../constants/constants.js";
const Home = () => {
  const [menuShown, setMenuShown] = useState(false);
  return (
    <Screen>
      <Header
        iconName="menu"
        iconAction={() => setMenuShown(!menuShown)}
        itemsShown={menuShown}
      />
      <div className="w-full h-full p-3 pb-10">
        <div className="flex flex-row justify-between mb-10 items-center">
          <h1 className="text-2xl text-burnt-sienna font-bold">Propuestas</h1>
          <Link href="/add-project">
            <Button text="Nueva Propuesta" variant="outlined" />
          </Link>
        </div>
        {PROJECTS.map((project, index) => (
          <Card
            key={project.title}
            title={project.title}
            date={project.date}
            priority={project.priority}
            image={project.image}
            onClick={() =>
              Router.push({
                pathname: `/project-overview`,
                query: {index: index},
              })
            }
          />
        ))}
      </div>
    </Screen>
  );
};

export default Home;
