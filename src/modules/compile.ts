import { readFileSync } from "fs";
import { lexer } from "./lexer.js";

export function compile(source: string[]) {
    if (source[0].split('.')[source[0].split('.').length - 1].toLowerCase() === 'relem') {
        const fileData: string = readFileSync(source[0], "utf-8");

        const lexems: Array<Array<string>> = [];

        const strings = fileData.split("\n")
            .map((line: string) => line.trim())
            .filter((line: string) => line !== '');
        
        for (let str of strings) {
            lexems.push(lexer(str));
        }
        console.log(lexems)
        
    } else {
        console.log('File extetion not supported');
        process.exit();
    }
}