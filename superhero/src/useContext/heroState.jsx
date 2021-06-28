import React,{useState} from 'react';
import heroContext from './heroContext';
import axios from 'axios';
import Alert from '../components/Errores'
import { Link as RouterLink, useHistory } from 'react-router-dom';

const HeroState = ( props) => {

    const history = useHistory()

    //Guarda todos los heroes
    const [heros, saveHeros] = useState(null);
    //Guarda el total de los poderes del equipo
    const [totalPower, setTotalPower] = useState([{}]);
    //Guarda el total del peso y estatura del equipo  
    const [totalWeightAndHeight, setTotalWeightAndHeight] = useState({});

    
    //Calcula el promedio del powerStats y appearance del equipo
    const calculatePowers = () => {

        let powerStats = []
        let appearance = []

        if(!heros){
            
            return null}
        else {
            heros.map(hero => {
                const PowerStats = hero.powerstats
                const Appearance = hero.appearance
    
                powerStats=[...powerStats,
                    PowerStats
                ]
                appearance=[...appearance,
                    Appearance
                ]
            });
            
            //Se realiza la sumatoria de todos los powerStats y se los guarda por separado
            
            const totalStrength = powerStats.reduce ((acum, el) => acum + parseInt(el.strength), 0);
            const totalCombat = powerStats.reduce ((acum, el) => acum + parseInt(el.combat), 0);
            const totalDurability = powerStats.reduce ((acum, el) => acum + parseInt(el.durability), 0);
            const totalPower = powerStats.reduce ((acum, el) => acum + parseInt(el.power), 0);
            const totalSpeed = powerStats.reduce ((acum, el) => acum + parseInt(el.speed), 0);
            const totalIntelligence = powerStats.reduce ((acum, el) => acum + parseInt(el.intelligence), 0);
            const totalWeight = appearance.reduce ((acum, el) => acum + parseInt(el.weight), 0);
            const totalHeight = appearance.reduce ((acum, el) => acum + parseInt(el.height), 0);
            
            // Se guarda los totales de los poderes en un array de objetos
            setTotalPower([
                {
                    name:"strength",
                    total:totalStrength
                },
                {
                    name:"combat",
                    total:totalCombat
                },
                {
                    name:"durability",
                    total:totalDurability
                },
                {
                    name:"power",
                    total:totalPower
                },
                {
                    name:"speed",
                    total:totalSpeed
                },
                {
                    name:"intelligence",
                    total:totalIntelligence
                }
            ] )

            // Se guarda los totales de altura y peso en objeto
            setTotalWeightAndHeight(
                {
                    height: totalHeight,
                    weight: totalWeight
                }
            )
    }};

    
    const [hero, setHero] = useState([{}])

    const handleHeroeSubmit =(values, actions) =>{
        axios.get(`https://www.superheroapi.com/api.php/528308965249462/search/${values.nombre}`).then((result) => {
        if (!result.data) {
            console.log(result);
            Alert.error('Error', 'No se encontro el heroe indicado, intente nuevamente', 'OK  ');
            return;
        }
        else {
            setHero(result.data.results)
            Alert.success('Hecho', 'Se encontro lo solicitado');
        }
        }).catch((error) => {
        console.log(values.nombre);
        Alert.error('Incorrecto', 'No se encontro el heroe indicado, intente nuevamente ');
        
        });
    
}
         
const handleLoginSubmit =(values, actions) =>{

    console.log('asd');
      axios.post(`http://challenge-react.alkemy.org/`, values).then((result) => {

          if (!result.data?.token) {
            Alert.error('Error', 'No ha logrado ingresar, verifique los datos', 'OK');
            
            return;
          }
          else {
              localStorage.setItem("token", result.data.token);
              Alert.success('Hecho', 'Ha  iniciado sesión correctamente');
              history.push('/');
          }
        }).catch((error) => {
          Alert.error('Incorrecto', 'El mail o la contraseña son incorrectos');
          
        });
}
        
    return ( 

        <heroContext.Provider
        value= {{
            saveHeros,
            heros,
            setTotalPower,
            totalPower,
            calculatePowers,
            totalWeightAndHeight,
            handleHeroeSubmit,
            hero,
            handleLoginSubmit
        }}>
            {props.children}
        </heroContext.Provider>
     );
}

export default HeroState;