const presets = {
  BDAC: {
    jornal: 'BDAC',
    data: '10/04/2026',
    horarioInicio: '07:30',
    horarioFim: '09:00',
    equipe: 'Igor e Cladeylton',
    switcher: {
      playout: 'normal',
      integracao: 'normal',
      estacoes: 'normal',
      graficas: 'normal',
      mesaAudio: 'normal',
      lu610: '4,960 Kbps',
    },
    estudio: {
      microfones: 'normal',
      pilhas: 'normal',
      iluminacao: 'normal',
      celulares: 'normal',
    },
    execucao: {
      horarioTeste: '07:23',
      horarioPreparacao: '07:10',
      horarioPosicionamento: '07:15',
      horarioTestePlayout: '07:22',
      horarioTesteMicrofones: '07:23',
      nomeEditorChefe: 'Luana Rodrigues',
      modoPlayout: 'integração eMAM/Anews',
      observacao: 'Todos os sistemas operando normalmente durante a execução do jornal.',
    },
    ocorrenciasTecnicas: [
      'A curadoria no Visão apresentou instabilidade e não estava subindo imagens ou vídeos. Para não prejudicar a operação, as interações foram inseridas manualmente pela galeria. Após o jornal, será realizada a limpeza de cache e cookies do navegador, além da reconexão do WhatsApp na curadoria. Caso o problema persista, será aberto um chamado para a equipe de desenvolvimento verificar se há alguma falha na API.',
      'Durante a interação com o g1 no telão, foi identificada uma falha de comunicação no touchscreen. O técnico Igor realizou a reconexão do cabo, e o touch voltou a funcionar normalmente.',
    ],
    ocorrenciasOperacionais: [
      'Não foram observados outros erros operacionais durante a execução do jornal.',
    ],
    outrasInfo:
      'Às 07h10, a equipe técnica iniciou a preparação e os testes dos equipamentos para a transmissão do jornal, com todos os sistemas operando normalmente.\n\nÀs 07h15, as equipes de Tecnologia e Jornalismo iniciaram o posicionamento no switcher para a execução do jornal.\n\nÀs 07h22, foi realizado teste de Playout, após solicitação da central via intercom.\n\nÀs 07h23, foram realizados os testes de microfones e do ponto eletrônico. Sem registro de falhas.\n\nA Editora-chefe Luana Rodrigues utilizou os playouts em modo integrado (eMAM/Anews), sem registro de falhas.\n\nA equipe de tecnologia auxiliou a equipe de Jornalismo no estúdio e na microfonação dos entrevistados.\n\nA comunicação com a Central Casting, via Tellos (Intercom), permaneceu normal durante todo o jornal.',
    participacoes: [
      {
        bloco: '2',
        equipeConvidado: 'Emerson Costa',
        quadro: 'Seus Direitos',
        cenario: 'virtual',
        observacao: 'Sem registro de falha.',
      },
      {
        bloco: '3',
        equipeConvidado: 'Equipe do GE',
        quadro: 'Momento esporte',
        cenario: 'real',
        observacao: 'Sem registro de falha.',
      },
    ],
    entradasAoVivo: [
      {
        ativa: 'sim',
        praca: 'Rio Branco (RBR)',
        equipamento: 'LuS300',
        reporter: 'Amanda Oliveira',
        conectado: '07h28',
        testado: '07h29',
        entrada: '07h35',
        encerramento: '07h39',
        resultado: 'sucesso',
        observacao: 'Transmissão realizada com sucesso.',
      },
      {
        ativa: 'sim',
        praca: 'Cruzeiro do Sul (CZS)',
        equipamento: 'LuS300',
        reporter: 'Carla Carvalho',
        conectado: '07h37',
        testado: '07h39',
        entrada: '07h42',
        encerramento: '07h44',
        resultado: 'sucesso',
        observacao: 'Transmissão realizada com sucesso.',
      },
    ],
  },
  JAC1: {
    jornal: 'JAC1',
    data: '10/04/2026',
    horarioInicio: '11:44',
    horarioFim: '13:04',
    equipe: 'Igor, Cladeylton e Bruno',
    switcher: {
      playout: 'normal',
      integracao: 'normal',
      estacoes: 'normal',
      graficas: 'normal',
      mesaAudio: 'normal',
      lu610: '4,754 Kbps',
    },
    estudio: {
      microfones: 'normal',
      pilhas: 'normal',
      iluminacao: 'normal',
      celulares: 'normal',
    },
    execucao: {
      horarioTeste: '11:35',
      horarioPreparacao: '11:25',
      horarioPosicionamento: '11:30',
      horarioTestePlayout: '11:33',
      horarioTesteMicrofones: '11:35',
      nomeEditorChefe: 'Gustavo Almeida',
      modoPlayout: 'playout local',
      observacao: 'Redundância NeoExpress ativa. Comunicação com a Central Casting normal durante toda a transmissão.',
    },
    ocorrenciasTecnicas: [
      'Às 11:47:35, a LiveU LU610 RBR apresentou uma instabilidade momentânea, que travou a transmissão do jornal por 12 segundos, até que a Central Casting realizasse a troca para o NeoID. Após o ocorrido, a LiveU foi verificada e constatou-se que o bitrate já havia estabilizado.',
    ],
    ocorrenciasOperacionais: [
      'Não foram observadas outras ocorrências operacionais.',
    ],
    outrasInfo:
      'Às 11:25, a equipe técnica iniciou a preparação e os testes dos equipamentos para a transmissão do jornal, com todos os sistemas operando normalmente.\n\nÀs 11h30, as equipes de Tecnologia e Jornalismo iniciaram o posicionamento no switcher para a execução do jornal.\n\nÀs 11h33, foi realizado teste de playout com a Central Casting.\n\nÀs 11h35, foram realizados testes de microfones e ponto eletrônico, sem registro de falhas.\n\nO editor-chefe Gustavo Almeida utilizou os Playouts localmente, com redundância NeoExpress ativa. Sem registro de falhas.\n\nA equipe de tecnologia auxiliou a equipe de Jornalismo no estúdio e na microfonação.\n\nA comunicação com a Central Casting, via Tellos (Intercom), permaneceu normal durante toda a transmissão.',
    participacoes: [
      {
        bloco: '2',
        equipeConvidado: 'Equipe do GE',
        quadro: 'Momento esporte',
        cenario: 'real',
        observacao: 'Sem registro de falha.',
      },
      {
        bloco: '4',
        equipeConvidado: 'Victor Hugo',
        quadro: 'Mundo Pet',
        cenario: 'virtual',
        observacao: 'Sem registro de falha.',
      },
    ],
    entradasAoVivo: [
      {
        ativa: 'sim',
        praca: 'Rio Branco (RBR)',
        equipamento: 'LuS300',
        reporter: 'Lucas Thadeu',
        conectado: '11h39',
        testado: '11h40',
        entrada: '11h47',
        encerramento: '11h49',
        resultado: 'sucesso',
        observacao: 'Transmissão realizada com sucesso.',
      },
      {
        ativa: 'sim',
        praca: 'Cruzeiro do Sul (CZS)',
        equipamento: 'LuSmart',
        reporter: 'Mazinho Rogério',
        conectado: '11h57',
        testado: '11h59',
        entrada: '12h01',
        encerramento: '12h06',
        resultado: 'sucesso',
        observacao: 'Transmissão realizada com sucesso.',
      },
    ],
  },
  JAC2: {
    jornal: 'JAC2',
    data: '10/04/2026',
    horarioInicio: '17:07',
    horarioFim: '17:37',
    equipe: 'Bruno e Cladeylton',
    switcher: {
      playout: 'normal',
      integracao: 'normal',
      estacoes: 'normal',
      graficas: 'normal',
      mesaAudio: 'normal',
      lu610: '4,943 Kbps',
    },
    estudio: {
      microfones: 'normal',
      pilhas: 'normal',
      iluminacao: 'normal',
      celulares: 'normal',
    },
    execucao: {
      horarioTeste: '16:54',
      horarioPreparacao: '16:45',
      horarioPosicionamento: '16:51',
      horarioTestePlayout: '16:53',
      horarioTesteMicrofones: '16:54',
      nomeEditorChefe: 'Gabrielle Mandu',
      modoPlayout: 'integração eMAM/Anews',
      observacao: 'A comunicação com a Central Casting permaneceu normal durante todo o jornal.',
    },
    ocorrenciasTecnicas: [
      'Durante os testes para o jornal, foi identificado que o microfone de lapela 06 apresentou problema, sem modulação de áudio. Foi realizada a substituição pelo equipamento da base reserva e, após o jornal, será realizada uma nova verificação do microfone.',
    ],
    ocorrenciasOperacionais: [
      'Devido a um conflito de informações no TP, o operador da mesa de corte inseriu imagens incorretas durante a nota vivo. Posteriormente, a editora-chefe informou que a nota ainda não estava aprovada, o que gerou o equívoco no momento da inserção das imagens. A situação também afetou a leitura da apresentadora, que precisou iniciar a leitura pelo celular. Ao perceber o erro, a correção foi realizada imediatamente.',
    ],
    outrasInfo:
      'Às 16h45, a equipe técnica iniciou a preparação e os testes dos equipamentos para a transmissão do jornal, com todos os sistemas operando normalmente.\n\nÀs 16h51, as equipes de Tecnologia e Jornalismo iniciaram o posicionamento no switcher para a execução do jornal.\n\nA comunicação com a Central Casting, via Tellos (Intercom), permaneceu normal durante todo o jornal.\n\nÀs 16h53, foi realizado teste de Playout, após solicitação da central via intercom.\n\nÀs 16h54, foram realizados os testes de microfones e do ponto eletrônico. Sem registro de falhas.\n\nA editora-chefe Gabrielle Mandu utilizou os playouts em modo integrado (eMAM/Anews), sem registro de falhas.\n\nA equipe de tecnologia auxiliou a equipe de Jornalismo no estúdio e na microfonação da Apresentadora.',
    participacoes: [],
    entradasAoVivo: [
      {
        ativa: 'sim',
        praca: 'Rio Branco (RBR)',
        equipamento: 'LuS300',
        reporter: 'Pedro Marcelo',
        conectado: '17h15',
        testado: '17h18',
        entrada: '17h24',
        encerramento: '17h26',
        resultado: 'sucesso',
        observacao: 'Transmissão realizada com sucesso.',
      },
    ],
  },
};

