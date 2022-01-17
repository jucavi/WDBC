import { franc } from 'franc';
const langsModule = await import('langs');
let langs = langsModule.default;
const colorsModule = await import('colors');
colorsModule.default;

const input = process.argv[2] || '';
const langCode = franc(input);
const language = langs.where('3', langCode);

if (langCode === 'und' || !language) {
  console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!".red);
} else {
  console.log(`Our best guess is: ${language.name}`.green);
}
