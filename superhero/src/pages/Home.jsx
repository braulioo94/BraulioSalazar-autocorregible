import React,{useEffect,useContext} from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom';
import {
    Text,
    Grid,
    Box,
    Center,
  } from "@chakra-ui/react";
  import heroContext from '../useContext/heroContext';
  import { makeStyles } from '@material-ui/core/styles';
  import Card from '@material-ui/core/Card';
  import CardActionArea from '@material-ui/core/CardActionArea';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import CardMedia from '@material-ui/core/CardMedia';
  import Button from '@material-ui/core/Button';
  import Typography from '@material-ui/core/Typography';
  import TablePower from '../components/TablePower'
  
  import Swal from 'sweetalert2';
  import Header from '../components/Header'

  const useStyles = makeStyles({
    root: {
      maxWidth: 445,
      background: '#e62429'
    },
    media: {
      height: 290,
    },
  });


const Home = () => {
    const history = useHistory();
    const classes = useStyles();

    const herosContext = useContext(heroContext) ;
    const {saveHeros,heros, calculatePowers} = herosContext ;
    
    const validarToken = () =>{
        const token = localStorage.getItem("token")
        
        if(!token) history.push('/acceso');
    };
    
    
     useEffect(() => {
        validarToken()
        
    }, []); 

   

    const viewDetails = hero =>{
        
        Swal.fire({
            title: hero.name,
            text: `Altura: ${hero.appearance.height},  Peso: ${hero.appearance.weight},     Alias: ${hero.biography.aliases}, Trabajo: ${hero.work.occupation}  ` , 
            imageUrl: hero.image.url,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
        
    };

    const removeMember = hero =>{
        //Valida que se quiera eliminar el superheroe seleccionado
        Swal.fire({
            title: 'Eliminar',
            text: "Seguro quiere eliminar el heroe seleccionado ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, ¡bórralo!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'Tu heroe ha sido eliminado.',
                'success'
              )
              //Elimina el superheroe seleccionado atraves del id
            const heroFilter = heros.filter(heroFilter=> heroFilter.id !== hero.id)
            saveHeros(heroFilter)
            calculatePowers()
            }
            
          })
        };
    
    return (
        <>
          <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden"   w="70%" m="auto" color='#e62429' >
              <div className='d-flex justify-content-around '>
                <Header />
              </div>
              <Box  >
                  <Text fontSize="3xl">   <h1><strong>Listado del equipo</strong> </h1> </Text>
                  <Center display="flex"  flexDirection="column" alignContent="center" justifyContent="center" >
                          {heros=== null
                            ?
                              <>
                                <Text fontSize="3xl">  Todavia no tiene un equipo armado </Text>
                                <Text fontSize="3xl">  Dirijase a la seccion busqueda para agregar un nuevo miembro</Text>
                              </>
                            :
                              <Box display="flex"  flexDirection="column"  >
                                <Grid
                                    centerContent
                                    gap={15}
                                    mt="2"
                                    templateColumns="repeat(3, 2fr)" 
                                > {/* Muestra en un grid todos los miembros del equipo */}
                                {heros.map((hero) => (
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
                                                <h3>{hero.name}</h3>
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                    <h5><strong>Powerstats:</strong></h5> <br />
                                                Combat: {hero.powerstats.combat} <br />
                                                Intelligence:{hero.powerstats.intelligence} <br />
                                                Durability:{hero.powerstats.durability} <br />
                                                Power:{hero.powerstats.power} <br />
                                                Speed: {hero.powerstats.speed} <br />
                                                Strength:{hero.powerstats.strength} <br />
                                            </Typography>
                                          </CardContent>
                                      </CardActionArea>
                                      <CardActions>
                                          <Button size="small" color="primary" onClick={() => removeMember(hero)}>
                                              Eliminar
                                          </Button>
                                          <Button size="small" color="primary" onClick={() => viewDetails(hero)}>
                                              Ver Detalles
                                          </Button>
                                      </CardActions>
                                    </Card>
                                ))
                                }
                                </Grid>
                                <TablePower />
                              </Box>
                          }
                  </Center>
              </Box>
          </Box>
        </>
        );
}
 
export default Home;