const STATUS_OPTIONS = ['normal', 'atenção', 'falha'];
const YES_NO_OPTIONS = ['não', 'sim'];
const LIVE_RESULT_OPTIONS = ['', 'sucesso', 'oscilação', 'cancelado', 'sem participação'];

const SWITCHER_ROWS = [
  { id: 'switcher_playout', label: 'Playout 1 / Playout 2' },
  { id: 'switcher_integracao', label: 'Integração anews' },
  { id: 'switcher_estacoes', label: 'Estações produtor / NB visão / BG / OBS / interação' },
  { id: 'switcher_graficas', label: 'Estações gráficas' },
  { id: 'switcher_mesaAudio', label: 'Mesa de áudio' },
];

const STUDIO_ROWS = [
  { id: 'studio_microfones', label: 'Microfones / retorno' },
  { id: 'studio_pilhas', label: 'Pilhas / baterias' },
  { id: 'studio_iluminacao', label: 'Iluminação / LEDs / TVs' },
  { id: 'studio_celulares', label: 'Celulares produtor' },
];

function qs(id) {
  return document.getElementById(id);
}

function cleanText(value) {
  return String(value ?? '').trim();
}

function normalizeStatus(value) {
  const text = cleanText(value).toLowerCase();
  if (text === 'atenção' || text === 'atencao') return 'atenção';
  if (text === 'falha') return 'falha';
  return 'normal';
}

function composeHorario(dados) {
  const horario = cleanText(dados.horario);
  if (horario) return horario;

  const inicio = cleanText(dados.horarioInicio);
  const fim = cleanText(dados.horarioFim);
  if (inicio && fim) return `${inicio} às ${fim}`;
  return inicio || fim || '';
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function createEl(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (value === null || value === undefined) return;
    if (key === 'className') {
      el.className = value;
      return;
    }
    if (key === 'text') {
      el.textContent = value;
      return;
    }
    if (key === 'html') {
      el.innerHTML = value;
      return;
    }
    if (key in el) {
      el[key] = value;
      return;
    }
    el.setAttribute(key, value);
  });

  children.forEach((child) => {
    if (child) el.appendChild(child);
  });

  return el;
}

function setSimpleValue(id, value) {
  const el = qs(id);
  if (el) el.value = value ?? '';
}

function readSimpleValue(id) {
  const el = qs(id);
  return el ? cleanText(el.value) : '';
}

