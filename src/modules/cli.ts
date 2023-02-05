import { readFileSync } from "fs";
import { resolve } from "path";
import { compile } from "./compile.js";

const commandList: string[] = [
    'help - Show all commands.',
    'version - Show current version.',
    'compile - Compile you`re project or file.'
];

export function cli(args: string[]) {
    if (args.length === 0) {
        args.push('help');
    }

    switch (args[0]) {
        case 'help':
            console.log(commandList.join('\n'));
            break;
        case 'version':
            console.log('0.0.1');
            break;
        case 'compile':
            args.slice(1);
            compile(args);
            break;
        default:
            console.log(`Unknown command ${args[0]}`);
            process.exit();
    }
}