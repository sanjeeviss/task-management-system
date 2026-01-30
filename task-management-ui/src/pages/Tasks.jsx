import Layout from "../Components/Layout";
import { Container, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Layout>
      <Typography variant="h5" mb={2}>Tasks</Typography>
      {tasks.map(t => (
        <Container key={t.id} sx={{ mb: 2, p:2, border: "1px solid #ccc", borderRadius: 2 }}>
          <Typography variant="h6">{t.title}</Typography>
          <Typography>Status: {t.status}</Typography>
          <Typography>Priority: {t.priority}</Typography>
          <Button size="small" onClick={async()=>{await api.delete(`/tasks/${t.id}`); fetchTasks()}}>Delete</Button>
        </Container>
      ))}
    </Layout>
  );
}
