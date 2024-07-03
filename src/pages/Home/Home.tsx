import { TopBar, CardDesign } from "components";
import Grid from "@mui/material/Grid";
import { useUserStore } from "states/userStore";
import { useTokenStore } from "states/tokenStore";

function Home() {
  const userData = useUserStore((state) => state.user);
  const token = useTokenStore((state) => state.token);
  console.log(userData);
  console.log(token);

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
export { Home };
