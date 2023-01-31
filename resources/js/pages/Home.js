import React from "react";
import ReactDOM from "react-dom";
import { Fab, Grid } from "@mui/material";
import ToDo from "../components/ToDo";
import { useCurrentToDoList, useGetToDoList } from "../hooks/ToDoList";
import { useStoreToDoMutateTask } from "../hooks/ToDo";
import { Add } from "@mui/icons-material";

const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
};

function Home() {
    const { isLoading } = useGetToDoList();
    const toDoList = useCurrentToDoList();

    if (isLoading) return "Now Loading......";

    /** 追加ボタン押下イベント */
    // const { storeToDoMutation } = useStoreToDoMutateTask();
    // const eventStoreTodo = (event) => {
    //     storeToDoMutation.mutate();
    // };

    return (
        <div>
            <Grid container spacing={2}>
                {toDoList.map((toDo) => (
                    <Grid item key={toDo.id} xs={4}>
                        <ToDo toDo={toDo} />
                    </Grid>
                ))};
            </Grid>
            {/* <Fab
                color="primary"
                aria-label="add"
                sx={fabStyle}
                onClick={eventStoreTodo}
            >
                <Add />
            </Fab> */}
        </div>
    );
}

export default Home;
