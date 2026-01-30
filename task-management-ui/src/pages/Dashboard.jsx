import Layout from "../Components/Layout";
import { Typography, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function Dashboard() {
  const [stats, setStats] = useState({
    tasks: 0,
    teams: 0,
    comments: 0,
  });

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const [tasksRes, teamsRes, commentsRes] = await Promise.all([
          api.get("/tasks"),
          api.get("/teams"),
          api.get("/comments"),
        ]);

        if (isMounted) {
          setStats({
            tasks: tasksRes.data.length,
            teams: teamsRes.data.length,
            comments: commentsRes.data.length,
          });
        }
      } catch (err) {
        console.error(err);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Layout>
      <Typography variant="h4" mb={3}>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Tasks</Typography>
            <Typography variant="h4">{stats.tasks}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Teams</Typography>
            <Typography variant="h4">{stats.teams}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Comments</Typography>
            <Typography variant="h4">{stats.comments}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
