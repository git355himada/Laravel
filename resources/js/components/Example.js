import { Card, CardContent, List, TextField } from "@mui/material";
import React, { useState } from "react";
import { useUpdateToDoMutateTask } from "../hooks/ToDo";
import Examples from "./Examples";
function Example(props) {
    return (
        <Card>
            <CardContent>
                <List>
                    {[0, 1, 2, 3].map((value) => {
                        return <Examples id={value} />;
                    })}
                </List>
            </CardContent>
        </Card>
    );
}

export default Example;