function setChoiceValue(targetId, value) {
  const input = qs(targetId);
  if (!input) return;
  input.value = value;

  document.querySelectorAll(`[data-target="${targetId}"] .choice-btn`).forEach((button) => {
    button.classList.toggle('active', button.dataset.value === value);
  });

  if (targetId === 'oc_tecnica_houve' || targetId === 'oc_operacional_houve') {
    updateOccurrenceVisibility(targetId.startsWith('oc_tecnica') ? 'oc_tecnica' : 'oc_operacional');
  }
}

function createChoiceGroup(targetId, options, value) {
  const wrapper = createEl('div', { className: 'choice-group', 'data-target': targetId });
  options.forEach((optionValue) => {
    const button = createEl('button', {
      type: 'button',
      className: 'choice-btn',
      text: optionValue,
      'data-value': optionValue,
    });

    button.addEventListener('click', () => setChoiceValue(targetId, optionValue));
    wrapper.appendChild(button);
  });

  setTimeout(() => setChoiceValue(targetId, value), 0);
  return wrapper;
}

function createStatusRow(id, label, value = 'normal') {
  const hidden = createEl('input', { type: 'hidden', id, value });
  const labelBlock = createEl('div', { className: 'status-label' }, [
    createEl('strong', { text: label }),
  ]);

  const actions = createChoiceGroup(id, STATUS_OPTIONS, normalizeStatus(value));
  const row = createEl('div', { className: 'status-row' }, [labelBlock, actions, hidden]);
  return row;
}

function renderSwitcherChecklist(values = {}) {
  const container = qs('switcherFields');
  container.innerHTML = '';
  SWITCHER_ROWS.forEach((row) => container.appendChild(createStatusRow(row.id, row.label, values[row.id.replace('switcher_', '')] || 'normal')));

  const lu610Wrap = createEl('div', { className: 'form-field', style: 'margin-top:12px;' }, [
    createEl('label', { htmlFor: 'switcher_lu610', text: 'Lu610 kbps' }),
    createEl('input', { id: 'switcher_lu610', placeholder: '4,960 Kbps', value: values.lu610 || '' }),
  ]);
  container.appendChild(lu610Wrap);
}

function renderStudioChecklist(values = {}) {
  const container = qs('estudioFields');
  container.innerHTML = '';
  STUDIO_ROWS.forEach((row) => container.appendChild(createStatusRow(row.id, row.label, values[row.id.replace('studio_', '')] || 'normal')));
}

function setChecklistNormal(rowDefs) {
  rowDefs.forEach((row) => setChoiceValue(row.id, 'normal'));
}

function createOccurrenceItem(prefix, value = '') {
  const wrapper = createEl('div', { className: 'repeat-card' });
  const title = createEl('strong', { text: 'Descrição' });
  const removeBtn = createEl('button', { type: 'button', className: 'btn-small btn-danger', text: 'Remover' });
  const textarea = createEl('textarea', { 'data-field': 'descricao', rows: 4, placeholder: 'Descreva a ocorrência' });
  textarea.value = value || '';

  removeBtn.addEventListener('click', () => {
    wrapper.remove();
    renumberOccurrenceItems(prefix);
    updateOccurrenceVisibility(prefix);
  });

  wrapper.appendChild(createEl('div', { className: 'subcard-header' }, [title, removeBtn]));
  wrapper.appendChild(textarea);
  return wrapper;
}

function renumberOccurrenceItems(prefix) {
  const list = qs(prefix === 'oc_tecnica' ? 'ocTechList' : 'ocOpList');
  Array.from(list.children).forEach((item, index) => {
    const title = item.querySelector('strong');
    if (title) title.textContent = `Descrição ${index + 1}`;
  });
}

function renderOccurrences(prefix, values = []) {
  const list = qs(prefix === 'oc_tecnica' ? 'ocTechList' : 'ocOpList');
  list.innerHTML = '';
  values.forEach((value) => list.appendChild(createOccurrenceItem(prefix, value)));
  renumberOccurrenceItems(prefix);
  updateOccurrenceVisibility(prefix);
}

function addOccurrenceItem(prefix, value = '') {
  const list = qs(prefix === 'oc_tecnica' ? 'ocTechList' : 'ocOpList');
  list.appendChild(createOccurrenceItem(prefix, value));
  setChoiceValue(prefix === 'oc_tecnica' ? 'oc_tecnica_houve' : 'oc_operacional_houve', 'sim');
  renumberOccurrenceItems(prefix);
  updateOccurrenceVisibility(prefix);
}

function updateOccurrenceVisibility(prefix) {
  const isTech = prefix === 'oc_tecnica';
  const targetInput = qs(isTech ? 'oc_tecnica_houve' : 'oc_operacional_houve');
  const showList = targetInput && targetInput.value === 'sim';
  const list = qs(isTech ? 'ocTechList' : 'ocOpList');
  const state = qs(isTech ? 'ocTechState' : 'ocOpState');
  const addBtn = qs(isTech ? 'addOcTec' : 'addOcOp');
  const hasItems = list.children.length > 0;

  list.classList.toggle('hidden', !showList);
  addBtn.classList.toggle('hidden', !showList);

  if (!showList) {
    state.textContent = isTech
      ? 'Nenhuma ocorrência técnica registrada.'
      : 'Nenhuma ocorrência operacional registrada.';
    state.classList.remove('hidden');
    return;
  }

  if (hasItems) {
    state.classList.add('hidden');
  } else {
    state.classList.remove('hidden');
    state.textContent = 'Clique em “Adicionar” para registrar as ocorrências.';
  }
}

function createParticipationItem(data = {}) {
  const details = createEl('details', { className: 'repeat-card', open: true });
  const title = createEl('span', { className: 'item-title', text: 'Participação' });
  const removeBtn = createEl('button', { type: 'button', className: 'btn-small btn-danger', text: 'Remover' });
  removeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    details.remove();
    renumberParticipationItems();
    updateParticipationVisibility();
  });

  const summary = createEl('summary', {}, [title, removeBtn]);
  const body = createEl('div', { className: 'repeat-body grid-2' });

  const bloco = createEl('select', { 'data-field': 'bloco' });
  bloco.appendChild(createEl('option', { value: '', text: 'Selecione o bloco' }));
  for (let i = 1; i <= 5; i += 1) {
    bloco.appendChild(createEl('option', { value: String(i), text: `${i}` }));
  }
  bloco.value = data.bloco || data.blocoSelecionado || '';

  const equipe = createEl('input', { 'data-field': 'equipeConvidado', placeholder: 'Equipe / Convidado' });
  equipe.value = data.equipeConvidado || data.equipe || data.descricao || '';
  const quadro = createEl('input', { 'data-field': 'quadro', placeholder: 'Quadro' });
  quadro.value = data.quadro || '';
  const cenario = createEl('input', { 'data-field': 'cenario', placeholder: 'Cenário' });
  cenario.value = data.cenario || '';
  const observacao = createEl('textarea', { 'data-field': 'observacao', rows: 3, placeholder: 'Observação' });
  observacao.value = data.observacao || '';

  [bloco, equipe, quadro, cenario, observacao].forEach((field) => {
    field.addEventListener('input', () => updateParticipationItemTitle(details));
    field.addEventListener('change', () => updateParticipationItemTitle(details));
  });

  body.appendChild(createField('Bloco', bloco));
  body.appendChild(createField('Equipe / Convidado', equipe));
  body.appendChild(createField('Quadro', quadro));
  body.appendChild(createField('Cenário', cenario));
  body.appendChild(createField('Observação', observacao, true));

  details.appendChild(summary);
  details.appendChild(body);
  updateParticipationItemTitle(details);
  return details;
}

