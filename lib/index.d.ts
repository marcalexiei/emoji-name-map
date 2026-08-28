import { EmojiName } from './emoji-name';

declare const emojiNameMap: {
    emoji: Record<EmojiName, string>;
    /** Gets the emoji character (unicode) by name, with or without colons. */
    get(name: EmojiName | `:${EmojiName}:`): string;
    get(name: string): string | undefined;
};

export = emojiNameMap;
