import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const drawerWidth = 240;

export default function Sidebar() {
  const navigate = useNavigate();

  const menu = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Tasks", path: "/tasks" },
    { text: "Teams", path: "/teams" },
    { text: "Comments", path: "/comments" },
  ];

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        {menu.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        <ListItem button onClick={handleLogout}>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{ color: "error" }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
}
