import app from "./app";

app.listen(3000);

console.log("server on port", app.get("port"));
