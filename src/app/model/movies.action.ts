export class FetchYoutubeAPI{
    static readonly type = '[Any] Fetch youtube videos';
    constructor(){}
}

export class FetchStaticJson{
    static readonly type = '[Any] Fetch static youtube videos';
    constructor(){}
}

export class FetchYoutubeAPIWithPagination{
    static readonly type = '[Any]Fetch youtube data with pagination';
    constructor(public maxResults: number, public pageNumber:number){}
}

export class GetVideosForChanelOnClickOfItem{
    static readonly type = '[Any]Fetch videos for channel on click of item';
    constructor(public maxResult:number){}
}

export class GetCommentJsonData{
    static readonly type = '[Any] Fetch comments';
    constructor(){}
}

export class PostCommentJsonData{
    static readonly type = '[Any]Post only comments';
    constructor(public comment:[]){}
}