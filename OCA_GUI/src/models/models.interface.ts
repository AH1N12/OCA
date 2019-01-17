export interface Note{
	id: number,
	tittle: string,
	value: string,
	parentFolderId: number;
}

export interface Folder {
    id: number
    name: string,
    notes: Note[];
}

// export class Note{
// 	id: number;
// 	tittle: string;
// 	value: string;
// 	parentFolderId: number;
// 	active: boolean = false;
// }