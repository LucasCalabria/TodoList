import React, { useState } from "react";
import { Grid, Button, makeStyles , TextField } from "@material-ui/core";
//import SaveIcon from '@mui/icons-material/Save';
//import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1),
        }
    }
}))


export default function AddForm(){
    const classes = useStyles();

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [fina, setFina] = useState('')

    const handleChangeName   = e => setName(e.target.value)
    const handleChangeDesc   = e => setDesc(e.target.value)

    return(
        <form className = {classes.root} noValidate>
            <Grid container direction="column" alignItems="center">
                <Grid item xs={6}>
                    <TextField
                    value = {name}
                    onChange={handleChangeName}
                    label = "Nome"
                    name = "nome"
                    variant = "outlined"
                    style = {{width: 1000}}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    value = {desc}
                    onChange={handleChangeDesc}
                    label = "Descrição"
                    name = "descricao"
                    variant = "outlined"
                    multiline
                    rows={5}
                    maxRows={10}
                    style = {{width: 1000}}
                    
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                    size = "large"
                    //startIcon = {<SaveIcon />}
                    color = "secondary"
                    type = "submit"
                    >SALVAR</Button>
                    
                    <Button
                    size = "large"
                    //startIcon = {<ArrowBackIcon />}
                    href="/dash" 
                    variant="contained"
                    >VOLTAR</Button>
                </Grid>
            </Grid>
        </form>
    )
}