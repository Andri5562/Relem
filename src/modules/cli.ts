import { compile } from "./compile.js";

const commandList = new Map([
    ['help', 'Show all commands.'],
    ['version', 'Show current version.'],
    ['compile', 'Compile you`re project or file.'],
]);

export function cli(args: string[]) {
    if (args.length === 0) {
        args.push('help');
    }

    switch (args[0]) {
        case 'help':
            console.log(Array.from(commandList.values()).join('\n'));
            break;
        case 'version':
            console.log('0.0.1');
            break;
        case 'compile':
            compile(args.slice(1));
            break;
        default:
            console.log(`Unknown command ${args[0]}`);
            process.exitCode = 1;
            break;
    }
}