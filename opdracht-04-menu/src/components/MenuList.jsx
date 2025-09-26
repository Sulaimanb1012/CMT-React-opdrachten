import '../App.css';
import data from '../data.js'
import Menu from "./Menu.jsx";

export default function MenuList() {

  return (
     <section className="section-center">
        {data.map(({ id, title, price, img, desc }) => (
          <Menu id={id} title={title} price={price} img={img} desc={desc} />
        ))}
      </section>
  );
}
