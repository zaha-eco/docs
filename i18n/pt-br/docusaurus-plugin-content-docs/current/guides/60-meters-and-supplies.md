---
slug: meters
sidebar_position: 60
---

# Leituras do medidor
Nossa principal responsabilidade é coletar consistentemente seus dados de seus dispositivos, garantindo que seus clientes sejam cobrados com precisão e no prazo. A abordagem do Print Tracker envolve a captura de todos os dados relatados por um dispositivo e, em seguida, fornece a flexibilidade para selecionar os dados mais relevantes para seus contratos.

## O que é um medidor de leitura? {#what-is-a-meter-read}

O Print Tracker rastreia vários medidores diferentes para ajudá-lo a entender como seus clientes estão usando seus dispositivos, por exemplo:
* Total
* Total Black
* Total Color
* Total Prints
* Total Copies
* Total Faxes
* Total Scans
* Tier 1 Prints
* Tier 2 Prints
* Tier 3 Prints

Coletamos periodicamente esses medidores (e muitos outros, dependendo do dispositivo), juntamente com os níveis de fornecimento, mensagens do console e quaisquer códigos de erro que são relatados pelo dispositivo. Um **medidor lido** é a combinação de todos esses pontos de dados que são coletados em um ponto específico no tempo. Por padrão, o Print Tracker coletará leituras de medidores várias vezes ao dia e carregará pelo menos um medidor lido por dia.

## Enviando Medidores {#uploading-meters}

O Print Tracker coletará e carregará medidores de dispositivos automaticamente com base em uma programação que você pode personalizar, ou você também pode coletar e carregar os dados mais recentes sempre que quiser.

