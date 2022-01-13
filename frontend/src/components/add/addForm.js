import React, { useState } from "react";
import { Grid, Button, makeStyles , TextField } from "@material-ui/core";
import ToDoService from "../../service/toDo"

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1),
        }
    }
}))


export default function AddForm(props){
    const classes = useStyles();

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [fina, setFina] = useState('')

    const [flag, setFlag] = useState(props.edit)
    const [editedFlag, setEditedFlag] = useState(false)

    const handleChangeTitle = e => setTitle(e.target.value)
    const handleChangeDesc  = e => setDesc(e.target.value)

    let idTask = Number((localStorage.getItem("idTask")))

    if (flag=="true"){
        (async function getTask(){
            const resp = await ToDoService.getTaskById(idTask)

            setTitle(resp["title"])
            setDesc(resp["desc"])

            setFlag("false")
            setEditedFlag(true)
        })()
    }

    const handleSubmit = e =>{
        e.preventDefault()
        (async function getTaskById(){
            let temp ={
                title: title,
                desc: desc,
                fina: false
            }
            
            try{
                if(!editedFlag)
                    await ToDoService.createNewTask(temp)
                
                else
                    await ToDoService.updateTask(idTask, temp)

                setEditedFlag(false)                
                alert("Salvo")
                window.location.href = '/'
                
            }
            catch(error){
                console.log("ERROR", error)
                alert("Erro de salvamento")
            }
        })()
    }

    return(
        <form className = {classes.root} noValidate onSubmit={handleSubmit}>
            <Grid container direction="column" alignItems="center">
                <Grid item xs={6}>
                    <TextField
                    value = {title}
                    onChange={handleChangeTitle}
                    label = "Título"
                    name = "title"
                    variant = "outlined"
                    style = {{width: 1000}}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    value = {desc}
                    onChange={handleChangeDesc}
                    label = "Descrição"
                    name = "desc"
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
                    color = "secondary"
                    type = "submit"
                    >SALVAR</Button>
                    
                    <Button
                    size = "large"
                    href="/" 
                    variant="contained"
                    >VOLTAR</Button>
                </Grid>
            </Grid>
        </form>
    )
}