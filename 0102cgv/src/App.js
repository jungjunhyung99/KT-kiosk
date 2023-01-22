import Movie from "./cgv_Movie";
import When from "./cgv_When"
import Seat from "./cgv_Seat"
import Food from "./cgv_Food"

function App() {
  return (
    <>
      <h3>영화를 선택하세요</h3>
      <Movie></Movie>
      <When></When>
      <Seat></Seat>
      <Food></Food>
    </>
  );
}

export default App;