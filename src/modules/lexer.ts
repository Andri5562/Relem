import {tokener} from './tokener.js';

export function lexer (string: string): string[] {
    const result: string[] = tokener(string);
    
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].trim();
    }

    return result.filter(c => c != '');
}