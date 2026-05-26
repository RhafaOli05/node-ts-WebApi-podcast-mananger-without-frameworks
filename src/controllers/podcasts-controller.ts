import { IncomingMessage, ServerResponse } from "http"; 
import { serviceListEpisodes } from "../services/list-episodes-service"; 
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

const DEFALT_CONTENT = { "content-type": ContentType.JSON };

// Função para listar todos os episódios
export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
        
    const content: PodcastTransferModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, DEFALT_CONTENT);
    res.write(JSON.stringify(content.body));
    
    res.end();
};

// Função para filtrar episódios por nome do podcast
export const getfilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, DEFALT_CONTENT);
    res.write(JSON.stringify(content.body));
    
    res.end();
};