import Layout from "../Components/Layout";
import { Typography, TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [name, setName] = useState("");
  const [managerId, setManagerId] = useState("");

  const fetchTeams = async () => {
    const res = await api.get("/teams");
    setTeams(res.data);
  };

  const createTeam = async () => {
    await api.post("/teams", { name, managerId: parseInt(managerId) });
    setName("");
    setManagerId("");
    fetchTeams();
  };

  const deleteTeam = async (id) => {
    await api.delete(`/teams/${id}`);
    fetchTeams();
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" mb={2}>Teams</Typography>
      
      <TextField
        label="Team Name"
        value={name}
        onChange={e => setName(e.target.value)}
        sx={{ mr: 2 }}
      />
      <TextField
        label="Manager ID"
        value={managerId}
        onChange={e => setManagerId(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button variant="contained" onClick={createTeam}>Create Team</Button>

      <List>
        {teams.map(team => (
          <ListItem key={team.id} sx={{ mt: 1, border: "1px solid #ccc", borderRadius: 2 }}>
            <ListItemText primary={team.name} secondary={`Manager ID: ${team.managerId}`} />
            <Button variant="outlined" color="error" onClick={() => deleteTeam(team.id)}>Delete</Button>
          </ListItem>
        ))}
      </List>
    </Layout>
  );
}
