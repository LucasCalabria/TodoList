import React from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap'
import { Button } from "@material-ui/core";
import ToDoService from "../../service/toDo"

export default function DashList(){
    const idTask = 0

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
                <strong>Tarefa 1</strong>
                    <Button 
                        onClick = {handleDelete}
                    >Editar</Button>
                    <Button 
                        //onClick = {handleEdit}
                    >Apagar</Button>
            </ListGroupItem>
        </ListGroup>
    )
}