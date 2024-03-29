import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const useUpdateToDoMutateTask = () => {
    const queryClient = useQueryClient();
    const updateToDoMutation = useMutation((toDo) => axios.put("/api/toDos/" + toDo.id, { title: toDo.title }),
        {
            onMutate: async (toDo) => {
                await queryClient.cancelQueries("tiDiList");
                const previousToDoList = queryClient.getQueriesData("toDoList");
                queryClient.setQueriesData("toDoList", (oldToDoList) =>
                    oldToDoList.map((oldToDo) => {
                        if (oldToDo.id == toDo.id) {
                            return {
                                ...oldToDo,
                                title: toDo.title,
                            };
                        }
                        return oldToDo;
                    })
                );
                return { previousToDoList }
            },
            onSettled: () => {
                queryClient.invalidateQueries("toDoList");
            }
        });
    return { updateToDoMutation };
};

export default useUpdateToDoMutateTask;