import { useEffect } from "react";
import { fetchPostIdData } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.post.details);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPostIdData(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Detalles del POST</h1>

      <div key={details.userId}>
        <h1>{details.title}</h1>
        <h2>{details.body}</h2>
      </div>
    </div>
  );
};

export default Detail;
