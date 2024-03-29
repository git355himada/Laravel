import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
const useUpdateToDoDetailMutateTask = () => {
    const queryClient = useQueryClient();
    const updateToDoDetailMutation = useMutation((toDoDetail) =>
        axios.put("/api/toDoDetails/" + toDoDetail.id, {
            name: toDoDetail.name,
            completed_flag: toDoDetail.completed_flag
        }),
        {
            onMutate: async (toDoDetail) => {

                await queryClient.cancelQueries("toDoList");

                const previousToDoList = queryClient.getQueriesData("toDoList");

                queryClient.setQueryData("toDoList", (oldToDoList) =>
                    oldToDoList.map((oldToDo) => {
                        if (oldToDo.id == toDoDetail.to_do_id) {
                            let newToDoDetails = [];
                            oldToDo.todo_details.map((oldToDoDetail) => {
                                if (oldToDoDetail.id == toDoDetail.id) {
                                    newToDoDetails.push({
                                        ...oldToDoDetail,
                                        name: toDoDetail.name,
                                        completed_flag:
                                            toDoDetail.completed_flag,
                                    });
                                } else {
                                    newToDoDetails.push(oldToDoDetail);
                                }
                            });
                            oldToDo.todo_details = newToDoDetails;
                        }
                        return oldToDo;
                    })
                );

                return { previousToDoList };
            },
            onSettled: () => {
                queryClient.invalidateQueries("toDoList")
            },
        }
    );
    return { updateToDoDetailMutation };
};

export default useUpdateToDoDetailMutateTask;