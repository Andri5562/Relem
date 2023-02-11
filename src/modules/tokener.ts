function isDigit(value: string): boolean {
    return /^\d$/.test(value);
}

function isLetter(value: string): boolean {
    return /^[a-zA-Z]$/.test(value);
}

export function tokener (input: string): string[] {
    const result: string[] = [];

    let quote: boolean = false;
    let slash: boolean = false;
    let bslash: boolean = false;

    let tempString: string = '';

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
    }

    return result;
}