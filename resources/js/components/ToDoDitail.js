import { Delete } from "@mui/icons-material";
import { IconButton, ListItem, ListItemButton, ListItemIcon, TextField, Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useUpdateToDoDetailMutateTask } from "../hooks/ToDoDetail";
import { useDeleteToDoDetailMutateTask } from "../hooks/ToDoDetail";

function ToDoDtail(props) {
    const [timer, setTimer] = useState(null);

    let toDoDetail = {
        id: props.detail.id,
        name: props.detail.name,
        completed_flag: props.detail.completed_flag,
        to_do_id: props.detail.to_do_id
    };

    /** 名称更新イベント */
    const { updateToDoDetailMutation } = useUpdateToDoDetailMutateTask();
    const eventUpdateTodoDetail = (event) => {
        clearTimeout(timer);

        const newTimer = setTimeout(() => {
            let data = {
                ...toDoDetail,
                name: event.target.value,
            };
            updateToDoDetailMutation.mutate(data);
        }, 500);

        setTimer(newTimer);
    };

    /** チェックボックス押下イベント */
    const eventCheckTodoDetail = (event) => {
        let data = {
            ...toDoDetail,
            completed_flag: event.target.checked,
        };
        updateToDoDetailMutation.mutate(data);
    };

    /** 削除ボタン押下イベント */
    const { deleteToDoDetailMutation } = useDeleteToDoDetailMutateTask();
    const eventDeleteTodoDetail = (event) => {
        deleteToDoDetailMutation.mutate(toDoDetail);
    };

    return (
        <ListItem
            key={props.detail.id}
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={eventDeleteTodoDetail}
                >
                    <Delete />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={props.detail.completed_flag}
                        onChange={eventCheckTodoDetail}
                    />
                </ListItemIcon>
                <TextField
                    variant="standard"
                    margin="dense"
                    defaultValue={props.detail.name}
                    fullWidth
                    onChange={eventUpdateTodoDetail}
                />
            </ListItemButton>
        </ListItem>
    );
}

export default ToDoDtail