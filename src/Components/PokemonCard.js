import REACT from 'react';

const PokemonCard = props => {
    const {name} = props;

    return (
    <div>{name.name}</div>
    );
}

export default PokemonCard;