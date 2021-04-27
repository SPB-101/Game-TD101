// @ts-ignore
import { app } from "./dist/server.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server started on port ", PORT);
});
