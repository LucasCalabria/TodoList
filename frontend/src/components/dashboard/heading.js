import React from "react"
import { Link } from "react-router-dom"
import { Typography } from "@material-ui/core"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

export default function Heading(){
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ flex: 1 }}>
                        Lista de Tarefas
                    </Typography>
                    <Button color="inherit" href="/add">
                        Criar Tarefa
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}