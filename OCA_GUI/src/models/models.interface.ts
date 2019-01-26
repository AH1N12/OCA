export interface Note{
	id: number,
	tittle: string,
	value: string,
	parentFolderId: number;
}

export interface Folder {
    id: number
    name: string,
    position: number,
    notes: Note[];
}

export interface Category {
    id: number
    name: string;
}

// export class Note{
// 	id: number;
// 	tittle: string;
// 	value: string;
// 	parentFolderId: number;
// 	active: boolean = false;
// }