function createField(labelText, control, fullWidth = false) {
  return createEl('div', { className: 'form-field', style: fullWidth ? 'grid-column:1 / -1;' : '' }, [
    createEl('label', { text: labelText }),
    control,
  ]);
}

function updateParticipationItemTitle(details) {
  const bloco = cleanText(details.querySelector('[data-field="bloco"]').value);
  const equipe = cleanText(details.querySelector('[data-field="equipeConvidado"]').value);
  const quadro = cleanText(details.querySelector('[data-field="quadro"]').value);
  const title = details.querySelector('.item-title');
  if (!title) return;
  title.textContent = `Participação${bloco ? ` ${bloco}º bloco` : ''}${equipe ? ` — ${equipe}` : quadro ? ` — ${quadro}` : ''}`;
}

function renumberParticipationItems() {
  Array.from(qs('participacoes').children).forEach((item, index) => {
    item.dataset.index = String(index + 1);
    updateParticipationItemTitle(item);
  });
}

function renderParticipationSection(values = []) {
  const container = qs('participacoes');
  container.innerHTML = '';
  values.forEach((value) => container.appendChild(createParticipationItem(value)));
  renumberParticipationItems();
  updateParticipationVisibility();
}

function addParticipationItem(data = {}) {
  qs('participacoes').appendChild(createParticipationItem(data));
  renumberParticipationItems();
  updateParticipationVisibility();
}

function updateParticipationVisibility() {
  const container = qs('participacoes');
  const empty = qs('participacoesEmpty');
  const hasItems = container.children.length > 0;
  empty.classList.toggle('hidden', hasItems);
  container.classList.toggle('hidden', !hasItems);
}

function createLiveItem(data = {}) {
  const details = createEl('details', { className: 'repeat-card', open: true });
  const title = createEl('span', { className: 'item-title', text: 'Entrada ao vivo' });
  const removeBtn = createEl('button', { type: 'button', className: 'btn-small btn-danger', text: 'Remover' });
  removeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    details.remove();
    renumberLiveItems();
    updateLiveVisibility();
  });

  const summary = createEl('summary', {}, [title, removeBtn]);
  const body = createEl('div', { className: 'repeat-body' });

  const activeInputId = `live_active_${Math.random().toString(36).slice(2, 9)}`;
  const activeHidden = createEl('input', { type: 'hidden', id: activeInputId, value: data.ativa || data.houve || 'sim' });
  const activeGroup = createChoiceGroup(activeInputId, YES_NO_OPTIONS, data.ativa || data.houve || 'sim');

  const activeField = createEl('div', { className: 'form-field', style: 'margin-bottom:12px;' }, [
    createEl('label', { text: 'Houve entrada ao vivo?' }),
    activeGroup,
    activeHidden,
  ]);

  const extraFields = createEl('div', { className: 'grid-3 live-extra-fields' });

  const praca = createEl('input', { 'data-field': 'praca', placeholder: 'Praça' });
  praca.value = data.praca || data.local || '';
  const equipamento = createEl('input', { 'data-field': 'equipamento', placeholder: 'Equipamento' });
  equipamento.value = data.equipamento || data.tipo || '';
  const reporter = createEl('input', { 'data-field': 'reporter', placeholder: 'Repórter' });
  reporter.value = data.reporter || data.nome || '';
  const conectado = createEl('input', { 'data-field': 'conectado', placeholder: 'Horário conectado' });
  conectado.value = data.conectado || '';
  const testado = createEl('input', { 'data-field': 'testado', placeholder: 'Horário testado' });
  testado.value = data.testado || data.inicio || '';
  const entrada = createEl('input', { 'data-field': 'entrada', placeholder: 'Horário entrada' });
  entrada.value = data.entrada || '';
  const encerramento = createEl('input', { 'data-field': 'encerramento', placeholder: 'Horário encerramento' });
  encerramento.value = data.encerramento || data.fim || '';
  const resultado = createEl('select', { 'data-field': 'resultado' });
  LIVE_RESULT_OPTIONS.forEach((optionValue) => {
    resultado.appendChild(createEl('option', { value: optionValue, text: optionValue || 'Selecione o resultado' }));
  });
  resultado.value = data.resultado || '';
  const observacao = createEl('textarea', { 'data-field': 'observacao', rows: 3, placeholder: 'Observação' });
  observacao.value = data.observacao || '';

  [praca, equipamento, reporter, conectado, testado, entrada, encerramento, resultado, observacao].forEach((field) => {
    field.addEventListener('input', () => updateLiveItemTitle(details));
    field.addEventListener('change', () => updateLiveItemTitle(details));
  });

  extraFields.appendChild(createField('Praça', praca));
  extraFields.appendChild(createField('Equipamento', equipamento));
  extraFields.appendChild(createField('Repórter', reporter));
  extraFields.appendChild(createField('Horário conectado', conectado));
  extraFields.appendChild(createField('Horário testado', testado));
  extraFields.appendChild(createField('Horário entrada', entrada));
  extraFields.appendChild(createField('Horário encerramento', encerramento));
  extraFields.appendChild(createField('Resultado', resultado));
  extraFields.appendChild(createField('Observação', observacao, true));

  body.appendChild(activeField);
  body.appendChild(extraFields);
  details.appendChild(summary);
  details.appendChild(body);
  details.dataset.activeTarget = activeInputId;

  const syncLiveFields = () => {
    const hidden = qs(activeInputId);
    const isActive = hidden && hidden.value === 'sim';
    extraFields.classList.toggle('hidden', !isActive);
    updateLiveItemTitle(details);
  };

  activeGroup.querySelectorAll('.choice-btn').forEach((button) => {
    button.addEventListener('click', syncLiveFields);
  });

  setTimeout(syncLiveFields, 0);
  return details;
}

