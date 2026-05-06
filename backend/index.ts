import { connectDB } from "./config/db";
import { createApp } from "./app";
import { env } from "./config/env";

const startServer = async () => {
  // CONNECT TO THE DATABASE
  await connectDB();

  // CREATE the APP
  const app = createApp();

  // running the server
  const PORT = env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
