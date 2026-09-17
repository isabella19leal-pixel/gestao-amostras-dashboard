'use strict';

const fs = require('node:fs');
const path = require('node:path');

const { renderDashboard } = require('./render-dashboard.js');

const raizProjeto = path.resolve(__dirname, '..', '..');

const arquivoOrigem = path.join(
  raizProjeto,
  'index.html'
);

const pastaDist = path.join(
  raizProjeto,
  'dist'
);

const pastaAssets = path.join(
  pastaDist,
  'assets'
);

const arquivoDestino = path.join(
  pastaDist,
  'gestao-amostras-dashboard.html'
);

const arquivoJavascript = path.join(
  pastaAssets,
  'app.js'
);

if (!fs.existsSync(arquivoOrigem)) {
  throw new Error(`Arquivo não encontrado: ${arquivoOrigem}`);
}

fs.mkdirSync(pastaDist, { recursive: true });
fs.mkdirSync(pastaAssets, { recursive: true });

const htmlBase = fs.readFileSync(
  arquivoOrigem,
  'utf8'
);

/*
 * O dashboard atual possui um pequeno script no início
 * para aplicar o tema e um grande script principal no fim.
 *
 * Extraímos somente o último bloco <script> inline,
 * preservando o restante do HTML.
 */
const inicioScript = htmlBase.lastIndexOf('<script>');
const fimScript = htmlBase.lastIndexOf('</script>');

if (
  inicioScript === -1 ||
  fimScript === -1 ||
  fimScript <= inicioScript
) {
  throw new Error(
    'Não foi possível localizar o JavaScript principal do dashboard.'
  );
}

const inicioConteudo = inicioScript + '<script>'.length;

const javascriptPrincipal = htmlBase
  .slice(inicioConteudo, fimScript)
  .trim();

const htmlSemJavascriptInline =
  htmlBase.slice(0, inicioScript) +
  '<script src="./assets/app.js"></script>' +
  htmlBase.slice(fimScript + '</script>'.length);

const htmlFinal = renderDashboard({
  htmlBase: htmlSemJavascriptInline
});

fs.writeFileSync(
  arquivoJavascript,
  javascriptPrincipal + '\n',
  'utf8'
);

fs.writeFileSync(
  arquivoDestino,
  htmlFinal,
  'utf8'
);

console.log('');
console.log('Dashboard gerado com sucesso.');
console.log(`HTML: ${arquivoDestino}`);
console.log(`JavaScript: ${arquivoJavascript}`);
console.log(
  `HTML: ${(Buffer.byteLength(htmlFinal) / 1024).toFixed(1)} KB`
);
console.log(
  `JavaScript: ${(Buffer.byteLength(javascriptPrincipal) / 1024).toFixed(1)} KB`
);
console.log('');