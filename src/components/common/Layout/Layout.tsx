import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  min-height: 100vh;
  margin: auto;
  position: relative;
  max-height: fit-content;
  background-color: ${(props) => props.theme.colors.background};
`;

export default function Layout() {
  return (
    <Container>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
