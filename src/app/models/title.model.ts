export type TitleVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;
export type TitleSizes = '--h1' | '--h2' | '--h3' | '--h4' | '--h5' | '--h6' | undefined;
export type TitleMods = '--colored' | '--colored-reverse';
export interface TitleModel {
    heading?: TitleVariants;
    sizes?: TitleSizes;
    customClass?: string;
    title?: string;
    modsClass?: TitleMods;
}
