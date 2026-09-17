\# Contexto para o Claude Code — Dashboard Gestão de Amostras



\## Projeto



Repositório: gestao-amostras-dashboard



Objetivo:

Gerenciar o fluxo de amostras geotécnicas desde a coleta em campo até o recebimento, execução dos ensaios e conclusão.



O dashboard é publicado pelo GitHub Pages.



\## Regra principal



A SOND deve ser utilizada SOMENTE COMO FONTE DE LEITURA.



NUNCA:

\- alterar registros na SOND;

\- excluir informações da SOND;

\- alterar configurações da SOND;

\- enviar informações para a SOND sem autorização explícita.



O dashboard deve apenas consultar/importar informações.



\## Arquitetura desejada



Seguir o padrão de engenharia utilizado no projeto corporativo orcamento-dashboard:



dados/fontes

→ atualização

→ parse

→ cálculos

→ build-dashboard.js

→ render-dashboard.js

→ HTML final

→ GitHub Pages



Evitar concentrar dados, regras e interface em um único index.html.



\## Estrutura



tools/amostras/

\- atualizar-sond.js

\- parse-sond.js

\- compute-amostras.js

\- compute-bases.js

\- compute-fretes.js

\- build-dashboard.js

\- render-dashboard.js



data/

\- dados persistentes e configurações



dist/

\- arquivos gerados automaticamente



docs/

\- versão destinada à publicação



\## Fluxo logístico das amostras



COLETADA

→ NA\_BASE

→ AGUARDANDO\_FRETE

→ FRETE\_CONTRATADO

→ EM\_TRANSITO

→ CHEGOU\_SAO\_PEDRO

→ RECEBIDA

→ EM\_ENSAIO

→ ENSAIADA



\## Informações principais



O sistema deve controlar:



\- quantidade de amostras;

\- código da amostra;

\- cliente;

\- OS/contrato;

\- sondador;

\- líder;

\- base;

\- localização;

\- frete/caminhão;

\- chegada em São Pedro;

\- recebimento;

\- execução dos ensaios;

\- conclusão;

\- histórico de movimentações.



\## Bases



Deve ser possível visualizar:



\- todas as bases;

\- quantidade de amostras em cada base;

\- contratos vinculados a cada base;

\- contratos ainda sem base definida.



\## Fretes



Deve existir controle de:



\- fretes contratados;

\- previsão;

\- caminhão;

\- contratos transportados;

\- amostras previstas;

\- amostras efetivamente recebidas.



\## São Pedro



Deve existir uma visão específica das amostras que chegaram a São Pedro.



\## Manual x SOND



Dados lançados manualmente NÃO devem ser simplesmente substituídos pelos dados encontrados na SOND.



O sistema deve conciliar as duas origens.



Exemplo:



Quantidade informada/coletada: 250

Encontradas/recebidas pela SOND: 111

Saldo ainda não conciliado: 139



Quando novas amostras aparecerem na SOND, o saldo deve ser recalculado.



\## Histórico



Nunca apagar silenciosamente o histórico de uma amostra.



Alterações de status devem poder ser rastreadas.



\## Performance



O navegador não deve carregar todo o histórico desnecessariamente.



Priorizar:

\- dados separados da interface;

\- processamento antes da renderização;

\- filtros;

\- carregamento apenas do necessário;

\- arquivos gerados automaticamente.



\## Interface



Manter identidade visual corporativa em amarelo e preto.



O dashboard deve ser adequado para consulta por:

\- liderança;

\- coordenação;

\- gerência.



\## Projeto atual



O index.html existente é a versão atual do sistema.



Durante a refatoração:



\- não apagar o index.html original;

\- não remover funcionalidades existentes sem validar;

\- não alterar a branch main diretamente;

\- trabalhar primeiro na branch refatoracao-dashboard;

\- implementar mudanças em etapas pequenas;

\- testar antes de substituir qualquer versão publicada.



\## Segurança



Antes de alterações estruturais importantes:

1\. verificar git status;

2\. preservar a versão funcional;

3\. testar;

4\. somente depois realizar commit.



Nunca publicar automaticamente na main sem validação.

