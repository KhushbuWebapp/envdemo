import React from "react";
import _ from "lodash";

const Lodashcomponent = () => {
  const myData = [
    "banana",
    "apple",
    "orange",
    "grape",
    "kiwi",
    "kiwi",
    "banana",
  ];

  //   const Data = _.chunk(myData, 3);
  //   const Data = _.difference(myData, ["banana", "kiwi"]);
  //   const Data = _.join(myData, "|");
  //   const Data = _.without(myData, "banana", "kiwi");
  const Data = _.uniq(myData);
  console.log(Data);

  return <>This is the lodash component...</>;
};

export default Lodashcomponent;
