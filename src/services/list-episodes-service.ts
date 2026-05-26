import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async ()=>{
    
    //define a interface de retorno (contrato)
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    //busca os dados
    const data = await repositoryPodcast();

    //verifica se tem conteúdo
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    }
    return responseFormat;
};

