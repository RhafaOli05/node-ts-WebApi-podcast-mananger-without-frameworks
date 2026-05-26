import { getfilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import * as http from "http";

export const app = async (req:http.IncomingMessage, res:http.ServerResponse) => {
    
    //queryString
    //http://localhost:3000/api/episode?p=Flow
    const baseUrl = req.url?.split("?")[0];

    // Rota para listar todos os episódios
    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodes(req, res);
    }

    // Rota para filtrar episódios por nome do podcast
    if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getfilterEpisodes(req, res);
    }
  }