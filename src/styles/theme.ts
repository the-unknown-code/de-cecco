

type cssValue = number | string;

interface Font {
	family: string;
	weights: {
		light?: cssValue;
		normal?: cssValue;
		bold?: cssValue;
		bolder?:cssValue;
	};
}

interface Typography {
	fontFamily: string;
	fontWeight: cssValue;
	fontStyle: string;
	fontSize: string;
	lineHeight?: cssValue;
	letterSpacing?: cssValue;
}

export const breakpoints = {
	zero: 0,
	xxs: 1,
	xs: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1440,
	xxxl: 1600,
	xxxxl: 1920
} as const;

const mediaqueries = Object.keys(breakpoints).reduce((acc, size) => {
	acc[size] = `@media screen and (min-width: ${breakpoints[size]}px)`;
	return acc;
}, {});

export const fonts = {
	kinney: <Font>{
		family: 'Kinney',
		//italic
		weights: {
			normal: 500,
		},
	},
	bliss: <Font>{
		family: 'Bliss 2',
		weights: {
			light: 300,
			normal: 'normal',
			bold: 'bold',
			bolder: 900
		},
	},
	pathway: <Font>{
		family: 'Pathway Gothic One',
		weights: {
			normal: 300,
		},
	},
} as const;

export const colors = {
	blue: '#003a6b',
	cyanDark: '#036bac',
	cyan: '#0085ca',
	blueWhite: '#F8FCFF',
	green: '#31D82D',
	gray: '#bbbbbb',
	grayDark: '#707070',
	grayLight: '#eeeeee',
	grayDarker: '#aaaaaa',
	red: '#D8312D',
	white: '#ffffff',
	whiteGray: '#f8f8f8',
	yellow: '#ffd300',
	yellowDark: '#e8b52d',
	yellowLight: '#fff7d9',
	layer: 'rgba(1, 32, 57, 0.75)'
} as const;

export const sizes = {
	inputSmallHeight: 'var(--inputSmallHeight)', //60px
	inputFixedHeight: '60px',
	inputHeight: 'var(--inputHeight)', //80px
	availability: '120px', 
	container: '66.66667vw',
	containerLarge: '75vw',
} as const;

export const gutter = {
	xs: '20px',
	md: '38px',
	mdlg: '60px',
	lg: '80px',
	xl: '120px',
} as const;

export const space = {
	zero: '0px',
	xxs: '10px',
	xs: '20px', //20px
	sm: '28px',
	md: '38px',
	mdlg: '60px',
	lg: '80px', //80px
	xl: '160px',
	grid: '2.7777778889vw',
	checkout: 'var(--space-checkout)'
} as const;

export const radius = {
	default: '12px'
} as const;

// ↓ Needed by @aquestsrl/styled in theme provider ↓

export default {
	fonts: fonts,
	colors: colors,
	space: space,
	mediaquery: mediaqueries,
	gutter: gutter,
	columns: 12,
	typography: {
		base: <Typography>{
			fontFamily: fonts.bliss.family,
			fontWeight: fonts.bliss.weights.light,
			fontSize: '1.25rem',
			lineHeight: 1.87,
		},
		baseStrong: <Typography>{
			fontFamily: fonts.bliss.family,
			fontWeight: fonts.bliss.weights.normal,
			fontSize: '1.25rem',
			lineHeight: 1.87,
		},
		small: <Typography>{
			fontFamily: fonts.bliss.family,
			fontWeight: fonts.bliss.weights.light,
			fontSize: '1rem',
			lineHeight: 1.87,
		},
		smallStrong: <Typography>{
			fontFamily: fonts.bliss.family,
			fontWeight: fonts.bliss.weights.normal,
			fontSize: '1rem',
			lineHeight: 1.87,
		},
		filter: <Typography>{
			fontFamily: fonts.bliss.family,
			fontWeight: fonts.bliss.weights.light,
			fontSize: '1.25rem',
			lineHeight: 1.87,
		},
		emphasizeBase: <Typography>{
			fontFamily: fonts.pathway.family,
			fontWeight: fonts.pathway.weights.normal,
			fontSize: '1rem',
			lineHeight: 1.25,
			letterSpacing: '0.04em',
		},
		emphasizeSmall: <Typography>{
			fontFamily: fonts.pathway.family,
			fontWeight: fonts.pathway.weights.normal,
			fontSize: '0.85rem',
			lineHeight: 1.2,
			letterSpacing: '0.04em'
		},
		baseTitle: <Typography>{
			fontFamily: fonts.pathway.family,
			fontWeight: fonts.pathway.weights.normal,
			fontSize: '1.125rem',
			lineHeight: 1.5,
			letterSpacing: 0,
		},
		itemTitle: <Typography>{
			fontFamily: fonts.kinney.family,
			fontWeight: fonts.kinney.weights.normal,
			fontSize: '1.5rem',
			fontStyle: 'italic',
			lineHeight: 1.33,
			letterSpacing: 0,
		},
		price: <Typography>{
			fontFamily: fonts.bliss.family,
			fontWeight: fonts.bliss.weights.light,
			fontSize: '1.625rem',
			lineHeight: 1.2,
			letterSpacing: 0,
		},
		oldPrice: <Typography>{
			fontFamily: fonts.bliss.family,
			fontWeight: fonts.bliss.weights.light,
			fontSize: 'var(--oldPrice)',
			lineHeight: 1.5,
			letterSpacing: 0,
		},
		priceXl: <Typography>{
			fontFamily: fonts.bliss.family,
			fontWeight: fonts.bliss.weights.light,
			fontSize: 'var(--priceXl)',
			lineHeight: 1.2,
			letterSpacing: 0,
		},	
		priceBig: <Typography>{
			fontFamily: fonts.pathway.family,
			fontWeight: fonts.pathway.weights.normal,
			fontSize: '1.5rem',
			lineHeight: 1.2,
			letterSpacing: 0,
		},	
		heading1: <Typography>{
			fontFamily: fonts.kinney.family,
			fontWeight: fonts.kinney.weights.normal,
			fontStyle: 'italic',
			fontSize: 'var(--heading1)',
			lineHeight: 1.2,
		},
		bigheading1: <Typography>{
			fontFamily: fonts.kinney.family,
			fontWeight: fonts.kinney.weights.normal,
			fontStyle: 'italic',
			fontSize: 'var(--bigheading1)',
			lineHeight: 1.45,
		},
		heading2: <Typography>{
			fontFamily: fonts.kinney.family,
			fontWeight: fonts.kinney.weights.normal,
			fontStyle: 'italic',
			fontSize: '2.625rem',
			lineHeight: 1.45,
		},
		heading3: <Typography>{
			fontFamily: fonts.bliss.family,
			fontWeight: fonts.bliss.weights.normal,
			fontSize: 'var(--heading3)',
			lineHeight: 1.45,
		},

		select: <Typography>{
			fontFamily: fonts.pathway.family,
			fontWeight: fonts.pathway.weights.normal,
			fontSize: '0.85rem',
			lineHeight: 1.87,
		},
	},
};
