import { olka } from "../../core";

import Title from "./Title";
import SubTitle from "./SubTitle";
const isShow = true;

const data = ["title 1", "title 2", "title 3", "title 4", "title 5"];
const App = () => {
  return (
    <div>
      {/* {
        data.map((item, index) => {
          console.log(
            index
          );
        })
      } */}


      <Title txt="This is Ishraq" />
      <span>THIS IS REALLY HOT!</span>
      <h3>ALLAH IS ONLY ONE GOD!</h3>
    </div>
  );
};

export default App;
