import './App.css';
import './my.css';
import Main from "./view/Main";
import Container from "./view/Container";

function App() {

  const cards = [
    {
      id: 1,
      name: "ClearAI",
      content: "Enhance and re-edit photos",
      logo: "/assets/Logo（ClearAI）.jpg",
      router: "/detail-one"
    },
    {
      id: 2,
      name: "Graphix AI",
      content: "Use AI painting to create graphic art",
      logo: "/assets/logo（Graphix AI）.png",
      router: "/detail-two"
    },
    {
      id: 3,
      name: "Speed AI",
      content: "Create avatar art and image blends",
      logo: "/assets/Logo（Speed AI）.jpg",
      router: "/detail-three"
    },
    {
      id: 4,
      name: "Style Me",
      content: "Generate different cover photos from portrait photos",
      logo: "/assets/Logo（Styleme）.png",
      router: "/detail-four"
    },
  ]

  return (
    <Container>
      <Main cards={cards} />
    </Container>
  );
}

export default App;
