// Type-level smoke test: compiled by `npm run types:check`, never executed.
import emojiNameMap = require('../lib');

// `get` accepts a plain name and a colon-wrapped one, and returns a string.
const heartEyes: string = emojiNameMap.get('heart_eyes');
const heartEyesColon: string = emojiNameMap.get(':heart_eyes:');

// A dynamically built name is still allowed, but may be missing.
const dynamic: string | undefined = emojiNameMap.get(String('heart_eyes'));

// An unknown name falls back to the loose overload.
const unknown: string | undefined = emojiNameMap.get('definitely_not_an_emoji');

// The map is indexable by a known name.
const smile: string = emojiNameMap.emoji.smile;

// @ts-expect-error unknown key on the map
emojiNameMap.emoji.definitely_not_an_emoji;

// @ts-expect-error a known name never resolves to `undefined`
const known: undefined = emojiNameMap.get('smile');

export { heartEyes, heartEyesColon, dynamic, unknown, smile, known };