### Envio por demanda {#on-demand-uploads}
![](https://www.cdn.printtrackerpro.com/images/documentation/meters-upload-on-demand.gif)

Para carregar medidores uma vez e imediatamente:
1. Usando a barra lateral, clique em **Dispositivos > Visualizar dispositivos**
2. Clique no botão **Subir medidores**

### Envios Automáticos {#automated-uploads}

O Print Tracker carregará automaticamente medidores todos os dias durante uma das seguintes janelas:
* 12am - 6am
* 6am - 12pm
* 12pm - 6pm
* 6pm - 12am

Consulte [Scanning Schedule](./settings#scanning-schedule) para obter mais detalhes sobre como alterar a agenda para atender às suas necessidades.

## Visualizando Medidores e Suprimentos  {#viewing-meters-and-supplies}

Depois que as leituras do medidor forem coletadas e carregadas com segurança, você poderá consultá-las com um [relatório personalizado](./reports), consultar o histórico do medidor ao longo do tempo para um dispositivo específico ou visualizar os dados usando as ferramentas de visualização integradas do Print Tracker.

[//]: # (### Device Details)

[//]: # ()
[//]: # (To view the key billing meters and supplies for a device:)

[//]: # (1. Using the sidebar, click **Devices > View devices**)

[//]: # (2. Click on a device in the **View devices** table)

[//]: # ()
[//]: # (This will open details for a device. On the **Overview** tab, you can see the key billing meters and any supplies the device reports.)

### Histórico de medidor {#meter-history}
![](https://www.cdn.printtrackerpro.com/images/documentation/meters-view-meter-history.gif)

Para exibir o histórico de leituras de medidor de um dispositivo:
1. Usando a barra lateral, clique em **Dispositivos > Visualizar dispositivos**
2. Encontre o dispositivo para o qual você gostaria de ver o histórico do medidor
3. Clique no ícone de 3 pontos na última coluna da tabela **Visualizar dispositivos**
4. Clique em **Visualizar histórico do medidor**

:::info Informação
Detalhes adicionais sobre como personalizar os dados exibidos podem ser encontrados na página [Relatórios personalizados](./reports).
:::

### Volume ao longo do tempo {#volume-over-time}
![](https://www.cdn.printtrackerpro.com/images/documentation/meters-view-volume.gif)

Para exibir o comportamento de uso ao longo do tempo:
1. Usando a barra lateral, clique em **Dispositivos > Visualizar dispositivos**
2. Clique em um dispositivo na tabela **Visualizar dispositivos**
3. Clique na guia **Relatórios**
4. Veja o gráfico **Contagem de páginas**

### Uso de Suprimentos {#supply-burn-down}
![](https://www.cdn.printtrackerpro.com/images/documentation/meters-view-supply-burndown.gif)

Para ver como os níveis de fornecimento diminuíram ao longo do tempo:
1. Usando a barra lateral, clique em **Dispositivos > Visualizar dispositivos**
2. Clique em um dispositivo na tabela **Visualizar dispositivos**
3. Clique na guia **Relatórios**
4. Veja o gráfico **Suprimentos**

## Medidores de cobrança {#billing-meters}

Os medidores de cobrança são uma coleção de medidores que você pode usar para faturar seu cliente e permitir que especifique quais formatos e contadores você gostaria de ver em seus relatórios, ou enviar para seu ERP se estiver usando uma [integração de terceiros](./integrations). Esses padrões são exibidos na guia Visão geral do dispositivo e em todos os relatórios personalizados por padrão. Como muitos dispositivos medem contagens de páginas usando diferentes formatos de medição e contadores, o Print Tracker permite que você personalize por dispositivo quais desses formatos e contadores de medição você precisa

### Formatos e Contadores {#formats-and-counters}

Um **formato** é um método de cálculo usado por um fabricante para contar páginas. Essas metodologias de cálculo são definidas pelo fabricante, não pelo Print Tracker. O Print Tracker classificou essas metodologias nos seguintes termos:

| Formato                 | Descrição                                                                                                                                                                                                    |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Life**               | Geralmente conta qualquer pedaço de papel que sai da máquina como uma página. Se o fabricante não indicar especificamente um dos outros formatos, o Print Tracker assumirá que está usando o formato life. |
| **Equivalent**         | Uma metodologia projetada para equivalizar contagens de páginas com base em fatores como simplex, duplex, tamanho do papel, etc. Por exemplo, uma impressão duplex contará como 2 páginas, enquanto um envelope poderá contar como 1/3 de uma página.    |
| **Linear Feet/Meters** | Calcula os medidores com base no número de pés lineares ou metros impressos pelo dispositivo.                                                                                                                          |
| **Square Feet/Meters** | Calcula os medidores com base no número de pés quadrados ou metros impressos pelo dispositivo.                                                                                                                          |
| **Engine**             | Uma metodologia usada pela HP para indicar o número de ciclos pelos quais o mecanismo de impressão passou.                                                                                                                   |
Exemplos de **contadores** incluem:
* Total
* Total Black
* Total Color
* Total Prints
* Total Copies
* Tier 1 Prints
* Tier 2 Prints
* Tier 3 Prints

Na maioria dos casos, o mesmo contador aparecerá em vários formatos, o que é outra maneira de dizer que, para um determinado dispositivo, o contador total pode ser representado em contagens de páginas equivalentes, bem como contagens de páginas do mecanismo (life). Os medidores de cobrança que você escolher devem depender de como o contrato do seu dispositivo está estruturado.

### Configurando preferências {#configuring-preferences}
Como os contratos podem variar de um cliente para o outro ou até mesmo de um dispositivo para o outro, os medidores de cobrança podem ser personalizados por conta ou dispositivo. Para definir essas configurações, consulte [Configurando medidores de faturamento](./settings#meters).

## Agendamento de Cobrança {#billing-schedule}
O cronograma de faturamento é usado para definir o tempo e a frequência de quando você fatura seus clientes. Por exemplo, se a Conta A tiver um cronograma de faturamento de "a cada 1 mês no 15º dia do mês", o Print Tracker criará um período de faturamento que poderá ser usado para calcular todo o volume impresso na Conta A de 15 de janeiro a 15 de fevereiro, depois de 15 de fevereiro a 15 de março, etc.

Para definir essa configuração, consulte [Agendamento de cobrança](./settings#schedule).
