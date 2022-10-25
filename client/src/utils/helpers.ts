export const cls = (...args: string[]): string => {
    return args.filter(Boolean).join(" ");
};