import { olka } from "../../core";

import Title from "./Title";
import SubTitle from "./SubTitle";
const isShow = true;

const data = ["title 1", "title 2", "title 3", "title 4", "title 5"];
const App = () => {
  return (
    <div>
      {
        data.map((item, index) => {
          console.log(
            index
          );
        })
      }
    </div>
  );
};

export default App;
