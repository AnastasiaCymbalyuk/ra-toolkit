import React from "react";
import FormFacts from "./form/FormFacts";
import FileUpload from "./form/FileUpload";
import List from "./form/List";
import { nanoid } from 'nanoid';

const Widget = () => {
  return (
    <React.Fragment>
      <div>
        <FormFacts key={nanoid()} type={"facts"} />
        <List key={nanoid()} type={"facts"}></List>
      </div>
      <div>
        <FileUpload key={nanoid()} type={"images"} />
        <List key={nanoid()} type={"images"}></List>
      </div>
    </React.Fragment>
  );
};
export default Widget;