import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap'
import { Button } from "@material-ui/core"
import ToDoService from "../../service/toDo"

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
        <ListGroup>
            <ListGroupItem>
                {tasks.map((task)=>{
                    return (
                        <React.Fragment>
                            <strong>{task.title}</strong>
                            <Button 
                                onClick={function(event){{idTask=task.id}; handleEdit()}}
                            >Editar</Button>
                            <Button 
                                onClick={function(event){{idTask=task.id}; handleDelete()}}
                            >Apagar</Button>
                        </React.Fragment>
                    )
                })}
            </ListGroupItem>
        </ListGroup>
    )
}