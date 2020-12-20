import React from "react";
import {motion} from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const App = () => {
 return(
    <Container>
      <form action="#">
        <input type="text"/>
        <input type="password"/>
      </form>
    </Container>
  )
};

export default App;