import Layout from "../Components/Layout";
import { Typography, TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");
  const [taskId, setTaskId] = useState("");

  const fetchComments = async () => {
    const res = await api.get("/comments");  // all comments
    setComments(res.data);
  };

  const addComment = async () => {
    await api.post("/comments", { message, taskId: parseInt(taskId) });
    setMessage("");
    setTaskId("");
    fetchComments();
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" mb={2}>Comments</Typography>
      
      <TextField
        label="Task ID"
        value={taskId}
        onChange={e => setTaskId(e.target.value)}
        sx={{ mr: 2 }}
      />
      <TextField
        label="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button variant="contained" onClick={addComment}>Add Comment</Button>

      <List>
        {comments.map(c => (
          <ListItem key={c.id} sx={{ mt: 1, border: "1px solid #ccc", borderRadius: 2 }}>
            <ListItemText primary={c.message} secondary={`Task ID: ${c.taskId}`} />
          </ListItem>
        ))}
      </List>
    </Layout>
  );
}
