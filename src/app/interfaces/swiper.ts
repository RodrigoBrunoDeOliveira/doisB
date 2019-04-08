export interface Swiper extends Array<SwiperValue>{}

export interface SwiperValue {
	active: boolean;
	img: string;
	swiperData?: SwiperData;
}

export interface SwiperData {
	date?: string;
	name?: string;
	office?: string;
	text?: string;
	title?: string;
	type?: string;
}