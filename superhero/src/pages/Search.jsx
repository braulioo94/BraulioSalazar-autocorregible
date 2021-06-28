import React,{useContext,useEffect} from 'react';
import FormSearch from '../components/FormSearch';
import Alert from '../components/Errores'
import { Link as RouterLink, useHistory } from 'react-router-dom';
import heroContext from '../useContext/heroContext'
import {
    Box,
    Grid,
    Center,
  } from "@chakra-ui/react";
  import { makeStyles } from '@material-ui/core/styles';
  import Card from '@material-ui/core/Card';
  import CardActionArea from '@material-ui/core/CardActionArea';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import CardMedia from '@material-ui/core/CardMedia';
  import Button from '@material-ui/core/Button';
  import Typography from '@material-ui/core/Typography';
  import Header from '../components/Header'


  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 290,
    },
  });


const Search = () => {

    const classes = useStyles();
    const history = useHistory();
    //UseContext
    const herosContext = useContext(heroContext) ;
    const {saveHeros,heros, calculatePowers,handleHeroeSubmit,hero} = herosContext ;

    //Agrega al equipo el heroe seleccionado
    const addingTeam = hero =>{
        if(heros === null ){
            saveHeros([hero])
            Alert.success(`Hecho, Se agrego a ${hero.name} al equipo`)
            
        }else {
            //Valida sea no agrege mas de una vez al mismo superheroe
            let totalEntry=heros.filter(operation =>operation.name === hero.name)
            console.log(totalEntry);
            if(totalEntry.length === 0   ){
                saveHeros([...heros,hero])
                Alert.success(`Hecho, Se agrego a ${hero.name} al equipo`);
            }else{
                Alert.error('Incorrecto', 'El superheroe elegido ya pertenece al equipo');
            }
        }
    }

    useEffect(() => {
        calculatePowers()
    }, [heros])

    const validarToken = () =>{
        const token = localStorage.getItem("token")
        
        if(!token) history.push('/acceso');
    }
    
    
     useEffect(() => {
        validarToken()
        
    }, []); 
        
    
    return ( 
    <>
        <div className='d-flex justify-content-around '>
                <Header />
        </div>
        <Box color='#e62429' >
            <FormSearch onLoginSubmit={handleHeroeSubmit} />
            <Center >
                <Grid
                    centerContent
                    gap={8}
                    mt="2"
                    templateColumns="repeat(3, 2fr)" 
                >
                    {hero.length === 1 ? 
                        null
                    : hero.map((hero) => (
                        <Card className={classes.root} mb="9">
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={hero.image.url}
                                title={hero.name}
                                h="280px" 
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {hero.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {hero.biography.alignment} <br />
                                    {hero.biography.publisher}
                                    
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" variant="contained" onClick={() => addingTeam(hero)}>
                                Agregar al equipo
                                </Button>
                            </CardActions>
                            </Card>
                        
                    ))
                    }
                    
                </Grid>
            </Center>
        </Box>
    </>
        );
}
 
export default Search;