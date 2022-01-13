import React from "react"
import DashList from "./dashList"
import Heading from "./heading"
import { Container } from "@material-ui/core"


export default function Dash(){
    return(
        <Container maxWidth = "md" class="aux">
            <Heading/>
            <DashList/>
        </Container>       
    )
}