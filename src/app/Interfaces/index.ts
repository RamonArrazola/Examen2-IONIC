export interface AlbumResponse {
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
    "@attr": AlbumAttr;
    favorito?: boolean;
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

//Search 
export interface SearchResponse {
    results: Results;
}

export interface Results {
    "opensearch:Query":        OpensearchQuery;
    "opensearch:totalResults": string;
    "opensearch:startIndex":   string;
    "opensearch:itemsPerPage": string;
    albummatches:              Albummatches;
    "@attr":                   Attr;
}

export interface Attr {
    for: string;
}

export interface Albummatches {
    album: Album[];
}

export interface OpensearchQuery {
    "#text":     string;
    role:        string;
    searchTerms: string;
    startPage:   string;
}
// Artist Search 
export interface ArtistSearchResponse {
    topalbums: Topalbums;
}

export interface Topalbums {
    album:   Album[];
    "@attr": AAttr;
}

export interface AAttr {
    artist:     ArtistEnum;
    page:       string;
    perPage:    string;
    totalPages: string;
    total:      string;
}

export enum ArtistEnum {
    Cher = "Cher",
}

export interface ArtistClass {
    name: ArtistEnum;
    mbid: string;
    url:  string;
}

