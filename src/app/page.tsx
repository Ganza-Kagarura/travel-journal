import Navbar from "@/components/Navbar";
import data from "../../data";
import Card from "@/components/Card";

export default function Home() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item} 
      />
    )
  })
  return (
    <main>
      <Navbar />
      {cards}
    </main>
  );
}
