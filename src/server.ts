import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

/**
 * GET = Busca
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica.
 */

/*
app.get("/", (request, response ) => {
    return response.json({
        message: "Ola NLW",
    });
});

app.post("/", (request, response ) =>{
    return response.json({message: "Usuário salvo com sucesso!"});
});
*/

http.listen(3333, () => console.log("Serve is running on port 3333"));
