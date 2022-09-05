import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";


const myText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus suscipit, impedit temporibus perspiciatis ratione, odit excepturi nemo repellendus nobis nulla facere. Tempora possimus ad at ut harum culpa ipsa ab!'
const ReadMore = () => {
  return (
    <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
                {myText}
            </ReactReadMoreReadLess>
  );
};

export default ReadMore;
