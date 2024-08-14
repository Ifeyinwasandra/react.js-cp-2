//players.js
import PropTypes from 'prop-types';

const Players = [
    {
        name: "Lionel Messi",
        team: "Barcelona",
        nationality: "Argentina",
        jerseyNumber: 10,
        age: "37 years old",
        imageUrl: "https://img.a.transfermarkt.technology/portrait/big/28003-1710080339.jpg?lm=1" 
    },
    {
        name: "Kylian Mbappé",
        team: "Real Madrid",
        nationality: "France",
        jerseyNumber: 9,
        age: "25 years old",
        imageUrl: "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/ron2ny1sxmnrrqlxgnak" 
    },
    {
        name: "Neymar da Silva Santos Júnior",
        team: "Al Hilal SFC",
        nationality: "Brazil",
        jerseyNumber: 10,
        age: "32 years old",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg/330px-Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg" 
    },
    {
        name: "Cristiano Ronaldo",
        team: "Al Nassr FC",
        nationality: "Portugal",
        jerseyNumber: 7,
        age: "39 years old",
        imageUrl: "https://cdn.britannica.com/63/222663-050-58CCA884/Soccer-forward-Cristiano-Ronaldo-2018.jpg?w=400&h=300&c=crop"
    },
    {
        name: "Vinicius Junior",
        team: "Real Madrid",
        nationality: "Brazil",
        jerseyNumber: 7,
        age: "24 years old",
        imageUrl: "https://secure.cache.images.core.optasports.com/soccer/players/150x150/474972.png"
    },
]

Players.propTypes = {
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    jerseyNumber: PropTypes.number.isRequired,
    age: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  };  

export default Players;