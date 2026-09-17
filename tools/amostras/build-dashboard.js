'use strict';

const fs = require('node:fs');
const path = require('node:path');

const raizProjeto = path.resolve(__dirname, '..', '..');
const arquivoOrigem = path.join(raizProjeto, 'index.html');
const pastaDist = path.join(raizProjeto, 'dist');
const arquivoDestino = path.join(
  pastaDist,
  'gestao-amostras-dashboard.html'
);

if (!fs.existsSync(arquivoOrigem)) {
  throw new Error(`Arquivo não encontrado: ${arquivoOrigem}`);
}

if (!fs.existsSync(pastaDist)) {
  fs.mkdirSync(pastaDist, { recursive: true });
}

const html = fs.readFileSync(arquivoOrigem, 'utf8');

fs.writeFileSync(arquivoDestino, html, 'utf8');

console.log('Dashboard gerado com sucesso.');
console.log(`Origem: ${arquivoOrigem}`);
console.log(`Destino: ${arquivoDestino}`);
console.log(`Tamanho: ${(Buffer.byteLength(html) / 1024).toFixed(1)} KB`);