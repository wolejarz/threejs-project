import http from "http";
import path from "path";
import express from "express";
const port = 3000;
class App {
    constructor(port) {
        this.port = port;
        const app = express();
        app.use(express.static(path.join(__dirname, '../client')));
        this.server = new http.Server(app);
    }
    Start() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}.`);
        });
    }
}
new App(port).Start();
