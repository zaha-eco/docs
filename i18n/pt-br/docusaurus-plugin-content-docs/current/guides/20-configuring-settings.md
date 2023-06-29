---
slug: settings
sidebar_position: 20
---

# Definindo configurações e alertas

Você pode controlar como e onde coletar dados e quando receber alertas sobre esses dados. As configurações podem ser definidas e gerenciadas a partir da [conta de nível superior](./30-creating-entities.md#top-level-entity), qualquer conta individual ou um dispositivo individual. Isso oferece a máxima flexibilidade, ao mesmo tempo em que fornece gerenciamento eficiente de configurações padrão.

## Configurações de herança {#settings-inheritance}

As configurações do Print Tracker são herdadas por meio de [hierarquia](./30-creating-entities.md#hierarchy). Isso significa que, quando uma nova conta ou dispositivo é criado no Print Tracker, suas configurações e alertas virão da primeira [conta pai](./30-creating-entities.md#parent-entity) em sua hierarquia com um valor de configuração explicitamente definido.

### Herdando configurações {#inheriting-settings}

As configurações fluem nativamente de cima para baixo, de acordo com a [hierarquia](./30-creating-entities.md#hierarchy). As configurações personalizadas que você deseja aplicar a toda a sua frota devem ser definidas uma vez em sua [conta de nível superior](./30-creating-entities.md#top-level-entity), enquanto as configurações que se aplicam apenas a uma conta ou dispositivo específico devem ser explicitamente definidas nesse nível.

### Substituindo configurações {#overriding-settings}

Quando uma nova conta ou dispositivo é criado, ele herdará automaticamente suas configurações por meio de sua hierarquia.

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-entity-alert-emails.gif)
Para substituir uma configuração herdada no nível da conta:

1. Navegue até a conta desejada
2. Clique em **Admin > Gerenciar conta** na barra de navegação lateral
3. Clique na guia **Configurações**
4. Altere a(s) configuração(ões)
5. Clique em **Salvar configuração** na parte inferior da tela

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-device-alert-emails.gif)
Para substituir uma configuração herdada no nível do dispositivo:

1. Navegue até a conta desejada
2. Clique em **Dispositivos > Visualizar dispositivos** na barra de navegação lateral
3. Clique no dispositivo
4. Clique na guia **Configurações**
5. Altere a(s) configuração(ões)
6. Clique em **Salvar configuração** na parte inferior da tela

### Redefinindo configurações {#resetting-settings}

Depois que uma configuração for definida explicitamente, ela não herdará mais automaticamente o valor dessa configuração por meio de sua hierarquia.

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-device-reset.gif)
Para redefinir uma configuração para que ela herde seu valor:

1. Clicando na guia de configurações de qualquer conta ou dispositivo
2. Navegando até a configuração correta
3. Clique em **Reiniciar** no lado direito da entrada de configuração.
4. Clique em **Salvar configuração** na parte inferior da tela

#### Redefinir para todas as filhas {#reset-for-all-children}

Ao redefinir uma configuração para uma conta, você também tem a opção de redefinir uma configuração para a [conta ativa](./30-criating-entities.md#active-entity) e todas as suas filhas. Isso geralmente é feito quando você deseja padronizar uma configuração.

:::danger
Quando você **Redefinir para todas as filhas**, isso redefinirá a configuração para seu valor herdado para a conta ativa, todas as contas filhas e os dispositivos dessas contas.
:::

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-entity-bulk-reset.gif)
Para redefinir uma configuração para todas as filhas:

1. Navegue até a conta mais alta na hierarquia onde você deseja que a alteração entre em vigor
2. Clique em **Admin > Gerenciar conta** na barra de navegação lateral
3. Clique na guia **Configurações**
4. Vá para a configuração
5. Clique na seta para baixo no lado direito da entrada de configuração e selecione **Redefinir para todas as filhas**
6. Clique em **Salvar configuração** na parte inferior da tela

## Alterando configurações {#changing-settings}

### Em uma conta {#at-an-entity}
### Em uma instalação {#at-an-install}
### Em um dispositivo {#at-an-device}

## Alertas de suprimento {#supply-alerts}

Os alertas de suprimento são condições predefinidas dos suprimentos de impressão que podem disparar notificações enviadas a um usuário ou grupo de usuários.

### Alertas de Suprimento Baixo {#low-supply-alerts}
![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-low-supply-alert.gif)

Um alerta de suprimento baixo é acionado quando um nível de suprimento ultrapassa um limite mínimo definido pelo usuário e pode ser configurado separadamente para suprimentos pretos e coloridos.

Para configurar um alerta de suprimento baixo:

