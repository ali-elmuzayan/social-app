import { connectDB } from "./config/db";
import { createApp } from "./app";
import { env } from "./config/env";

const startServer = async () => {
  const app = createApp();
  const PORT = env.PORT || 5000;

  // Bind the HTTP listener FIRST so the health endpoint is always reachable
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT} [${env.NODE_ENV}]`);
  });

  // Attempt DB connection after the server is already accepting requests
  try {
    await connectDB();
  } catch (error) {
    console.warn(
      "⚠️  Could not connect to MongoDB. Server is running without a database.\n",
      error,
    );
  }
};

startServer();
