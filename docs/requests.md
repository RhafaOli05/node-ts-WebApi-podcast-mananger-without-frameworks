# Podcast mananger

### Descrição
Um app ao estilo Netflix, aonde se possa centralizar diferentes episódios de podcasts separados por categorias

### Domínio
Podcasts feitos em vídeo

### Features/funcionalidades
 - Listas episódios dos podcasts em sessões de categorias
    - [saúde, fitness, bodybuilder mentalidade, humor, esporte, corrida] 
 - Filtrar episódios por nome de podcasts  


## Como

### Feature:
 - Listar episódios os podcasts em sessões de categorias

 #### Como vou implementar: 
 GET: retorna lista de episódios
 GET: retorna em uma API REST (json) o nome do episódio, nome do podcast, imagem de capa, link  

response:

 ```js
 [
    {
    podcastName: "Flow";
    videoId: "pQSuQmUfS30";
    episode: "CBUM - Flow #319" ;
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg";
    link: "https://www.youtube.com/live/pQSuQmUfS30?si=lz3MBEwck5gMSiUU";
    categories: ["saúde", "esporte" ,"bodybuilder"]
    },
    {
    podcastName: "Flow";
    videoId: "4KDGTdi0V4I";
    episode: "RUBENS BARRICHELLO - Flow #339";
    cover: "https://i.ytimg.com/vi/4KDGTdi0V4I/maxresdefault.jpg";
    link: "https://www.youtube.com/watch?v=4KDGTdi0V4I";
    categories: ["esporte","corrida"]
    }
 ]
 ```

GET: retorna lista de episódios baseado em um parâmetro enviado pelo cliente do nome do podcast