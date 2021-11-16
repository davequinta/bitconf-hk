import React, {useState} from "react";
import {Button} from "../../components/Button/Button.js";
import {Card} from "../../components/Card/Card.js";
import Header from "../../components/Header/Header.js";
import {Screen} from "../../components/Screen/Screen.js";
const Home = () => {
  const [menuShown, setMenuShown] = useState(false);
  return (
    <Screen>
      <Header
        iconAction={() => setMenuShown(!menuShown)}
        itemsShown={menuShown}
      />
      <div className="w-full h-full bg-blue-100 p-3">
        <div className="flex flex-row justify-between mb-10">
          <h1 className="text-2xl">Proyectos</h1>
          <Button
            text="Nueva Propuesta"
            onClick={() => console.log("nueva propouesta")}
            variant="outlined"
          />
        </div>
        <Card
          title="Proyecto 1"
          date="19/02/2021"
          priority="Alta"
          image="https://red.novagob.org/wp-content/uploads/2017/07/sa_1500566267_561070_baches-san-bernabe-1038x513.jpg"
        />
        <Card
          title="Proyecto 1"
          date="19/02/2021"
          priority="Alta"
          image="https://red.novagob.org/wp-content/uploads/2017/07/sa_1500566267_561070_baches-san-bernabe-1038x513.jpg"
        />
        <Card
          title="Proyecto 1"
          date="19/02/2021"
          priority="Alta"
          image="https://red.novagob.org/wp-content/uploads/2017/07/sa_1500566267_561070_baches-san-bernabe-1038x513.jpg"
        />
        <Card
          title="Proyecto 1"
          date="19/02/2021"
          priority="Alta"
          image="https://red.novagob.org/wp-content/uploads/2017/07/sa_1500566267_561070_baches-san-bernabe-1038x513.jpg"
        />
        <Card
          title="Proyecto 1"
          date="19/02/2021"
          priority="Alta"
          image="https://red.novagob.org/wp-content/uploads/2017/07/sa_1500566267_561070_baches-san-bernabe-1038x513.jpg"
        />
        <Card
          title="Proyecto 1"
          date="19/02/2021"
          priority="Alta"
          image="https://red.novagob.org/wp-content/uploads/2017/07/sa_1500566267_561070_baches-san-bernabe-1038x513.jpg"
        />
        <Card
          title="Proyecto 1"
          date="19/02/2021"
          priority="Alta"
          image="https://red.novagob.org/wp-content/uploads/2017/07/sa_1500566267_561070_baches-san-bernabe-1038x513.jpg"
        />
        <Card
          title="Proyecto 1"
          date="19/02/2021"
          priority="Alta"
          image="https://red.novagob.org/wp-content/uploads/2017/07/sa_1500566267_561070_baches-san-bernabe-1038x513.jpg"
        />

      </div>
    </Screen>
  );
};

export default Home;
