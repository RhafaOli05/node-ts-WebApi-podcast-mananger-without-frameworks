import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

export const pathData = path.join(__dirname, "../repositories/podcasts.json");

// podcastName é opcional com "?" para não dar erro quando for chamado sem o parâmetro
export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    const language = "utf-8";
    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

// Se o podcastName for passado, filtra os episódios pelo nome do podcast
    if(podcastName){
        jsonFile = jsonFile.filter(
            (podcast: PodcastModel) => podcast.podcastName.toLowerCase() === podcastName.toLowerCase()
        );
    }

    return jsonFile;
}