1. Abra a seção **Alertas de dispositivo > Alertas de suprimento**
2. Ative os alertas de suprimento baixo **
3. Digite o(s) endereço(s) de e-mail para o(s) qual(is) você deseja que os alertas sejam enviados
4. Escolha incluir alertas potenciais que exijam confirmação humana ativando **Alertas suspeitos**
5. Insira um valor percentual no limite em que você deseja que o alerta seja acionado
6. Escolha criar um nível de limite separado para suprimentos de cores ativando o **Limite separado por cor**
7. Clique em **Salvar configuração** na parte inferior da tela

### Alertas de substituição {#replacement-alerts}
![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-replacement-alert.gif)

Um alerta de substituição é disparado quando um suprimento é substituído. Alguns revendedores querem ser notificados quando um suprimento é substituído, a fim de manter o controle do estoque no local.

Para ativar alertas de substituição:

1. Abra a seção **Alertas de dispositivo > Alertas de suprimento**
2. Ative a opção **Substituição**
3. Digite o(s) endereço(s) de e-mail para o(s) qual(is) você deseja que os alertas sejam enviados
4. Clique em **Salvar configuração** na parte inferior da tela

### Alertas de substituição prematura {#premature-replacement-alerts}
![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-premature-replacement-alert.gif)

Um alerta de substituição prematura é disparado quando um suprimento é substituído antes de cair abaixo do limite definido para um alerta de suprimento baixo. Alguns revendedores querem ser notificados quando um suprimento é substituído muito cedo, a fim de gerir melhor os custos de suprimento e evitar substituições antecipadas no futuro.

Para ativar alertas de substituição prematura:

1. Abra a seção **Alertas de dispositivo > Alertas de suprimento**
2. Ative **Substituição prematura**
3. Digite o(s) endereço(s) de e-mail para o(s) qual(is) você deseja que os alertas sejam enviados
4. Clique em **Salvar configuração** na parte inferior da tela

## Alertas de serviço {#service-alerts}
![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-service-alert.gif)

Os dispositivos de impressão se desgastam, quebram ou entram em um estado em que a impressão não pode continuar sem algum tipo de intervenção humana. Um alerta de serviço é disparado quando diferentes necessidades de serviço são exigidas por um dispositivo.

Para receber alertas de suprimento baixo para fusores, tambores, resíduos de toners e outros suprimentos de manutenção:

1. Abra a seção **Alertas de dispositivo > Alertas de serviço**
2. Ative o botão **Serviço recomendado/requerido**
3. Insira um valor percentual no limite em que você deseja que o alerta seja acionado
4. Digite o(s) endereço(s) de e-mail para o(s) qual(is) você deseja que os alertas sejam enviados
5. Clique em **Salvar configuração** na parte inferior da tela

### Alertas de manutenção {#maintenance-alerts}

<!-- TO DO- Need clarification here -->

## Ignorar alertas {#skip-alerts}
![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-skip-alert.gif)

Ignorar alertas permite que você opte por ignorar temporariamente alertas de suprimento baixo. Isso normalmente é usado por revendedores que sabem quantos suprimentos de um tipo particular eles têm no local de um cliente e não querem enviar mais desse suprimento até que o estoque atual tenha sido esgotado.

Para definir ignorar alertas:

1. Abra a seção **Ignorar alertas**
2. Clique em **Adicionar suprimento**
3. Selecione o suprimento para o qual você deseja ignorar um alerta
4. Clique no ícone de edição e selecione quantos futuros alertas de suprimento baixo você deseja ignorar
5. Clique em **Salvar configuração** na parte inferior da tela

## Alertas de Volume {#volume-alerts}

Os alertas de volume podem ser configurados para notificá-lo quando um dispositivo tiver impresso um número especificado de páginas. Os alertas de volume podem ser definidos como recorrentes ou únicos. Alertas de volume recorrentes serão enviados sempre que o dispositivo imprimir o número desejado de páginas.

### Alertas de Volume Único {#one-time-volume-alerts}
Ao configurar um alerta de volume único, você decide o número de páginas em que deseja ser alertado e o(s) endereço(s) de e-mail para o(s) qual(is) deseja que o alerta seja enviado.

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-volume-alert-overview.png)

Para configurar um alerta de volume único:
1. Abra a seção **Alertas de dispositivo > Alertas de volume**
2. Ative a alternância **Limite de alertas de volume**
3. Insira um valor no campo **Próximo alerta em** para definir o número de páginas para as quais você deseja que um alerta de volume seja enviado. Você notará que a contagem de páginas atual é mostrada abaixo da entrada para referência.
4. Digite os endereços de e-mail para os quais deseja que os alertas sejam enviados
5. Clique em **Salvar configuração** na parte inferior da tela

### Alertas de Volume Recorrente {#recurring-volume-alerts}

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-recurring-volume-alert.gif)

