import app from "./app";

const PORT: number = process.env.PORT as unknown as number || 3000;

// run the server
app.listen(PORT, (): void => console.log(`API running on http://localhost:${PORT}
API Version: 1.0.0
DATABASE_URL: ${process.env.DATABASE_URL}
`));