export type RecordsResponse = {
    content: RecordItem[];
    totalPages: number;

}

export type RecordItem ={
            id: number,
            moment: string,
            name: string,
            age: number,
            gameTitle: string,
            gamePlatform: platform,
            genreName: string
}

export type platform = 'XBOX '| 'PC' | 'PLAYSTATION'