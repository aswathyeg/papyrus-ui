import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { useHistory } from 'react-router-dom';
//import { AddToQueueSharp } from '@material-ui/icons';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
          },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 500,
            margin: `${theme.spacing(0)} auto`
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: 'primary',
            color: 'primary'
        },
        card: {
            marginTop: theme.spacing(10)
        }
    })
);

type State = {
    firstname: string
    lastname: string
    isButtonDisabled: boolean
    helperText: string
    isError: boolean,


};

const initialState: State = {
    firstname: '',
    lastname: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false,

};

type Action = { type: 'setFirstname', payload: string }
    | { type: 'setLastname', payload: string }
    | { type: 'setIsButtonDisabled', payload: boolean }
    | { type: 'loginSuccess', payload: string }
    | { type: 'loginFailed', payload: string }
    | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setFirstname':
            return {
                ...state,
                firstname: action.payload
            };
        case 'setLastname':
            return {
                ...state,
                lastname: action.payload
            };
        case 'setIsButtonDisabled':
            return {
                ...state,
                isButtonDisabled: action.payload
            };
        case 'loginSuccess':
            return {

                ...state,
                helperText: action.payload,
                isError: false


            };
        case 'loginFailed':
            return {
                ...state,
                helperText: action.payload,
                isError: true
            };
        case 'setIsError':
            return {
                ...state,
                isError: action.payload
            };
    }
}


const AddUser = () => {
    const history = useHistory();
    //document.getElementById('login')!.style.display = "none";
    //let isAuthenticated: true;
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        if (state.firstname.trim() && state.lastname.trim()) {
            dispatch({
                type: 'setIsButtonDisabled',
                payload: false
            });
        } else {
            dispatch({
                type: 'setIsButtonDisabled',
                payload: true
            });
        }
    }, [state.firstname, state.lastname]);

    const handleLogin = () => {
       
        
        if (state.firstname === 'aeg@email.com' && state.lastname === '1234') {


            dispatch({
                type: 'loginSuccess',
                payload: 'loginSuccess'
            });
        //     history.push('/menubar');
            //setTimeout(() => history.push('/menubar'), 10);
            
        } else {
           
            dispatch({
                type: 'loginFailed',
                payload: 'Incorrect username or password'
            });
        }

    };

    //const [state, dispatch] = useReducer(reducer, initialState);  
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.keyCode === 13 || event.which === 13) {
            state.isButtonDisabled || handleLogin();
        }
    };

    const handleFirstnameChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => {
            dispatch({
                type: 'setFirstname',
                payload: event.target.value
            });
        };

    const handleLastnameChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => {
            dispatch({
                type: 'setLastname',
                payload: event.target.value
            });
        }
        const [value, setValue] = React.useState('');

        const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        };
        const [role, setRole] = React.useState('');
        const roles = [
            {
              value: 'Admin',
              label: 'Admin',
            },
            {
              value: 'Teacher',
              label: 'Teacher',
            },
            {
              value: 'Student',
              label: 'Student',
            },
            {
              value: 'Parent',
              label: 'Parent',
            },
          ];
          const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setRole(event.target.value);
          };
        
    return (
        <Container>
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '60vh' }}  >
                <form className={classes.container} noValidate autoComplete="off">
                    <Card className={classes.card}>
                        <CardHeader className={classes.header} title="Add New User" />
                        <CardContent>
                            
                                <TextField
                                    error={state.isError}
                                    fullWidth
                                    id="firstname"
                                    type="text"
                                    //label="Username"
                                    placeholder="First Name"
                                    margin="normal"
                                    onChange={handleFirstnameChange}
                                    onKeyPress={handleKeyPress}
                                />
                                <TextField
                                    error={state.isError}
                                    fullWidth
                                    id="middlename"
                                    type="text"
                                    //label="Username"
                                    placeholder="Middle Name"
                                    margin="normal"
                                    onChange={handleFirstnameChange}
                                    onKeyPress={handleKeyPress}
                                />
                                <TextField
                                    error={state.isError}
                                    fullWidth
                                    id="lastname"
                                    type="text"
                                    //label="Password"
                                    placeholder="Last Name"
                                    margin="normal"
                                    helperText={state.helperText}
                                    onChange={handleLastnameChange}
                                    onKeyPress={handleKeyPress}
                                />
                              
      <TextField
        id="date"
        label="DOB"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      
      <TextField
          id="standard-multiline-flexible"
          label="Address"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleAddressChange}
        />

          <TextField
          id="standard-select-role-native"
          select
          label="Role"
          value={role}
          onChange={handleRoleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your role"
        >
          {roles.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>          
                        <CardActions>
                            <Button
                                //  {...isAuthenticated? <Menubar />:<Login />}
                                // to="/home":component={Link}
                                // to="/"}

                                // component={Link}
                                // to="/menubar"
                                variant="contained"
                                size="large"
                                color="primary"
                                className={classes.loginBtn}
                                onClick={handleLogin}
                                disabled={state.isButtonDisabled}



                            >
                                Submit
          </Button>
         
          </CardActions>
                        </CardContent>
                        
                    </Card>
                   
                </form>
              
            </Typography>
           
        </Container>
      
    )
}

export default AddUser;