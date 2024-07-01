import ImageMapper from "react-img-mapper";
import { areas } from "./areas";


function App() {
  const w = window.innerWidth;
  const URL = "classroom.webp";
  const MAP = {
    name: "classroom",
    areas: areas,
  };

  const handleMapClick = (title: string | undefined) => {

    switch (title) {

      case "quadro":
        window.alert("Quadro");
        break;

      case "relogio":
        window.alert("Relógio");
        break;

      case "televisão":
        window.alert("Televisão");
        break;

      default:
        window.alert("Área não identificada");

    }

  };

  return (
    <div>
      <ImageMapper
        onClick={(area) => handleMapClick(area.id)}
        src={URL}
        map={MAP}
        responsive
        natural
        parentWidth={w}
      />
    </div>
  )
}

export default App
