import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});


export default function FileSystemNavigator() {
    const history = useHistory();
  const classes = useStyles();
  const  addUser=()=>{
   console.log('hi');
    history.push('./adduser');

}
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="User Management">
          {/* <button onClick={addUser}>Add User</button> */}
         <TreeItem nodeId="2" label="Add User" onKeyPress={addUser} /> 
        <TreeItem nodeId="3" label="View Users" />
       
      </TreeItem>
      
        
        
      
    </TreeView>
  );
}
