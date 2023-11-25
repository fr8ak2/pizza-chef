export type picLoadingState = 'lazy' | 'eager' | 'auto' | undefined;

export interface PicModel {
    path: string | URL;
    width?: string | number;
    height?: string | number;
    alt?: string;
    lazy?: picLoadingState;
}
