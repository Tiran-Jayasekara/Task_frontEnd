import { TopBar, CardDesign } from "components";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useUserStore } from "store";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  const userData = useUserStore((state) => state.user);
  console.log(userData);

  return (
    <>
      <TopBar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <CardDesign />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardDesign />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardDesign />
        </Grid>
      </Grid>
    </>
  );
}
export default Home;