function updateLiveItemTitle(details) {
  const activeId = details.dataset.activeTarget;
  const active = qs(activeId)?.value || 'sim';
  const praca = cleanText(details.querySelector('[data-field="praca"]').value);
  const reporter = cleanText(details.querySelector('[data-field="reporter"]').value);
  const equipamento = cleanText(details.querySelector('[data-field="equipamento"]').value);
  const title = details.querySelector('.item-title');
  if (!title) return;

  if (active === 'não') {
    title.textContent = 'Entrada ao vivo — sem participação';
    return;
  }

  title.textContent = `Entrada ao vivo${praca ? ` — ${praca}` : ''}${reporter ? ` / ${reporter}` : equipamento ? ` / ${equipamento}` : ''}`;
}

function renumberLiveItems() {
  Array.from(qs('aovivo').children).forEach((item, index) => {
    item.dataset.index = String(index + 1);
    updateLiveItemTitle(item);
  });
}

function renderLiveSection(values = []) {
  const container = qs('aovivo');
  container.innerHTML = '';
  values.forEach((value) => container.appendChild(createLiveItem(value)));
  renumberLiveItems();
  updateLiveVisibility();
}

function addLiveItem(data = {}) {
  qs('aovivo').appendChild(createLiveItem(data));
  renumberLiveItems();
  updateLiveVisibility();
}

function updateLiveVisibility() {
  const container = qs('aovivo');
  const empty = qs('aovivoEmpty');
  const hasItems = container.children.length > 0;
  empty.classList.toggle('hidden', hasItems);
  container.classList.toggle('hidden', !hasItems);
}

function renderStaticSections() {
  renderSwitcherChecklist();
  renderStudioChecklist();
  createOccurrenceGroups();
  renderParticipationSection();
  renderLiveSection();
}

function createOccurrenceGroups() {
  qs('oc_tecnica_houve_group').innerHTML = '';
  qs('oc_operacional_houve_group').innerHTML = '';
  qs('oc_tecnica_houve_group').appendChild(createChoiceGroup('oc_tecnica_houve', YES_NO_OPTIONS, 'não'));
  qs('oc_operacional_houve_group').appendChild(createChoiceGroup('oc_operacional_houve', YES_NO_OPTIONS, 'não'));
  renderOccurrences('oc_tecnica', []);
  renderOccurrences('oc_operacional', []);
}

function clearForm() {
  setSimpleValue('jornal', '');
  setSimpleValue('data', '');
  setSimpleValue('equipe', '');
  setSimpleValue('horarioInicio', '');
  setSimpleValue('horarioFim', '');
  setSimpleValue('horarioTeste', '');
  setSimpleValue('horarioPreparacao', '');
  setSimpleValue('horarioPosicionamento', '');
  setSimpleValue('horarioTestePlayout', '');
  setSimpleValue('horarioTesteMicrofones', '');
  setSimpleValue('nomeEditorChefe', '');
  setSimpleValue('modoPlayout', 'integração eMAM/Anews');
  setSimpleValue('execObservacao', '');
  setSimpleValue('outrasInfo', '');
  setSimpleValue('switcher_lu610', '');

  setChecklistNormal(SWITCHER_ROWS);
  setChecklistNormal(STUDIO_ROWS);
  setChoiceValue('oc_tecnica_houve', 'não');
  setChoiceValue('oc_operacional_houve', 'não');

  renderOccurrences('oc_tecnica', []);
  renderOccurrences('oc_operacional', []);
  renderParticipationSection([]);
  renderLiveSection([]);
  setSelectedModelLabel('Custom');
}

function fillFromPreset(preset) {
  setSimpleValue('jornal', preset.jornal || '');
  setSimpleValue('data', preset.data || '');
  setSimpleValue('equipe', preset.equipe || '');
  setSimpleValue('horarioInicio', preset.horarioInicio || '');
  setSimpleValue('horarioFim', preset.horarioFim || '');
  setSimpleValue('switcher_lu610', preset.switcher?.lu610 || '');

  SWITCHER_ROWS.forEach((row) => setChoiceValue(row.id, preset.switcher?.[row.id.replace('switcher_', '')] || 'normal'));
  STUDIO_ROWS.forEach((row) => setChoiceValue(row.id, preset.estudio?.[row.id.replace('studio_', '')] || 'normal'));

  const exec = preset.execucao || {};
  setSimpleValue('horarioTeste', exec.horarioTeste || '');
  setSimpleValue('horarioPreparacao', exec.horarioPreparacao || '');
  setSimpleValue('horarioPosicionamento', exec.horarioPosicionamento || '');
  setSimpleValue('horarioTestePlayout', exec.horarioTestePlayout || '');
  setSimpleValue('horarioTesteMicrofones', exec.horarioTesteMicrofones || '');
  setSimpleValue('nomeEditorChefe', exec.nomeEditorChefe || '');
  setSimpleValue('modoPlayout', exec.modoPlayout || 'integração eMAM/Anews');
  setSimpleValue('execObservacao', exec.observacao || '');

  setChoiceValue('oc_tecnica_houve', (preset.ocorrenciasTecnicas || []).length ? 'sim' : 'não');
  setChoiceValue('oc_operacional_houve', (preset.ocorrenciasOperacionais || []).length ? 'sim' : 'não');
  renderOccurrences('oc_tecnica', preset.ocorrenciasTecnicas || []);
  renderOccurrences('oc_operacional', preset.ocorrenciasOperacionais || []);
  renderParticipationSection(preset.participacoes || []);
  renderLiveSection(preset.entradasAoVivo || []);
  setSimpleValue('outrasInfo', preset.outrasInfo || '');

  setSelectedModelLabel(preset.jornal || 'Custom');
}

function setSelectedModelLabel(value) {
  qs('selectedModelLabel').textContent = value || 'Custom';
}

