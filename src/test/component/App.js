import { olka } from "../../core";

import Title from "./Title";
import SubTitle from "./SubTitle";
const isShow = true;

const data = ["title 1", "title 2", "title 3", "title 4", "title 5"];
const App = () => {
  return (
    <div>
      {
        isShow && (
          <div>
            <Title text="Hello World" />
            <SubTitle text="This is a subtitle" />
            <ul>
              {data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )
      }
    </div>
  );
};

export default App;