Ao configurar um alerta de volume recorrente, você não apenas configura o volume no qual deseja que o próximo alerta seja enviado, mas também configura uma frequência na qual deseja ser alertado. Por exemplo, se eu definir meu **Próximo alerta em** para 15000 páginas, e minha **Frequência** para 5000 páginas, receberei um alerta de volume em 15000 páginas, e novamente em 20000 páginas, e novamente em 25000 páginas, e assim por diante.

Para definir um alerta de volume:

1. Abra a seção **Alertas de dispositivo > Alertas de volume**
2. Ative a alternância **Alertas de volume**
3. Ative a opção **Recorrente** 
4. Insira um valor no campo **Próximo alerta em** para definir a primeira vez que você deseja que um alerta de volume seja enviado
5. Insira um valor no campo **Frequência** para definir com que frequência você deseja receber alertas de volume após o primeiro alerta
6. Digite os endereços de e-mail para os quais deseja que os alertas sejam enviados
7. Clique em **Salvar configuração** na parte inferior da tela

## Alertas de Instalação {#install-alerts}

Os alertas de instalação são úteis para acompanhar os eventos do ciclo de vida relacionados a uma instalação, como quando uma nova instalação é registrada em sua conta ou quando uma instalação se torna obsoleta (não fez check-in por um número especificado de dias). Esses alertas podem ajudá-lo a gerenciar proativamente a integridade do seu parque.

### Novos alertas de instalação {#new-install-alert}
![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-new-install-alert.gif)

Um novo alerta de instalação é disparado sempre que uma nova instalação é registrada em sua conta.

Para configurar um novo alerta de instalação:

1. Navegue até a conta desejada
2. Na barra lateral, clique em **Admin > Gerenciar  Conta > Configurações > Alertas da instalação**
3. Ative o botão de alternância **Novos alertas de instalação**
4. Digite o(s) endereço(s) de e-mail para o(s) qual(is) você deseja que os alertas sejam enviados
5. Clique em **Salvar configuração** na parte inferior da tela

### Alerta de instalação obsoleta {#stale-install-alert}

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-stale-install-alert.gif)

Um alerta de instalação obsoleta é disparado sempre que uma instalação falha ao fazer check-in após um número configurável de dias.

Para configurar um alerta de instalação obsoleto:

1. Navegue até a conta desejada
2. Na barra lateral, clique em **Admin > Gerenciar conta > Configurações > Alertas da instalação**
3. Ative a opção **Instalação obsoleta**
4. Digite o(s) endereço(s) de e-mail para o(s) qual(is) você deseja que os alertas sejam enviados
5. Digite no campo **Dias sem atividade** quantos dias a instalação tem que falhar no check-in antes de se tornar obsoleta
6. Clique em **Salvar configuração** na parte inferior da tela

### Instalação sem atividade online novamente {#stale-install-back-online-alert}
![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-stale-install-online-alert.gif)

Um alerta de Instalação sem atividade online novamente é acionado sempre que uma instalação que estava obsoleta por um número configurável de dias volta a ficar online. Quando uma instalação estiver offline por um tempo, é possível que a instalação tenha perdido eventos importantes, como substituições de suprimento ou alertas de suprimento baixo. Nesses casos, é importante revisar manualmente os dispositivos rastreados por essa instalação para garantir que todos os eventos perdidos sejam contabilizados. Esse alerta notifica quando uma instalação voltar a ficar online para que você possa revisar manualmente os dispositivos rastreados por essa instalação.

Para configurar um alerta Instalação sem atividade online novamente:

1. Navegue até a conta desejada
2. Na barra lateral, clique em **Admin > Gerenciar Conta > Configurações > Alertas da Instalação**
3. Ative a opção **Instalação sem atividade online novamente**
4. Digite o(s) endereço(s) de e-mail para o(s) qual(is) você deseja que os alertas sejam enviados
5. Digite no campo **Dias sem atividade** quantos dias a instalação tem que falhar no check-in antes de voltar a ficar online
6. Clique em **Salvar configuração** na parte inferior da tela

## Varredura de rede {#network-scans}

As configurações de varredura de rede definem os padrões de como um [agente](./40-installing-agents.md) verifica a rede onde ele está instalado.

### Endereços IP a serem verificados {#ip-addresses-to-scan}

Você pode definir os endereços IP padrões a serem verificados pelo agente.

<!-- TO DO: INSERT GIF -->

Para gerenciar endereços IP:

1. Navegue até a conta ou instalação desejada 
2. Clique em **Configurações > descoberta de rede**
3. Adicione endereços IP em um formato válido e pressione **Enter** ou **Tab** no teclado após cada entrada
   :::info
   O Print Tracker suporta valores formatados como endereços IP individuais (10.0.0.1), um intervalo de endereços IP (10.0.0.1-10), usando um curinga (10.0.0.*) ou usando [notação Cidr](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) (10.0.0.1/24)
   :::

