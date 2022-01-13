import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap'
import { Button } from "@material-ui/core"
import Checkbox from '@mui/material/Checkbox'
import ToDoService from "../../service/toDo"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel'

export default function DashList(){
    let idTask = 0
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        (async function getAllTasks(){
            setTasks (await ToDoService.getAllTasks())
        })()
    },[])

    const handleDelete = () =>{
        (async function removeTask(){
            const data = await ToDoService.deleteTask(idTask)
            if (data){
                alert("Tarefa removida com sucesso")
                window.location.reload()
            }
            else alert("Erro de remoção")
        })()
    }

    const handleEdit = () =>{
        localStorage.setItem("idTask", idTask)
        window.location.href = "http://localhost:3000/edit"
    }

    return(
        <FormGroup>
            {tasks.map((task)=>{
                return (
                    <React.Fragment>
                        <div class="container">
                        <FormControlLabel 
                            control={<Checkbox 
                                defaultChecked={task.fina}
                                onChange={function(event){
                                    {task.fina=event.target.checked} 
                                    {ToDoService.updateTask(task.id, task)}
                                    //{window.location.reload()}
                                }}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />} 
                            label="" 
                        />
                            
                        <strong>{task.title}</strong>

                        <Button 
                            size="small"
                            color="primary"
                            onClick={function(event){
                                {idTask=task.id} 
                                {if (!task.fina) handleEdit()
                                 else alert("Não é possível alterar uma tarefa finalizada")
                                }
                            }}
                        >Editar</Button>
                        <Button
                            size="small"
                            color="secondary"
                            onClick={function(event){
                                {idTask=task.id} 
                                handleDelete()
                            }}
                        >Apagar</Button>
                        </div>
                    </React.Fragment>
                )
            })}
        </FormGroup>
    )
}