function normalizeReport(dados = {}) {
  const identificacao = dados.identificacao || {};
  const checklist = dados.checklist || {};
  const execucao = dados.execucao || {};

  return {
    jornal: cleanText(dados.jornal ?? identificacao.jornal ?? ''),
    data: cleanText(dados.data ?? identificacao.data ?? ''),
    horarioInicio: cleanText(dados.horarioInicio ?? identificacao.horarioInicio ?? ''),
    horarioFim: cleanText(dados.horarioFim ?? identificacao.horarioFim ?? ''),
    horario: composeHorario({
      horario: dados.horario ?? identificacao.horario ?? '',
      horarioInicio: dados.horarioInicio ?? identificacao.horarioInicio ?? '',
      horarioFim: dados.horarioFim ?? identificacao.horarioFim ?? '',
    }),
    equipe: cleanText(dados.equipe ?? identificacao.equipe ?? ''),
    switcher: {
      playout: normalizeStatus(dados.switcher?.playout ?? checklist.switcher?.playout ?? ''),
      integracao: normalizeStatus(dados.switcher?.integracao ?? checklist.switcher?.integracao ?? ''),
      estacoes: normalizeStatus(dados.switcher?.estacoes ?? checklist.switcher?.estacoes ?? ''),
      graficas: normalizeStatus(dados.switcher?.graficas ?? checklist.switcher?.graficas ?? ''),
      mesaAudio: normalizeStatus(dados.switcher?.mesaAudio ?? checklist.switcher?.mesaAudio ?? ''),
      lu610: cleanText(dados.switcher?.lu610 ?? checklist.switcher?.lu610 ?? ''),
    },
    estudio: {
      microfones: normalizeStatus(dados.estudio?.microfones ?? checklist.estudio?.microfones ?? ''),
      pilhas: normalizeStatus(dados.estudio?.pilhas ?? checklist.estudio?.pilhas ?? ''),
      iluminacao: normalizeStatus(dados.estudio?.iluminacao ?? checklist.estudio?.iluminacao ?? ''),
      celulares: normalizeStatus(dados.estudio?.celulares ?? checklist.estudio?.celulares ?? ''),
    },
    execucao: {
      horarioTeste: cleanText(dados.execucao?.horarioTeste ?? execucao.horarioTeste ?? dados.horarioTeste ?? ''),
      horarioPreparacao: cleanText(dados.execucao?.horarioPreparacao ?? execucao.horarioPreparacao ?? dados.horarioPreparacao ?? ''),
      horarioPosicionamento: cleanText(dados.execucao?.horarioPosicionamento ?? execucao.horarioPosicionamento ?? dados.horarioPosicionamento ?? ''),
      horarioTestePlayout: cleanText(dados.execucao?.horarioTestePlayout ?? execucao.horarioTestePlayout ?? dados.horarioTestePlayout ?? ''),
      horarioTesteMicrofones: cleanText(dados.execucao?.horarioTesteMicrofones ?? execucao.horarioTesteMicrofones ?? dados.horarioTesteMicrofones ?? ''),
      nomeEditorChefe: cleanText(dados.execucao?.nomeEditorChefe ?? execucao.nomeEditorChefe ?? dados.nomeEditorChefe ?? ''),
      modoPlayout: cleanText(dados.execucao?.modoPlayout ?? execucao.modoPlayout ?? dados.modoPlayout ?? ''),
      observacao: cleanText(dados.execucao?.observacao ?? execucao.observacao ?? dados.execObservacao ?? ''),
    },
    houveOcTec: cleanText(dados.houveOcTec ?? ''),
    ocorrenciasTecnicas: Array.isArray(dados.ocorrenciasTecnicas) ? dados.ocorrenciasTecnicas.map(cleanText).filter(Boolean) : [],
    houveOcOp: cleanText(dados.houveOcOp ?? ''),
    ocorrenciasOperacionais: Array.isArray(dados.ocorrenciasOperacionais) ? dados.ocorrenciasOperacionais.map(cleanText).filter(Boolean) : [],
    participacoes: Array.isArray(dados.participacoes) ? dados.participacoes : [],
    entradasAoVivo: Array.isArray(dados.entradasAoVivo) ? dados.entradasAoVivo : Array.isArray(dados.aovivo) ? dados.aovivo : [],
    outrasInfo: cleanText(dados.outrasInfo ?? ''),
  };
}

function statusLabel(value) {
  const normalized = normalizeStatus(value);
  if (normalized === 'atenção') return 'atenção';
  if (normalized === 'falha') return 'falha';
  return 'normal';
}

