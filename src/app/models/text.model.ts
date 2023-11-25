export type TextClass = 'small' | 'big';

export interface TextModel {
    customClass?: string;
    type?: TextClass;
    content?: string;
}
