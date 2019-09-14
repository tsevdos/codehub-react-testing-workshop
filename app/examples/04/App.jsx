import React from "react";
import CharacterList from "./CharacterList";

const data = [
  {
    name: "John Tsevdos",
    gender: "male"
  },
  {
    name: "Patricia Lebsack",
    gender: "female"
  },
  {
    name: "Dennis Schulist",
    gender: "male"
  },
];

const App = () => (
  <div>
    <CharacterList data={data} />
  </div>
);

export default App;
