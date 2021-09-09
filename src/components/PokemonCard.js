import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {

  const {name, hp} = poke
  const {front, back} = poke.sprites

  const [viewFront, setViewFront] = useState(true)
  
  let src = viewFront ? front : back

  return (
    <Card>
      <div>
        <div onClick={() => setViewFront(!viewFront)}className="image">
          <img src={src} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
