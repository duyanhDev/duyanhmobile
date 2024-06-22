import { useParams } from "react-router-dom";

const Detail = () => {
  const parma = useParams();
  console.log(parma);
  return (
    <div>
      <h1>Duy Anh</h1>
    </div>
  );
};

export default Detail;
