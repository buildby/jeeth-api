import "dotenv/config";
import app from "./app";
import { Routes } from "./routes/routes";

const PORT: number = process.env.PORT as unknown as number || 4000;

// run the server
app.listen(PORT, (): void => console.log(`API running on http://localhost:${PORT}
API Version: 1.0.0
DATABASE_URL: ${process.env.DATABASE_URL}
`));
app.use('/api', Routes);
