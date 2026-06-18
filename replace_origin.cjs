const fs = require('fs');
const file = '/Users/furtunaanatolie/Documents/Projects/PROJECT GPT-GEMINI/Miravelys web copy/src/i18n/originCopy.js';
let content = fs.readFileSync(file, 'utf8');

const replacements = [
  // English
  [/"I read book after book and visited the spaces of different gurus, hoping the search would finally settle, until one day I came across a very simple principle that changed everything."/g,
   '"I explored many paths and spent a long time searching, hoping the search would finally settle, until one day I came across a very simple principle that changed everything."'],
  // Russian
  [/"Я читал книгу за книгой, побывал в пространствах разных гуру, надеясь, что этот поиск наконец уляжется, пока однажды не наткнулся на один очень простой принцип, который перевернул всё."/g,
   '"Я исследовал множество путей и долго искал ответы, надеясь, что этот поиск наконец уляжется, пока однажды не наткнулся на один очень простой принцип, который перевернул всё."'],
  // Romanian
  [/"Am citit carte după carte, am fost în preajma diferiților guru, sperând că această căutare se va liniști, până când, într-o zi, am dat peste un principiu foarte simplu care a schimbat totul."/g,
   '"Am explorat multe căi și am petrecut mult timp căutând răspunsuri, sperând că această căutare se va liniști, până când, într-o zi, am dat peste un principiu foarte simplu care a schimbat totul."'],
  // French
  [/"J'ai lu livre après livre et fréquenté les cercles de différents gourous, espérant que cette quête s'apaise enfin, jusqu'à ce qu'un jour je tombe sur un principe très simple qui change tout."/g,
   '"J\'ai exploré de nombreuses voies et cherché longuement des réponses, espérant que cette quête s\'apaise enfin, jusqu\'à ce qu\'un jour je tombe sur un principe très simple qui change tout."'],
  // Hindi
  [/"मैंने एक के बाद एक किताबें पढ़ीं, विभिन्न गुरुओं के स्थानों का दौरा किया, इस उम्मीद में कि यह खोज आखिरकार शांत होगी, जब तक एक दिन एक बहुत सरल सिद्धांत सामने नहीं आया जिसने सब कुछ बदल दिया。"/g,
   '"मैंने कई रास्ते खोजे और लंबे समय तक जवाब तलाशे, इस उम्मीद में कि यह खोज आखिरकार शांत होगी, जब तक एक दिन एक बहुत सरल सिद्धांत सामने नहीं आया जिसने सब कुछ बदल दिया।"'],
  // Hindi (actual)
  [/"मैंने एक के बाद एक किताबें पढ़ीं, विभिन्न गुरुओं के स्थानों का दौरा किया, इस उम्मीद में कि यह खोज आखिरकार शांत होगी, जब तक एक दिन एक बहुत सरल सिद्धांत सामने नहीं आया जिसने सब कुछ बदल दिया。"/g,
   '"मैंने कई रास्ते खोजे और लंबे समय तक जवाब तलाशे, इस उम्मीद में कि यह खोज आखिरकार शांत होगी, जब तक एक दिन एक बहुत सरल सिद्धांत सामने नहीं आया जिसने सब कुछ बदल दिया।"'],
  [/"मैंने एक के बाद एक किताबें पढ़ीं, विभिन्न गुरुओं के स्थानों का दौरा किया, इस उम्मीद में कि यह खोज आखिरकार शांत होगी, जब तक एक दिन एक बहुत सरल सिद्धांत सामने नहीं आया जिसने सब कुछ बदल दिया।"/g,
   '"मैंने कई रास्ते खोजे और लंबे समय तक जवाब तलाशे, इस उम्मीद में कि यह खोज आखिरकार शांत होगी, जब तक एक दिन एक बहुत सरल सिद्धांत सामने नहीं आया जिसने सब कुछ बदल दिया।"'],
  // Chinese
  [/"我读了一本又一本书，造访了不同大师的空间，希望这些寻觅终能安定下来，直到有一天，我偶然发现了一个非常简单却能改变一切的原则。"/g,
   '"我探索了许多道路并寻找了很长时间，希望这些寻觅终能安定下来，直到有一天，我偶然发现了一个非常简单却能改变一切的原则。"'],
  // German
  [/"Ich las Buch um Buch und besuchte die Räume verschiedener Gurus in der Hoffnung, dass diese Suche endlich zur Ruhe kommt, bis ich eines Tages auf ein sehr einfaches Prinzip stieß, das alles veränderte."/g,
   '"Ich habe viele Wege erkundet und lange nach Antworten gesucht, in der Hoffnung, dass diese Suche endlich zur Ruhe kommt, bis ich eines Tages auf ein sehr einfaches Prinzip stieß, das alles veränderte."'],
  // Japanese
  [/"私は本を次々と読み、異なる指導者（グル）の空間を訪れ、この探求がようやく静まることを願っていましたが、ある日、すべてを変える非常にシンプルな原則に出会いました。"/g,
   '"私は多くの道を探求し、長い間答えを探し求め、この探求がようやく静まることを願っていましたが、ある日、すべてを変える非常にシンプルな原則に出会いました。"'],
  // Spanish
  [/"Leí libro tras libro y frecuenté los espacios de diferentes gurús, esperando que la búsqueda por fin se aquietara, hasta que un día me topé con un principio muy simple que lo cambió todo."/g,
   '"Exploré muchos caminos y pasé mucho tiempo buscando respuestas, esperando que la búsqueda por fin se aquietara, hasta que un día me topé con un principio muy simple que lo cambió todo."'],
  // Portuguese
  [/"Li livro após livro e visitei os espaços de diferentes gurus, na esperança de que a busca finalmente se acalmasse, até que um dia me deparei com um princípio muito simples que mudou tudo."/g,
   '"Explorei muitos caminhos e passei muito tempo procurando respostas, na esperança de que a busca finalmente se acalmasse, até que um dia me deparei com um princípio muito simples que mudou tudo."']
];

let replaced = 0;
for (const [search, replace] of replacements) {
  const newContent = content.replace(search, replace);
  if (newContent !== content) replaced++;
  content = newContent;
}

fs.writeFileSync(file, content, 'utf8');
console.log(`Replacements complete: ${replaced}`);
