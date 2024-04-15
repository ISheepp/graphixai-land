import './App.css';
import './my.css';
import Main from "./view/Main";
import Container from "./view/Container";

function App() {

  const cards = [
    {
      id: 1,
      name: "ClearAI",
      content: "ClearAi photo enhancer uses the world's most advanced artificial intelligence technology to repair blurred photos, repair, enhance and beautify all blurry and defective photos, improve picture clarity, repair picture quality, image cutout, and make characters animated , sketch portraits, etc.",
      logo: "/assets/Logo（ClearAI）.jpg",
      router: "/detail-one"
    },
    {
      id: 2,
      name: "Graphix AI",
      content: "Create stunning digital art and breathtaking photo pieces with GraphixAi's powerful AI image generator and image effects! All you need to do is input a prompt, select an art style, and then watch as GraphixAi's art generator turns your ideas into reality in seconds. Want to create a photo, picture, painting, or drawing as your own artwork? GraphixAi's art generator is your go-to art station. Transform any text or photo into any image or photo you desire.",
      logo: "/assets/logo（Graphix AI）.png",
      router: "/detail-two"
    },
    {
      id: 3,
      name: "Speed AI",
      content: "Speed AI is an app that uses AI to create photos. It enables you to convert photos into artistic images or cartoon avatars or 3D portraits, free trial available.Experience it now by uploading your photo, selecting a style and image model, and using your fingertips to choose settings from hair to expressions, body shape, skin, lighting, and more. Then watch as Speed AI quickly creates new artistic photos or your personalized cartoon avatar within seconds. This is a truly perfect AI photo creation experience.",
      logo: "/assets/Logo（Speed AI）.jpg",
      router: "/detail-three"
    },
    {
      id: 4,
      name: "Style Me",
      content: "Style Me is an AI portrait editing app that utilizes InstantID technology to intelligently create new portrait photographs with high fidelity to various fashion styles. It effortlessly achieves consistency between the generated portraits and the original photos. It features dozens of selectable movie character models, allowing users to freely adjust portrait similarity and network intensity. With hundreds of editable character style types, the software offers a diverse range of portrait detail editing functions. Users can simply choose from preset portrait pose models, enabling the creation of cinematic-quality portrait series photos. By combining any pose photo prototype, users can even create full-body portrait photos.",
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
