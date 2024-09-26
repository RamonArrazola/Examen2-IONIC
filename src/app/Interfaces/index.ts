export interface NewsResponse {
    albums: Albums;
}

export interface Albums {
    album:   Album[];
    "@attr": AlbumsAttr;
}

export interface AlbumsAttr {
    tag:        string;
    page:       string;
    perPage:    string;
    totalPages: string;
    total:      string;
}

export interface Album {
    name:    string;
    mbid:    string;
    url:     string;
    artist:  Artist;
    image:   Image[];
    //"@attr": AlbumAttr;
}

export interface AlbumAttr {
    rank: string;
}

export interface Artist {
    name: string;
    mbid: string;
    url:  string;
}

export interface Image {
    "#text": string;
    size:    Size;
}

export enum Size {
    Extralarge = "extralarge",
    Large = "large",
    Medium = "medium",
    Small = "small",
}

export interface AlbumPage {
    [key: string]: {
        page: number,
        albums: Album[]
    }
}
