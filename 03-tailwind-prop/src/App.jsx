import "./App.css";
import Card from "./components/Card";
import skb from "./assets/fb-skb.jpg";
import piyush from "./assets/fb-piyush.jpg";
import sagun from "./assets/fb-sagun.jpg";

function App() {
  let cards = [
    {
      username: "Subrat",
      imgUrl: skb,
    },
    {
      username: "Piyush",
      imgUrl: piyush,
    },
    {
      username: "Sagun",
      imgUrl: sagun,
    },
  ];
  return (
    <>
      <h1 className="text-3xl font-bold underline underline-offset-8 mb-16">
        Hello world!
      </h1>
      <div className="flex">
        {cards.map((cardObj, index) => (
          <Card key={index} cardObj={cardObj} />
        ))}
      </div>
    </>
  );
}

export default App;
