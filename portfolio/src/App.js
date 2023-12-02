import './App.css';
import styled, {ThemeProvider} from'styled-components';
import { darkTheme } from './utils/theme';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection/Index';
import Skills from './components/Skills';

const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
width: 100%;
height: 100%;
overflow-x: hidden;
`;



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Body>
        <Hero />
        <Skills />
      </Body>
    </ThemeProvider>
        
  )
}

export default App;