function renderReportText(dados) {
  const report = normalizeReport(dados);
  const lines = [];

  lines.push(`🔰  *RELATÓRIO JORNAL ${report.jornal || '-'}* 🔰`);
  lines.push(`🗓️  *DATA:* ${report.data || '-'}`);
  lines.push(`⌚ *Horário:* ${report.horario || '-'}`);
  lines.push(`👨‍🔧  *Equipe Técnica:* ${report.equipe || '-'}.`);
  lines.push(`--`);
  lines.push(`📝 *CHECKLIST | Tecnologia - ${report.jornal || '-'}*`);
  lines.push('');
  lines.push(`🎛️ *SWITCHER - JORNALISMO*`);
  lines.push(`✅ Playout 1 / Playout 2: ${statusLabel(report.switcher.playout)}`);
  lines.push(`✅ Integração anews: ${statusLabel(report.switcher.integracao)}`);
  lines.push(`✅️ Estações ( Produtor / NB Visão / BG / OBS / Interação ): ${statusLabel(report.switcher.estacoes).replace(/^./, (m) => m.toUpperCase())}`);
  lines.push(`✅️ Estações gráficas ( Axymettria / vMix / GC / TP ): ${statusLabel(report.switcher.graficas).replace(/^./, (m) => m.toUpperCase())}`);
  lines.push(`✅ Mesa de áudio : ${statusLabel(report.switcher.mesaAudio)}`);
  lines.push(`✅ Lu610: ${report.switcher.lu610 || '-'}`);
  lines.push('');
  lines.push(`📹 *ESTÚDIO - JORNALISMO*`);
  lines.push(`✅ Microfones / Retorno: ${statusLabel(report.estudio.microfones)}`);
  lines.push(`✅ Pilhas / Baterias: ${statusLabel(report.estudio.pilhas)}`);
  lines.push(`✅ Iluminação / LEDs / TVs: ${statusLabel(report.estudio.iluminacao)}`);
  lines.push(`✅ Celulares produtor: ${statusLabel(report.estudio.celulares)}`);
  lines.push(`---`);
  lines.push(`🎬 *EXECUÇÃO DO JORNAL*`);
  lines.push('');
  lines.push(`⏱️  *Testes do jornal*`);
  lines.push(`🟢 Horário: ${report.execucao.horarioTeste || '-'}`);
  if (report.execucao.horarioPreparacao) {
    lines.push(`✅ Às *${report.execucao.horarioPreparacao}*, a equipe técnica iniciou a preparação e os testes dos equipamentos para a transmissão do jornal, com todos os sistemas operando normalmente.`);
  }
  if (report.execucao.horarioPosicionamento) {
    lines.push(`✅ Às *${report.execucao.horarioPosicionamento}*, as equipes de Tecnologia e Jornalismo iniciaram o posicionamento no switcher para a execução do jornal.`);
  }
  if (report.execucao.horarioTestePlayout) {
    lines.push(`🔹 Às *${report.execucao.horarioTestePlayout}*, foi realizado teste de *Playout*, após solicitação da central via intercom.`);
  }
  if (report.execucao.horarioTesteMicrofones) {
    lines.push(`🔹 Às *${report.execucao.horarioTesteMicrofones}*, foram realizados os testes de microfones e do ponto eletrônico. Sem registro de falhas.`);
  }
  if (cleanText(report.execucao.nomeEditorChefe)) {
    lines.push(`✅ ${report.execucao.nomeEditorChefe} utilizou os playouts em modo ${cleanText(report.execucao.modoPlayout) || 'normal'}, sem registro de falhas.`);
  }
  if (cleanText(report.execucao.observacao)) {
    lines.push(`✅ ${report.execucao.observacao}`);
  }
  lines.push(`---`);
  lines.push(`⚠️ *Ocorrências Técnicas:*`);
  if (report.ocorrenciasTecnicas.length) {
    report.ocorrenciasTecnicas.forEach((item, index) => {
      lines.push(`${index + 1}️⃣ ${item}`);
    });
  } else {
    lines.push(`✅ Nao houve outros registros de ocorrências técnicas.`);
  }
  lines.push(`---`);
  lines.push(`⚠️ *Ocorrências Operacionais:*`);
  if (report.ocorrenciasOperacionais.length) {
    report.ocorrenciasOperacionais.forEach((item, index) => {
      lines.push(`${index + 1}️⃣ ${item}`);
    });
  } else {
    lines.push(`✅️ Não foram observados outros erros operacionais durante a execução do jornal.`);
  }
  lines.push(`---`);
  lines.push(`📌 *Outras Informações:*`);
  if (cleanText(report.outrasInfo)) {
    String(report.outrasInfo)
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean)
      .forEach((line) => lines.push(`✅ ${line}`));
  } else {
    lines.push(`✅ Nenhuma informação adicional registrada.`);
  }
  lines.push(`---`);
  lines.push(`🎙️ *Participações no Estúdio:*`);
  if (report.participacoes.length) {
    report.participacoes.forEach((p) => {
      const bloco = cleanText(p.bloco || p.blocoSelecionado || '');
      const equipe = cleanText(p.equipeConvidado || p.equipe || p.descricao || '');
      const quadro = cleanText(p.quadro || '');
      const cenario = cleanText(p.cenario || '');
      const observacao = cleanText(p.observacao || '');
      lines.push(`🔹 *${bloco || '-'}º Bloco:* Recebemos no estúdio ${equipe ? `o ${equipe}` : 'a participação'}${quadro ? `, para o quadro *${quadro}*` : ''}.${cenario ? ` A participação ocorreu no cenário ${cenario}` : ''}${observacao ? `, ${observacao}` : '.'}`);
    });
  } else {
    lines.push(`✅️ Não houve participação no estúdio.`);
  }
  lines.push(`---`);
  lines.push(`🔴 *Entradas ao Vivo – Testes e Execução*`);

  const grouped = report.entradasAoVivo.reduce((acc, entry) => {
    const praca = cleanText(entry.praca || entry.local || 'Outra');
    if (!acc[praca]) acc[praca] = [];
    acc[praca].push(entry);
    return acc;
  }, {});

  const groupNames = Object.keys(grouped);
  if (groupNames.length) {
    groupNames.forEach((praca) => {
      lines.push(`📍 *${praca}:*`);
      lines.push('');
      grouped[praca].forEach((entry, index) => {
        const equipamento = cleanText(entry.equipamento || entry.tipo || '');
        const reporter = cleanText(entry.reporter || entry.nome || '');
        const conectado = cleanText(entry.conectado || '');
        const testado = cleanText(entry.testado || entry.inicio || '');
        const entrada = cleanText(entry.entrada || '');
        const encerramento = cleanText(entry.encerramento || entry.fim || '');
        const resultado = cleanText(entry.resultado || '');
        lines.push(`🔹*${index + 1}ª Ao vivo (${equipamento || 'outro'}) - ${reporter || '-'}*  Conectado às *${conectado || '-'}* testado às *${testado || '-'}*`);
        lines.push(`Entrada às *${entrada || '-'}* encerramento às *${encerramento || '-'}*. ${resultado ? `Transmissão realizada com ${resultado}.` : ''}`.trim());
        if (cleanText(entry.observacao) && entry.observacao !== 'Transmissão realizada com sucesso.') {
          lines.push(cleanText(entry.observacao));
        }
        lines.push('');
      });
      lines.push('---');
    });
  } else {
    lines.push(`✅ Nenhuma entrada ao vivo registrada.`);
  }

  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

function readOccurrences(prefix) {
  const list = qs(prefix === 'oc_tecnica' ? 'ocTechList' : 'ocOpList');
  return Array.from(list.querySelectorAll('textarea')).map((textarea) => cleanText(textarea.value)).filter(Boolean);
}

function readParticipation() {
  return Array.from(qs('participacoes').children)
    .map((item) => ({
      bloco: cleanText(item.querySelector('[data-field="bloco"]').value),
      equipeConvidado: cleanText(item.querySelector('[data-field="equipeConvidado"]').value),
      quadro: cleanText(item.querySelector('[data-field="quadro"]').value),
      cenario: cleanText(item.querySelector('[data-field="cenario"]').value),
      observacao: cleanText(item.querySelector('[data-field="observacao"]').value),
    }))
    .filter((entry) => Object.values(entry).some(Boolean));
}

function readLive() {
  return Array.from(qs('aovivo').children)
    .map((item) => {
      const active = cleanText(qs(item.dataset.activeTarget)?.value || 'sim');
      const payload = {
        ativa: active,
        praca: cleanText(item.querySelector('[data-field="praca"]').value),
        equipamento: cleanText(item.querySelector('[data-field="equipamento"]').value),
        reporter: cleanText(item.querySelector('[data-field="reporter"]').value),
        conectado: cleanText(item.querySelector('[data-field="conectado"]').value),
        testado: cleanText(item.querySelector('[data-field="testado"]').value),
        entrada: cleanText(item.querySelector('[data-field="entrada"]').value),
        encerramento: cleanText(item.querySelector('[data-field="encerramento"]').value),
        resultado: cleanText(item.querySelector('[data-field="resultado"]').value),
        observacao: cleanText(item.querySelector('[data-field="observacao"]').value),
      };
      return payload;
    })
    .filter((entry) => entry.ativa === 'sim' || Object.values(entry).slice(1).some(Boolean));
}

