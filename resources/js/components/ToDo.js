import { Card, CardContent, CardHeader, List } from "@mui/material";
import React from "react";
function ToDo() {
    return (
        <Card>
            <CardHeader title="Test ToDo" />
            <CardContent>
                <List>
                    {[0, 1, 2, 3].map((value) => {
                        return <p>{value}</p>
                    })}
                </List>
            </CardContent>
        </Card>
    );
}

export default ToDo;