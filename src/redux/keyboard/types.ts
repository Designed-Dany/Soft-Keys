export type KeyboardProps = {
	category: number;
	id: string;
	imageUrl: string;
	price: number;
	rating: number;
	sizes: number[];
	title: string;
	types: number[];
}

export type SearchKeyboardParams = {
	order: string;
	sortBy: string;
	category: string;
	search: string;
	currentPage: string;
}

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'completed',
	ERROR = 'error'
}


export type keyboardSliceState = {
	items: any
	status: Status;
}