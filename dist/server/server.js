import http from "http";
import path from "path";
import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
class App {
    constructor(port) {
        this.port = port;
        const app = express();
        app.use(express.static(path.join(__dirname, '../client')));
        app.use('/build/three.module.js', express.static(path.join(__dirname, '../../node_modules/three/build/three.module.js')));
        this.server = new http.Server(app);
    }
    Start() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}.`);
        });
    }
}
new App(port).Start();