function buildPayload() {
  const horarioInicio = readSimpleValue('horarioInicio');
  const horarioFim = readSimpleValue('horarioFim');

  return {
    jornal: readSimpleValue('jornal'),
    data: readSimpleValue('data'),
    horarioInicio,
    horarioFim,
    horario: [horarioInicio, horarioFim].filter(Boolean).join(' às '),
    equipe: readSimpleValue('equipe'),
    switcher: {
      playout: qs('switcher_playout')?.value || 'normal',
      integracao: qs('switcher_integracao')?.value || 'normal',
      estacoes: qs('switcher_estacoes')?.value || 'normal',
      graficas: qs('switcher_graficas')?.value || 'normal',
      mesaAudio: qs('switcher_mesaAudio')?.value || 'normal',
      lu610: readSimpleValue('switcher_lu610'),
    },
    estudio: {
      microfones: qs('studio_microfones')?.value || 'normal',
      pilhas: qs('studio_pilhas')?.value || 'normal',
      iluminacao: qs('studio_iluminacao')?.value || 'normal',
      celulares: qs('studio_celulares')?.value || 'normal',
    },
    execucao: {
      horarioTeste: readSimpleValue('horarioTeste'),
      horarioPreparacao: readSimpleValue('horarioPreparacao'),
      horarioPosicionamento: readSimpleValue('horarioPosicionamento'),
      horarioTestePlayout: readSimpleValue('horarioTestePlayout'),
      horarioTesteMicrofones: readSimpleValue('horarioTesteMicrofones'),
      nomeEditorChefe: readSimpleValue('nomeEditorChefe'),
      modoPlayout: readSimpleValue('modoPlayout'),
      observacao: readSimpleValue('execObservacao'),
    },
    houveOcTec: qs('oc_tecnica_houve')?.value || 'não',
    ocorrenciasTecnicas: readOccurrences('oc_tecnica'),
    houveOcOp: qs('oc_operacional_houve')?.value || 'não',
    ocorrenciasOperacionais: readOccurrences('oc_operacional'),
    participacoes: readParticipation(),
    entradasAoVivo: readLive(),
    outrasInfo: readSimpleValue('outrasInfo'),
  };
}

async function showResultScreen(payload) {
  const text = renderReportText(payload);
  setSimpleValue('reportText', text);
  window.lastReportPayload = payload;
  qs('reportForm').classList.add('hidden');
  qs('startScreen').classList.add('hidden');
  qs('resultScreen').classList.remove('hidden');
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function shareToWhatsApp(text) {
  const message = String(text || '').trim();
  if (!message) {
    alert('Gere o relatório antes de compartilhar.');
    return;
  }

  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function openForm() {
  qs('startScreen').classList.add('hidden');
  qs('resultScreen').classList.add('hidden');
  qs('reportForm').classList.remove('hidden');
}

function openStart() {
  qs('resultScreen').classList.add('hidden');
  qs('reportForm').classList.add('hidden');
  qs('startScreen').classList.remove('hidden');
}

function expandOrCollapseAll(open) {
  document.querySelectorAll('#reportForm details').forEach((detail) => {
    detail.open = open;
  });
}

function attachEvents() {
  document.body.addEventListener('click', (event) => {
    const modelCard = event.target.closest?.('.model-card');
    if (modelCard && modelCard.dataset.model) {
      const model = modelCard.dataset.model;
      openForm();
      clearForm();
      setSimpleValue('jornal', model);
      fillFromPreset(presets[model]);
      return;
    }

    if (event.target.id === 'customStart') {
      openForm();
      clearForm();
      return;
    }
  });

  qs('backToModels').addEventListener('click', () => {
    clearForm();
    openStart();
  });

  qs('markAllNormal').addEventListener('click', () => {
    setChecklistNormal(SWITCHER_ROWS);
    setChecklistNormal(STUDIO_ROWS);
  });

  qs('switcherAllNormal').addEventListener('click', () => setChecklistNormal(SWITCHER_ROWS));
  qs('studioAllNormal').addEventListener('click', () => setChecklistNormal(STUDIO_ROWS));
  qs('expandAll').addEventListener('click', () => expandOrCollapseAll(true));
  qs('collapseAll').addEventListener('click', () => expandOrCollapseAll(false));

  qs('addOcTec').addEventListener('click', () => addOccurrenceItem('oc_tecnica'));
  qs('addOcOp').addEventListener('click', () => addOccurrenceItem('oc_operacional'));
  qs('addPart').addEventListener('click', () => addParticipationItem({}));
  qs('addAoVivo').addEventListener('click', () => addLiveItem({ ativa: 'sim' }));

  qs('jornal').addEventListener('change', (event) => {
    const model = event.target.value;
    if (presets[model]) {
      fillFromPreset(presets[model]);
    } else {
      setSelectedModelLabel(model || 'Custom');
    }
  });

  qs('concluirBtn').addEventListener('click', async () => {
    const payload = buildPayload();
    if (!payload.jornal) {
      alert('Selecione um jornal antes de gerar o relatório.');
      return;
    }
    await showResultScreen(payload);
  });

  qs('copyReport').addEventListener('click', async () => {
    const text = readSimpleValue('reportText');
    if (!text) return;
    await navigator.clipboard.writeText(text);
    alert('Texto copiado.');
  });

  qs('shareWhatsApp').addEventListener('click', () => {
    const text = readSimpleValue('reportText');
    shareToWhatsApp(text);
  });

  qs('downloadPdf').addEventListener('click', async () => {
    const payload = window.lastReportPayload || buildPayload();
    const response = await fetch('/gerar-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => null);
      alert(`Erro ao gerar PDF: ${error?.error || response.status}`);
      return;
    }

    const blob = await response.blob();
    downloadBlob(blob, `relatorio-${payload.jornal || 'jornal'}.pdf`);
  });

  qs('editAgain').addEventListener('click', () => {
    qs('resultScreen').classList.add('hidden');
    qs('reportForm').classList.remove('hidden');
  });

  qs('newReport').addEventListener('click', () => {
    clearForm();
    openStart();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderStaticSections();
  clearForm();
  attachEvents();
});
