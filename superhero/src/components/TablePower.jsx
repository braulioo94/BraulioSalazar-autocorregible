import React,{useContext,useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import heroContext from '../useContext/heroContext';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: '#e62429',
    marginTop:'5%',
    color: 'white'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


export default function TablePower() {
    
    const classes = useStyles();

    const herosContext = useContext(heroContext) ;
    const {heros,totalPower, totalWeightAndHeight} = herosContext ;

    
    const powerList = totalPower.sort((a,b) => b.total - a.total)


  useEffect(() => {
      
  }, [])

  return (
    <>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        mt='10'
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Power States
          </ListSubheader>
        }
        className={classes.root}
      >
        <h2>Power Listing</h2>
        {powerList.map((powerState) => (
        <ListItem button>
          <ListItemText primary={powerState.name} />
            <ListItemIcon>
              {powerState.total}
            </ListItemIcon>
        </ListItem>
        ))}
          <p>Average Height: {Math.round(totalWeightAndHeight.height/heros.length)} "</p>
          <p>Average Weight: {Math.round(totalWeightAndHeight.weight/heros.length) } LB </p>
      </List>
    </>
  );
}