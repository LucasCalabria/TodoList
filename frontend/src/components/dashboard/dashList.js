import React, { useEffect } from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap'
import { Button } from "@material-ui/core";
import ToDoService from "../../service/toDo"

export default function DashList(){
    let idTask = 0
    let tasks = [
        {id: 0, title: "tarefa vvc", desc: "sadasd"},
        {id: 1, title: "tarefa asd", desc: "syjuyj"}
    ]

    useEffect(() => {
        (async function getAllTasks(){
            tasks = await ToDoService.getAllTasks()
        })()
    },[])

    const handleDelete = () =>{
        (async function removeTask(){
            const data = await ToDoService.deleteTask(idTask)
            if (data){
                alert("Restaurante removido com sucesso")
                window.location.reload()
            }
            else alert("Erro de remoção")
        })()
    }

    return(
        <ListGroup>
            <ListGroupItem>
                {tasks.map((task)=>{
                    return (
                        <React.Fragment>
                            <strong>{task.title}</strong>
                            <Button 
                                //onClick = {handleDelete}
                            >Editar</Button>
                            <Button 
                                //onClick = {handleEdit}
                            >Apagar</Button>
                        </React.Fragment>
                    )
                })}
            </ListGroupItem>
        </ListGroup>
    )
}