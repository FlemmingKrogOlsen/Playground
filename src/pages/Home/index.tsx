import { Main } from "../styled";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const Home = () => {
  return (
    <Main>
      <h2>Home</h2>
      <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi vel consequuntur minus fuga deserunt culpa voluptatem rerum repellat? Recusandae alias, magni qui, similique maiores rem quo velit voluptas ratione modi ipsum voluptatibus aut optio veritatis itaque et enim nemo adipisci nesciunt dolorem error odit! Debitis tenetur corrupti ipsa facere enim asperiores, tempore molestias fugiat sint perferendis totam! Rem, quibusdam. Magnam hic dolorem reprehenderit minima ratione, veritatis tempore laboriosam, voluptatum illo aliquam consequatur magni dolores nam voluptate illum labore. Enim itaque odio vero quas placeat quod, alias facilis ad quia quis magni inventore ipsam eligendi soluta dignissimos molestiae voluptatum laborum!
      </Container>
    </Main>
  );
};

export default Home;
