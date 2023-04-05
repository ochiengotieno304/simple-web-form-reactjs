import { useLocation } from "react-router-dom";

const Details = () => {
  let { state } = useLocation();
  console.log(state.some)
  return (
    <div>Details</div>
  )
}

export default Details
