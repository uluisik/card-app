import "./App.css";
import Card from "./Card";
import resim1 from "./assets/034.jpg";
import resim2 from "./assets/035.jpg";
import resim3 from "./assets/IMG-20160326-WA0004.jpg";
function App() {
  return (
    <div className="wrapper">
      <Card
        img={resim1}
        title="Tilki"
        description="one of the important characters of the valley. it's almost like the Russian polat alemdar. it does not take part in the Russian council, it has a higher structure than the council, it has authority and power."
      />
      <Card
        img={resim2}
        title="Armut"
        description="when I have just returned to my hometown from abroad, there are renovation works at the house I will just move to, armut.com I said it was fine, pure and simple, I requested a service."
      />
      <Card
        img={resim3}
        title="Lando"
        description="In cinema, he often portrayed sympathetic but naive characters obsessed with sexuality in sex-comedy films and satirical vulgar laughs.He was very crayzboy"
      />
    </div>
  );
}

export default App;