### Agendamento de varredura {#scanning-schedule}

Você pode gerenciar quando o agente verifica sua rede.

<!-- TO DO: INSERT GIF -->

Para alterar o agendamento de varredura:

1. Navegue até a conta ou instalação desejada
2. Clique em **Configurações > Agente de Coleta de Dados**
3. Altere a frequência com que os agentes verificam a rede em busca de alertas, alterando o valor no campo **Verifique a frequência de alerta (em minutos)**
4. Altere a hora dos dias em que os medidores são carregados selecionando um intervalo de tempo no campo **Subir leitura diária do medidor**
5. Altere o(s) dia(s) em que a rede será verificada em busca de dispositivos recém-adicionados, marcando as caixas nas opções **Busque por novos dispositivos nos dias**
6. Clique em **Salvar configuração** na parte inferior da tela

## Configurações SNMP {#snmp-settings}

Você pode gerenciar as configurações que determinam como os dados SNMP são coletados.

<!-- TO DO: INSERT GIF -->

Para ajustar as configurações SNMP:

1. Na guia **Configurações**, clique em **SNMP**
2. Digite o número de vezes que você deseja tentar novamente executar ping em um OID alterando o valor em **Max. de tentativas**
3. Altere a quantidade de tempo (em milissegundos) para esperar antes de atingir o tempo limite de uma solicitação, alterando o valor em **Tempo limite**
4. Altere o valor para a comunidade SNMP alterando o valor em **Community**
5. Altere as configurações de conexão e qual versão do SNMP está sendo usada encadeando o valor em **Versão**
6. Clique em **Salvar configuração** na parte inferior da tela

## Faturamento {#billing}

Você pode gerenciar quando e quais formatos de contagem de páginas deseja usar para cobrança.

### Medidores {#meters}

Um medidor é uma contagem de páginas coletada de um dispositivo para um formato específico de contador. Por exemplo, um dispositivo de impressão pode relatar um valor total para um formato equivalente e um formato de pés de quadrado. Escolher qual tipo de medidor você deseja faturar permite a flexibilidade de coletar todos os formatos de medidor disponíveis de um dispositivo, mas escolher qual formato será usado para faturar o cliente. Como diferentes dispositivos coletam diferentes formatos de contagem de páginas, o Print Tracker oferece a flexibilidade de especificar uma ordem de prioridade.

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-entity-change-billing-preferences.gif)

Para configurar as preferências do medidor de cobrança por conta:

1. Navegue até a conta desejada
   :::tip
   Se todos os seus dispositivos usarem os mesmos medidores para cobrança, defina suas preferências padrão em sua [conta de nível superior](./30-creating-entities.md#top-level-entity) para que todas as contas e dispositivos filhos herdem esses padrões.
   :::
2. Usando a barra lateral, clique em **Admin > Gerenciar conta**
3. Clique na guia **Configurações**
4. Abra a seção **Preferências de cobrança**
5. Ative a configuração ** Habilitar ou desabilitar o agendamento de cobrança **
6. Insira seus formatos em ordem de preferência na configuração “Formatos” em Medidores de cobrança
   :::info Informação
A ordem em que você insere suas preferências é importante. Por exemplo, se suas preferências listam **Equivalent** e depois **Life**, o Print Tracker usará o medidor equivalente se o dispositivo o reportar. Se o dispositivo não relatar medidores equivalentes, o Print Tracker usará o medidor de vida útil.
   :::
7. Digite os contadores que você deseja usar para faturamento na configuração **Contadores**
8. Clique no botão **Salvar configurações** na parte inferior da página

### Agendamento {#schedule}

O cronograma de faturamento é usado para definir o tempo e a frequência de quando você fatura seus clientes. Por exemplo, se a Conta A tiver um cronograma de faturamento de "a cada 1 mês no 15º dia do mês", o Print Tracker criará um período de faturamento que poderá ser usado para calcular todo o volume impresso na Conta A de 15 de janeiro a 15 de fevereiro, depois de 15 de fevereiro a 15 de março etc.

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-entity-change-billing-preferences.gif)

Para definir essa configuração:

1. Navegue até a conta desejada
   :::tip Dica
      Se todos os seus dispositivos usarem a mesma agenda para cobrança, configure sua agenda padrão na conta do revendedor e todas as contas e dispositivos filhos herdarão esses padrões.
   :::
2. Usando a barra lateral, clique em **Admin > Gerenciar conta**
3. Clique na guia **Configurações**
4. Abra a seção **Preferências de cobrança**
5. Ative a configuração **Habilitar ou desabilitar o agendamento de cobrança**
6. Altere o **Agendamento atual** para a frequência desejada para faturamento
7. Defina o fuso horário desejado do **Agendamento**
8. Clique no botão **Salvar configurações** na parte inferior da página
