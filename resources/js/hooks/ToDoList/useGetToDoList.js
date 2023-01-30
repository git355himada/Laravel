import axios from "axios"
import { useQuery, useQueryClient } from "react-query";

// 非同期処理
const getToDoList = async () => {
    const { data } = await axios.get("/api/toDos");
    return data;
}

const useGetToDoList = () => {
    const queryClient = useQueryClient();
    return useQuery("toDoList", getToDoList, {
        onError: () => {
            queryClient.setQueryData("toDoList", null);
        }
    });
}

export default useGetToDoList;