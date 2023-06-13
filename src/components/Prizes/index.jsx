import './style.scss';

function PrizeHeading(props) {
  return (
    <div className="PrizeHeading">
      <h1>{props.type}</h1>
    </div>
  );
}

function FirstPrize(props) {
  return (
    <div className="Prizes">
      <img
        src={props.srcx}
        height="110px"
        width="320px"
        alt="Code Relay 2.0"
      ></img>
      {/* {props.icon} */}
      {/* <h2>{props.type}</h2> */}
      {props.content[0] && <p>{props.content[0]}</p>}
      {props.content[1] && <p>{props.content[1]}</p>}
      {props.content[2] && <p>{props.content[2]}</p>}
    </div>
  );
}

export {FirstPrize, PrizeHeading};
