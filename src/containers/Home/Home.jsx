import Budgeter from "../../components/Budgeter";

function Home() {
  return (
    <div className="container">
      <Budgeter />
      <p className="position-absolute bottom-0 start-50 translate-middle-x">
        Created by Daniel Perez
      </p>
    </div>
  );
}

export default Home;
