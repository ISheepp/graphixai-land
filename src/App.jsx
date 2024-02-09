import './App.css';
import './my.css';
import Main from "./view/Main";
import Container from "./view/Container";

function App() {

  const cards = [
    {id: 1, title: "Card 1", content: "Content 1"},
    {id: 2, title: "Card 2", content: "Content 2"},
    {id: 3, title: "Card 3", content: "Content 3"},
  ]

  return (
    <Container>
      <Main cards={cards}/>
    </Container>
  );
}

export default App;
