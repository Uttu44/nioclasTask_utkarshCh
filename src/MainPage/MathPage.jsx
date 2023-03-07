import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "katex/dist/katex.min.css";
import MathJax from "react-mathjax";
import axios from "axios";

function MathPage(content) {
  const [data, setData] = useState([]);
  const [vis, setVis] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState("AreaUnderTheCurve_901");

  const apiGet = () => {
    axios
      .get(
        `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${currentQuestionIndex}`
      )
      .then(
        (response) => setData(response.data),
        setVis(false)
      )
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNavigation = (questionNum) => {
    if (questionNum === 1) {
      setCurrentQuestionIndex("AreaUnderTheCurve_901");
      apiGet();
      console.log(currentQuestionIndex);
    } else if (questionNum === 2) {
      setCurrentQuestionIndex("DifferentialCalculus2_901");
      apiGet();
      console.log(currentQuestionIndex);
    } else if (questionNum === 3) {
      setCurrentQuestionIndex("BinomialTheorem_901");
      apiGet();
      console.log(currentQuestionIndex);
    }
  };

  const buttons = [1, 2, 3];

  return (
    <>
      <Container>
        <div className="container" >
          <div>
            <h1>Maths Question Paper</h1>
          </div>

          {vis ? (
            <button onClick={apiGet}>
              <h3>Start Your Exam</h3>
            </button>
          ) : null}
          <br />
          <MathJax.Provider>
            <div style={{ height: "150px" }}>
              <ul style={{ height: "150px" }}>
                {data.map((item) => (
                  <li key={item.QuestionID} style={{ height: "90px"}}>
                    <MathJax.Node formula={item.Question} />
                    {/* {item.Question} */}
                  </li>
                ))}
              </ul>
            </div>
          </MathJax.Provider>
          {buttons.map((buttonNum) => (
            <button
              key={buttonNum}
              onClick={() => handleNavigation(buttonNum)}
            >
              Question {buttonNum}
            </button>
          ))}
        </div>
      </Container>
    </>
  );
}

export default MathPage;

 const Container = styled.div`
.container{
  height: 250px;
}
.MJXc-processed {
  display:block;
}
.mjx-math {
  display:block;
}
#MJXc-Node-284 , #MJXc-Node-303, #MJXc-Node-324,#MJXc-Node-328 , #MJXc-Node-163, #MJXc-Node-176, #MJXc-Node-6 ,#MJXc-Node-32, #MJXc-Node-72 ,#MJXc-Node-78 ,
#MJXc-Node-107 , #MJXc-Node-115 , #MJXc-Node-121 , #MJXc-Node-133{
  display:none;
}
#MJXc-Node-926, #MJXc-Node-334 , #MJXc-Node-360 , #MJXc-Node-466 , #MJXc-Node-400 ,#MJXc-Node-406 , #MJXc-Node-435 , #MJXc-Node-443 , #MJXc-Node-449 , #MJXc-Node-461 ,
#MJXc-Node-491 , #MJXc-Node-504 , #MJXc-Node-612 , #MJXc-Node-631 , #MJXc-Node-652 , #MJXc-Node-656{
  display:none;
}
#MJXc-Node-990 , #MJXc-Node-662 ,#MJXc-Node-688 , #MJXc-Node-728 , #MJXc-Node-734 , #MJXc-Node-763 , #MJXc-Node-771 ,#MJXc-Node-777 , 
#MJXc-Node-789 , #MJXc-Node-819 , #MJXc-Node-832 , #MJXc-Node-940 , #MJXc-Node-959 , #MJXc-Node-980 , #MJXc-Node-984{
  display:none;
}
.mjx-chtml{
   background: aliceblue; 
}

@media only screen and (max-width: 600px){
  .mjx-chtml {
    font-size: 50%;
  }
}
`;
