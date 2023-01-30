import { CheckBox, Delete } from "@mui/icons-material";
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material";
import React, { useState } from "react";
import { useUpdateToDoDetailMutateTask } from "../hooks/ToDoDetail";

function Examples(props) {
    return (
        <ListItem
            key={props.id}
            secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <Delete />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <CheckBox
                     edge="start"
                    />
                </ListItemIcon>
                <ListItemText primary={"test example" + props.id}></ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

export default Examples