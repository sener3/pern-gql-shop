export const cls = (...args: string[]): string => {
    return args.filter(Boolean).join(" ");
};

export const capitalize = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}