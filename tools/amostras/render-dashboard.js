'use strict';

/**
 * Responsável pela renderização final do Dashboard de Gestão de Amostras.
 *
 * Nesta primeira etapa, recebe o HTML atual sem alterações.
 * A refatoração será feita gradualmente para não quebrar
 * nenhuma funcionalidade existente.
 */
function renderDashboard({ htmlBase }) {
  if (!htmlBase) {
    throw new Error('htmlBase não foi informado para renderDashboard.');
  }

  return htmlBase;
}

module.exports = { renderDashboard };