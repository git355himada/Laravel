import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const useDeleteToDoDetailMutateTask = () => 
{
    const queryClient = useQueryClient();
    const deleteToDoDetailMutation = useMutation
    (
        (toDoDetail) => axios.delete("/api/toDoDetails/" + toDoDetail.id),
        {
            onMutate: async (toDoDetail) => 
            {
                // 実行中の取得処理をキャンセル
                await queryClient.cancelQueries("toDoList");

                // 既存のToDoリストを取得する
                const previousToDoList = queryClient.getQueriesData("toDoList");

                // ToDoリストのキャッシュを更新する
                queryClient.setQueryData("toDoList", (oldToDoList) =>
                    oldToDoList.map((oldToDo) => 
                    {
                        let newToDoDetails = [];
                            oldToDo.todo_details.map((oldToDoDetail) => 
                            {
                                if (oldToDoDetail.id != toDoDetail.id) 
                                {
                                    newToDoDetails.push(toDoDetail);
                                } 
                            });
                            oldToDo.todo_details = newToDoDetails;
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
    return { deleteToDoDetailMutation };
};

export default useDeleteToDoDetailMutateTask;