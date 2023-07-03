---
slug: reports
sidebar_position: 80
---

import BetaLabel from '@site/src/components/BetaLabel'

# Relatórios Personalizados
Ter acesso aos dados certos pode ajudar as empresas a encontrar respostas para perguntas importantes e tomar melhores decisões. Os relatórios personalizados do Print Tracker permitem que os usuários explorem seus dados de uma maneira que atenda às suas necessidades, permitindo que eles criem e salvem relatórios personalizados.

## Visão geral {#overview}
Os relatórios personalizados oferecem suporte a uma variedade de tipos de relatório, como relatórios de dispositivo, instalação e medidor, tornando-os versáteis para diferentes tipos de perguntas comerciais. Essa flexibilidade permite que você se concentre em aspectos específicos de suas operações. Para criar e personalizar esses relatórios, o recurso utiliza [SQLite](#structured-query-language-sql), uma variante do SQL que é leve e eficiente. Ao aproveitar o SQLite, você pode gerenciar e manipular facilmente seus dados, criando relatórios personalizados que ajudam você a entender melhor seus negócios e tomar decisões orientadas por dados.

## Linguagem de Consulta Estruturada (SQL) {#structured-query-language-sql}
Para permitir que você personalize seus relatórios, os relatórios personalizados utilizam SQL, ou Structured Query Language, uma linguagem de programação projetada especificamente para ajudá-lo a acessar e recuperar informações. O SQL permite selecionar e filtrar as informações precisas, além de permitir que você classifique, agrupe e execute cálculos nesses dados. Isso o torna uma ferramenta poderosa e fácil de usar para obter e analisar rapidamente as informações armazenadas em um formato estruturado, atendendo às suas necessidades ou interesses específicos.

:::info
Os relatórios personalizados utilizam uma variante do SQL chamada [SQLite](https://www.sqlite.org/lang.html).
:::

## Criando relatórios {#creating-reports}
![](https://www.cdn.printtrackerpro.com/images/documentation/custom-reports-creating-report.gif)

Para criar um relatório personalizado:
1. Usando a barra lateral, clique em **Relatórios > Relatórios**
2. Clique em **Novo relatório**
3. Digite um nome para o relatório
4. Clique em **Confirmar**
5. Seu novo relatório foi criado e terá aparecido na lista de relatórios personalizados
6. Clique no seu novo relatório para abri-lo

### Configuração do Relatório {#report-configuration}
![img.png](https://www.cdn.printtrackerpro.com/images/documentation/custom-reports-report-configuration.png)

Você pode configurar um relatório usando o editor de relatórios. O editor de relatórios permite:
* Alterar o nome e a descrição do relatório
* Alterar o tipo de relatório
* Exibir o esquema do relatório (as colunas que campos que estão disponíveis para uso no relatório)
* Alterar a consulta SQL usada para gerar o relatório
* Execute o relatório para visualizar uma amostra do relatório
* Exportar o relatório para um arquivo CSV

Para obter mais informações sobre os tipos de relatório disponíveis, consulte [Tipos de relatório](#report-types).

### Visualizador de esquemas {#schema-viewer}
![](https://www.cdn.printtrackerpro.com/images/documentation/custom-reports-table-schema.png)

Cada [tipo de relatório](#report-types) tem seu próprio esquema. O esquema determina quais colunas estão disponíveis para uso em seu relatório personalizado. Cada coluna tem um nome e um tipo de dados específico. Por exemplo, para utilizar o firmware do dispositivo em um relatório, você pode fazer referência à coluna `firmware`. O tipo de dados desta coluna é [`varchar`](https://en.wikipedia.org/wiki/Varchar), que é uma cadeia de caracteres. Por outro lado, a coluna `created_timestamp` é de time `datetime` indicando que podemos executar cálculos personalizados relacionados à data nesta coluna, como calcular o número de dias desde que este dispositivo foi criado.

### Editor de Consultas {#query-editor}
![](https://www.cdn.printtrackerpro.com/images/documentation/custom-reports-query-editor.png)

O editor de consultas é onde você criará, personalizará e testará seus relatórios. Cada [tipo de relatório](#report-types) vem com uma consulta padrão que você pode usar como ponto de partida. Você também pode usar o visualizador de esquema para ajudá-lo a criar sua consulta. As consultas são escritas em SQL usando a linguagem [SQLite](#structured-query-language-sql). 

### Resultados da consulta {#query-results}
![](https://www.cdn.printtrackerpro.com/images/documentation/custom-reports-query-results.png)

Sempre que você clicar no botão **Executar** no [editor de consultas](#query-editor), os resultados serão exibidos abaixo do editor. Os resultados são apenas uma amostra de seus dados, o que permite que você teste rapidamente seus relatórios em um pequeno subconjunto de seus dados sem ter que esperar que todo o relatório seja executado.

:::info No results?
Ao adicionar cláusulas 'WHERE' à sua consulta, você pode descobrir que nenhum resultado é retornado quando você testa sua consulta. Isso ocorre porque ao testar o relatório clicando em **Executar**, a consulta é executada apenas em uma amostra de seus dados, e não há garantia de que as linhas no exemplo também corresponderão à cláusula 'WHERE'. Para esses tipos de consultas, você pode usar o botão **Exportar** para exportar o relatório inteiro para um arquivo CSV e, em seguida, abrir o arquivo em um aplicativo de planilha para exibir os resultados.
:::

## Editando e salvando relatórios {#editing-and-saving-reports}
![](https://www.cdn.printtrackerpro.com/images/documentation/custom-reports-saving.gif)

Você pode alterar o tipo de relatório, o nome, a descrição ou a consulta a qualquer momento. Para salvar suas alterações, clique no botão **Salvar** no canto inferior direito.

## Agendamento de Relatórios {#scheduling-reports}
![](https://www.cdn.printtrackerpro.com/images/documentation/custom-reports-new-schedule.gif)

Você tem a flexibilidade de executar relatórios ad-hoc sempre que precisar acessar informações específicas rapidamente. No entanto, talvez seja necessário receber um relatório em um agendamento predeterminado, como um relatório de faturamento mensal. O Print Tracker permite anexar qualquer número de agendamentos a um relatório personalizado. Ao agendar um relatório, você pode escolher o intervalo, a hora do dia, as contas onde o relatório deve ser executado e o Print Tracker irá gerar automaticamente o relatório e enviá-lo para o seu e-mail. Dessa forma, você recebe o relatório mais atualizado diretamente em sua caixa de entrada, sem precisar executá-lo manualmente todas as vezes.

Para agendar um relatório personalizado:
1. Usando a barra lateral, clique em **Relatórios > Relatórios**
2. Clique no relatório que deseja agendar
3. Clique na guia **Agendamentos**
4. Clique em **Novo Agendamento**

### Configuração do Agendamento {#schedule-configuration}
![](https://www.cdn.printtrackerpro.com/images/documentation/custom-reports-edit-schedule-report.png)

Há várias opções disponíveis ao agendar um relatório:
* Conta: Você pode criar um único relatório personalizado, mas criar relatórios agendados que são executados em agendamentos diferentes e para contas diferentes. Por exemplo, talvez você queira criar um relatório de medidor atual para cada um de seus clientes. Nesse caso, você [criaria um único relatório](#creating-reports) e, em seguida, criaria um agendamento para cada uma de suas contas de clientes.
* Habilitado: Em alguns casos, você pode querer impedir que um relatório agendado seja enviado sem ter que excluir o relatório, ou o agendamento. Nesse caso, você pode desativar o botão de alternância **Habilitado** e o relatório não será mais enviado.
* Agendamento de relatório: Você pode configurar o relatório para ser executado em qualquer intervalo que desejar. Consulte [Escolhendo o agendamento do relatório](#choosing-the-report-schedule) para obter mais informações sobre como escolher o agendamento correto para o seu relatório.
* Fuso horário: Muitas frotas de impressoras são distribuídas em fusos horários distintos. Para garantir que o relatório seja enviado na hora correta, você pode selecionar o fuso horário no qual o relatório deve ser enviado.
* E-mail: Você pode configurar o relatório para ser enviado para qualquer número de endereços de e-mail.
* Assunto: Você pode personalizar o assunto do e-mail. Consulte [Modelo de Variáveis de Email](#email-template-variables) para obter uma lista de variáveis que você pode usar na linha de assunto.
* Corpo: Você pode personalizar o corpo do e-mail.  Consulte [Modelo de Variáveis de Email](#email-template-variables) para obter uma lista de variáveis que você pode usar no corpo.

### Escolhendo o agendamento do relatório {#choosing-the-report-schedule}
O correto agendamento do relatório depende do [tipo de relatório](#report-types) que você está usando. Entender como os agendamentos funcionam em conjunto com o tipo de relatório ajudará você a escolher a agenda correta para o relatório.

### Modelo de Variáveis de E-mail {#email-template-variables}
Os e-mails de relatório personalizados agendados podem ser configurados com um assunto e uma linha de corpo personalizados. Para facilitar a personalização desses campos, você pode usar variáveis no assunto e no corpo. As seguintes variáveis estão disponíveis:
   
| Variável          | Descrição                                                                                     |
|-------------------|-----------------------------------------------------------------------------------------------|
| `{{.ReportName}}` | O nome do relatório. Nas capturas de tela de exemplo acima, o nome do relatório é "My Report" |

:::info
O modelo de variáveis de e-mail são um recurso mais recente. Entre em contato com [support@printtrackerpro.com](mailto:support@printtrackerpro.com) se quiser ver variáveis adicionais suportadas.
:::

[//]: # (### Billing Period Report)

## Tipos de relatório {#report-types}
Cada relatório personalizado deve especificar um tipo de relatório. Um tipo de relatório determina os dados que estão disponíveis para uso em seu relatório personalizado. Por exemplo, o tipo de relatório [Dispositivo](#device) terá apenas colunas relacionadas a dispositivos, enquanto o tipo de relatório [Análise de Volume](#volume-analysis) terá colunas comparando leituras de medidor entre duas datas diferentes. Ao criar um relatório personalizado, você escolherá o tipo de relatório que melhor atende às suas necessidades.

### Dispositivo {#device}
Os relatórios de dispositivo contêm apenas informações sobre o dispositivo. Esses relatórios geralmente são úteis para entender sua frota. O relatório de dispositivo contém as seguintes colunas:

| Column Name                         | Data Type  | Description                                                                                                                                |
|-------------------------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                                | `varchar`  | O identificador exclusivo do dispositivo                                                                                                   |
| `dealer_id`                         | `varchar`  | O identificador exclusivo da Conta do revendedor (se você for um revendedor, essa será sua Conta de nível raiz)                       |
| `dealer_name`                       | `varchar`  | O nome da Conta do revendedor                                                                                                              |
| `entity_id`                         | `varchar`  | O identificador exclusivo da Conta à qual este dispositivo pertence (a Conta diretamente acima do dispositivo)                      |
| `entity_name`                       | `varchar`  | O nome da Conta à qual este dispositivo pertence                                                                                           |
| `integration_id`                    | `varchar`  | O identificador exclusivo do dispositivo importado de [outras integrações, como E-Automate](./integrations#third-party-integrations)        |
| `asset_id`                          | `varchar`  | Um identificador personalizado que você pode especificar para um dispositivo. Estes são geralmente identificadores amigáveis para humanos que são exclusivos para o seu negócio  |
| `make`                              | `varchar`  | O fabricante do dispositivo (por exemplo, HP, Brother)                                                                                     |
| `model`                             | `varchar`  | O modelo do dispositivo (por exemplo, OfficeJet 8600)                                                                                      |
| `serial_number`                     | `varchar`  | O número de série do dispositivo, conforme especificado pelo dispositivo                                                                   |
| `custom_serial_number`              | `varchar`  | O número de série do dispositivo conforme especificado por um usuário no webadmin |                                                        |
| `location`                          | `varchar`  | A localização do dispositivo conforme especificado pelo dispositivo                                                                        |
| `custom_location`                   | `varchar`  | A localização do dispositivo conforme configurado por um usuário no webadmin                                                               |
| `ip_address`                        | `varchar`  | O endereço IP do dispositivo                                                                                                               |
| `mac_address`                       | `varchar`  | O endereço MAC do dispositivo                                                                                                              |
| `hostname`                          | `varchar`  | O [hostname](https://en.wikipedia.org/wiki/Hostname) do dispositivo                                                                        |
| `system_name`                       | `varchar`  | O [nome do sistema SNMP](https://oidref.com/1.3.6.1.2.1.1.5) do dispositivo                                                                |
| `firmware`                          | `varchar`  | A versão do firmware ou o datecode atualmente instalado no dispositivo                                                                     |
| `note`                              | `varchar`  | As notas anexadas ao dispositivo. As notas podem ser adicionadas no Print Tracker                                                          |
| `source_install_name`               | `varchar`  | O nome do computador que executa o agente de coleta de dados do Print Tracker que está gerenciando este dispositivo                       |
| `source_install_private_ip_address` | `varchar`  | O endereço IP privado do computador que executa o agente de coleta de dados do Print Tracker.                                              |
| `source_install_public_ip_address`  | `varchar`  | O endereço IP público do computador que executa o agente de coleta de dados do Print Tracker.                                              |
| `created_timestamp`                 | `datetime` | O carimbo de data/hora quando este dispositivo foi criado no Print Tracker |                                                               |
| `modified_timestamp`                | `datetime` | O carimbo de data/hora quando este dispositivo foi modificado no Print Tracker                                                             |
| `latest_meter_timestamp`            | `datetime` | O carimbo de data/hora do medidor carregado mais recentemente                                                                              |
| `managed`                           | `boolean`  | Indica se este dispositivo é [gerenciado ou não gerenciado](./discovery#managed-devices) no Print Tracker                           |

Aqui estão alguns exemplos de como você pode utilizar o tipo de relatório de dispositivo:

#### Número de dias desde o último medidor por dispositivo  {#number-of-days-since-last-meter-by-device}
Esse relatório retorna o número de dias desde que o último medidor foi carregado para cada dispositivo. Isso é útil para identificar dispositivos que estão obsoletos e talvez precisem ser revisados manualmente.

```sql
SELECT
    entity_name as 'Entity',
    make as Make,
    model as Model,
    serial_number as 'Serial Number',
    asset_id as 'Asset ID',
    ip_address as 'IP Address',
    mac_address as 'Mac Address',
    DATETIME(latest_meter_timestamp) as 'Latest Meter Timestamp',

    -- Calculates the number of days between the current day and the latest meter
    ROUND(JULIANDAY(datetime()) - JULIANDAY(latest_meter_timestamp)) as 'Days Since Last Meter',
    managed as 'Managed'
FROM devices
WHERE managed = true
ORDER BY latest_meter_timestamp desc
```

#### Número de dispositivos por marca e modelo {#number-of-devices-by-make-and-model}
This report returns the number of devices by make and model, ordered by the most popular model.

```sql
SELECT
    make as Make,
    model as Model,
    COUNT(*) as 'Number of Devices'
FROM devices
GROUP BY make, model
ORDER BY COUNT(*) DESC
```

### Instalação {#install}
O relatório de instalação contém informações sobre o agente de coleta de dados do Print Tracker. O relatório de instalações contém as seguintes colunas:

| Nome da Coluna            | Data Type  | Descrição                                                                                                         |                                                                                                                  
|---------------------------|------------|-------------------------------------------------------------------------------------------------------------------|
| `id`                      | `varchar`  | O identificador exclusivo para a instalação                                                                       |
| `entity_id`               | `varchar`  | O identificador exclusivo da Conta à qual esta instalação pertence (a Conta diretamente acima da instalação       |
| `entity_name`             | `varchar`  | O nome da Conta à qual esta instalação pertence                                                                   |
| `hostname`                | `varchar`  | O [hostname](https://en.wikipedia.org/wiki/Hostname) do dispositivo                                               |
| `created_timestamp`       | `datetime` | O carimbo de data/hora quando esta instalação foi registrada no Print Tracker                                     |
| `modified_timestamp`      | `datetime` | O carimbo de data/hora quando esta instalação foi modificada no Print Tracker                                     |
| `last_check_in_timestamp` | `datetime` | A última vez que esta instalação fez check-in com o Print Tracker                                                 |
| `ip_address`              | `varchar`  | O endereço IP privado da instalação                                                                               |
| `public_ip_address`       | `varchar`  | O endereço IP público da instalação                                                                               |
| `version`                 | `varchar`  | A versão do agente de coleta de dados do Print Tracker                                                            |
| `os`                      | `varchar`  | O sistema operacional do computador (por exemplo, Microsoft Windows 10 Pro)                                       |
| `os_family`               | `varchar`  | A família de sistemas operacionais do computador (por exemplo, Standalone Workstation)                            |
| `os_version`              | `varchar`  | A versão do sistema operacional do computador (por exemplo, 10.0.19045 Build 19045)                               |
| `cpu_architecture`        | `varchar`  | A arquitetura da CPU do computador (por exemplo, 64 ou 32)                                                        |
| `antivirus`               | `varchar`  | O aplicativo antivírus instalado neste computador                                                                 |
| `is_laptop`               | `boolean`  | Indica se o agente está instalado em um laptop                                                                    |
| `is_local`                | `boolean`  | Indica se o agente está configurado para rastrear dispositivos conectados por USB (somente Windows)               |
| `reporting_devices`       | `integer`  | O número de dispositivos gerenciados rastreados por esta instalação que relataram um medidor este mês             |
| `active_devices`          | `integer`  | O número de dispositivos gerenciados rastreados por esta instalação, independentemente de terem relatado um medidor este mês|

Aqui estão alguns exemplos de como você pode utilizar o tipo de relatório de instalação:

#### Instalações Obsoletas {#stale-installs}
Esse relatório retorna todas as instalações que não fizeram check-in em mais de 24 horas.

```sql
SELECT
    entity_name as 'Entity Name',
    hostname as 'Hostname',
    version as 'Version',
    os as 'Operating System',
    antivirus as 'Antivirus',
    is_laptop as 'Laptop',
    ip_address as 'IP Address',
    DATETIME(created_timestamp) as 'Created',
    DATETIME(last_check_in_timestamp) as 'Check-in',

    -- Count the number of days since this install last checked in
    printf('%d days', ROUND(JULIANDAY(DATE('now')) - JULIANDAY(last_check_in_timestamp), 0)) as 'Offline',

    -- Add a column with a link to the install so that it's easy to find
    printf('https://app.printtrackerpro.com/entity/%s/installs/list?searchTerm=%s', entity_id, id) as 'Link'
FROM installs
WHERE status = 1
    -- Only return installs that haven't checked in in more than 24 hours
    AND last_check_in_timestamp < DATE('now', '-24 hours')
ORDER BY last_check_in_timestamp DESC
```

### Medidor de Atual {#current-meter}
O relatório de leitura do medidor atual permite que você visualize seus dispositivos e os valores mais recentes de todos os seus medidores. O relatório do medidor atual contém as seguintes colunas:

| Nome da coluna           | Data Type  | Descrição                                                                                                                                                                                                                                                                                                    |
|--------------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `device_id`              | `varchar`  | O identificador exclusivo do dispositivo                                                                                                                                                                                                                                                                     |
| `entity_id`              | `varchar`  | O identificador exclusivo da Conta à qual este dispositivo pertence (a Conta diretamente acima do dispositivo)                                                                                                                                                                                               |
| `entity_name`            | `varchar`  | O nome da Conta à qual este dispositivo pertence                                                                                                                                                                                                                                                             |
| `integration_id`         | `varchar`  | O identificador exclusivo do dispositivo importado de [outras integrações, como E-Automate](./integrations#third-party-integrations)                                                                                                                                                                      |
| `asset_id`               | `varchar`  | Um identificador personalizado que você pode especificar para um dispositivo. Estes são geralmente identificadores amigáveis para humanos que são exclusivos para o seu negócio                                                                                                                             |
| `make`                   | `varchar`  | O fabricante do dispositivo (por exemplo, HP, Brother)                                                                                                                                                                                                                                                       |
| `model`                  | `varchar`  | O modelo do dispositivo (por exemplo, OfficeJet 8600)                                                                                                                                                                                                                                                        |
| `serial_number`          | `varchar`  | O número de série do dispositivo coletado durante a última leitura do medidor. Isso deve sempre corresponder ao `device_serial number`                                                                                                                                                                   |
| `device_serial_number`   | `varchar`  | O número de série do dispositivo, conforme especificado pelo dispositivo                                                                                                                                                                                                                                     |
| `custom_serial_number`   | `varchar`  | O número de série do dispositivo conforme especificado por um usuário no webadmin                                                                                                                                                                                                                            |
| `location`               | `varchar`  | A localização do dispositivo conforme especificado pelo dispositivo                                                                                                                                                                                                                                          |
| `custom_location`        | `varchar`  | A localização do dispositivo conforme configurado por um usuário no webadmin                                                                                                                                                                                                                                 |
| `ip_address`             | `varchar`  | O endereço IP do dispositivo                                                                                                                                                                                                                                                                                 |
| `mac_address`            | `varchar`  | O endereço MAC do dispositivo                                                                                                                                                                                                                                                                                |
| `hostname`               | `varchar`  | O [hostname](https://en.wikipedia.org/wiki/Hostname) do dispositivo                                                                                                                                                                                                                                          |
| `system_name`            | `varchar`  | O [system name SNMP](https://oidref.com/1.3.6.1.2.1.1.5) do dispositivo                                                                                                                                                                                                                                      |
| `firmware`               | `varchar`  | A versão do firmware ou o datecode atualmente instalado no dispositivo                                                                                                                                                                                                                                       |
| `latest_meter_timestamp` | `datetime` | O carimbo de data/hora do medidor carregado mais recentemente                                                                                                                                                                                                                                                |
| `managed`                | `boolean`  | Indica se este dispositivo é [gerenciado ou não gerenciado](./discovery#managed-devices) no Print Tracker                                                                                                                                                                                                    |
| `pageCounts_*`           |            | | Todas as colunas de contador disponíveis começam com o prefixo `pageCounts_` seguido pelo contador. O Print Tracker suporta mais de 450 contagens de páginas diferentes. Para obter mais detalhes sobre as contagens de página disponíveis em relatórios personalizados, consulte [Colunas de medidor e suprimento](#meter-and-supply-columns)                                 |
| `supplies_*`             |            | Todas as colunas de suprimento disponíveis começam com o prefixo 'supplies_' seguido pelos atributos e valores de fornecimento. O Print Tracker suporta mais de 375 suprimentos e atributos diferentes. Para obter mais detalhes sobre os suprimentos e atributos em relatórios personalizados, consulte [Colunas de medidor e suprimento](#meter-and-supply-columns) |

Aqui estão alguns exemplos de como você pode utilizar o tipo de relatório de medidor atual:

#### Valores atuais do contador por dispositivo {#current-counter-values-by-device}
Esse relatório retorna os valores atuais de todos os contadores para cada dispositivo.

```sql
SELECT
    entity_name as 'Entity',
    make as Make,
    model as Model,
    serial_number as 'Serial Number',
    asset_id as 'Asset ID',
    ip_address as 'IP Address',
    DATETIME(latest_meter_timestamp) as 'Latest Meter Timestamp',
    pageCounts_default_total as 'Total',
    pageCounts_default_totalBlack as 'Total Black',
    pageCounts_default_totalColor as 'Total Color'
FROM meters
WHERE managed = true
ORDER BY latest_meter_timestamp desc
```

### Análise de Volume {#volume-analysis}
O relatório de análise de volume permite comparar as leituras do medidor entre duas datas. O relatório de análise de volume padrão calcula volumes adicionais de colunas subtraindo os contadores atuais dos contadores anteriores. O relatório de análise de volume contém as seguintes colunas:

| Nome da Coluna           | Data Type  | Descrição                                                                                                                                                                                                                                                                                                                                  |
|--------------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `device_id`              | `varchar`  | O identificador exclusivo do dispositivo                                                                                                                                                                                                                                                                                                   |
| `entity_id`              | `varchar`  | O identificador exclusivo da Conta à qual este dispositivo pertence (a Conta diretamente acima do dispositivo)                                                                                                                                                                                                                             |
| `entity_name`            | `varchar`  | O nome da Conta à qual este dispositivo pertence                                                                                                                                                                                                                                                                                           |
| `integration_id`         | `varchar`  | O identificador exclusivo do dispositivo importado de [outras integrações, como E-Automate](./integrations#third-party-integrations)                                                                                                                                                                                                    |
| `asset_id`               | `varchar`  | Um identificador personalizado que você pode especificar para um dispositivo. Estes são geralmente identificadores amigáveis para humanos que são exclusivos para o seu negócio                                                                                                                                                           |
| `make`                   | `varchar`  | O fabricante do dispositivo (por exemplo, HP, Brother)                                                                                                                                                                                                                                                                                     |
| `model`                  | `varchar`  | O modelo do dispositivo (por exemplo, OfficeJet 8600)                                                                                                                                                                                                                                                                                       |
| `serial_number`          | `varchar`  | O número de série do dispositivo coletado durante a última leitura do medidor. Isso deve sempre corresponder ao `device_serial number`                                                                                                                                                                                                                    |
| `device_serial_number`   | `varchar`  | O número de série do dispositivo, conforme especificado pelo dispositivo                                                                                                                                                                                                                                                                    |
| `custom_serial_number`   | `varchar`  | O número de série do dispositivo conforme especificado por um usuário no webadmin                                                                                                                                                                                                                                                           |
| `location`               | `varchar`  | A localização do dispositivo conforme especificado pelo dispositivo                                                                                                                                                                                                                                                                         |
| `custom_location`        | `varchar`  | A localização do dispositivo conforme configurado por um usuário no webadmin                                                                                                                                                                                                                                                                |
| `ip_address`             | `varchar`  | O endereço IP do dispositivo                                                                                                                                                                                                                                                                                                                |
| `mac_address`            | `varchar`  | O endereço MAC do dispositivo                                                                                                                                                                                                                                                                                                              |
| `hostname`               | `varchar`  | O [hostname](https://en.wikipedia.org/wiki/Hostname) do dispositivo                                                                                                                                                                                                                                                                       |
| `system_name`            | `varchar`  | O [system name SNMP](https://oidref.com/1.3.6.1.2.1.1.5) do dispositivo                                                                                                                                                                                                                                                                    |
| `firmware`               | `varchar`  | A versão do firmware ou o datecode atualmente instalado no dispositivo                                                                                                                                                                                                                                                                         |
| `latest_meter_timestamp` | `datetime` | O carimbo de data/hora do medidor carregado mais recentemente                                                                                                                                                                                                                                                                                   |
| `managed`                | `boolean`  | Indica se este dispositivo é [gerenciado ou não gerenciado](./discovery#managed-devices) no Print Tracker                                                                                                                                                                                                                                    |
| `first_pageCounts_*`     |            | Todas as colunas de contador disponíveis a partir da leitura do primeiro/mais antigo medidor começam com o prefixo 'first_pageCounts_' seguido pelo contador. O Print Tracker suporta mais de 450 contagens de páginas diferentes. Para obter mais detalhes sobre as contagens de página disponíveis em relatórios personalizados, consulte [Colunas de medidor e suprimento](#meter-and-supply-columns)                      |
| `last_pageCounts_*`      |            | Todas as colunas de contador disponíveis a partir do último/mais recente medidor lido começam com o prefixo 'last_pageCounts_' seguido pelo contador. O Print Tracker suporta mais de 450 contagens de páginas diferentes. Para obter mais detalhes sobre as contagens de página disponíveis em relatórios personalizados, consulte [Colunas de medidor e suprimento](#meter-and-supply-columns)                          |
| `first_supplies_*`       |            | Todas as colunas de suprimento disponíveis a partir do primeiro/mais antigo começam com o prefixo 'first_supplies_' seguido pelos atributos e valores do suprimento. O Print Tracker suporta mais de 375 suprimentos e atributos diferentes. Para obter mais detalhes sobre os suprimentos e atributos em relatórios personalizados, consulte [Colunas de medidor e suprimento](#meter-and-supply-columns) |
| `last_supplies_*`        |            | Todas as colunas de suprimento disponíveis a partir da última/mais antiga começam com o prefixo 'first_supplies_' seguido pelos atributos e valores de fornecimento. O Print Tracker suporta mais de 375 suprimentos e atributos diferentes. Para obter mais detalhes sobre os suprimentos e atributos em relatórios personalizados, consulte [Colunas de medidor e suprimento](#meter-and-supply-columns)    |

#### Volume total por dispositivo {#total-volume-by-device}
Esta consulta de exemplo retorna o número total de páginas impressas para cada dispositivo:
```sql
SELECT
    entity_name as 'Entity',
    make as 'Make',
    model as 'Model',
    serial_number as 'Serial Number',
    asset_id as 'Asset ID',
    ip_address as 'IP Address',
    mac_address as 'Mac Address',
    location as 'Location',
    DATETIME(first_meter_timestamp) as 'First Timestamp',
    DATETIME(last_meter_timestamp) as 'Last Timestamp',
    ROUND(JULIANDAY(last_meter_timestamp) - JULIANDAY(first_meter_timestamp), 2) as 'Days Between Meters',
    last_pageCounts_default_total - first_pageCounts_default_total as 'Total Volume'
FROM meters
```

### Período de cobrança {#billing-period}
O relatório de período de faturamento tem o mesmo esquema (colunas) que o [relatório de análise de volume](#volume-analysis), no entanto, em vez de escolher uma data de início e uma data de término como faria para um relatório de análise de volume, você especifica apenas uma **data de faturamento**. Esse relatório é baseado em um [agendamento de cobrança do dispositivo](./20-configuring-settings.md#schedules). Os dispositivos serão incluídos neste relatório, desde que o agendamento de cobrança do dispositivo esteja alinhado com a data de cobrança escolhida.

Os períodos de cobrança às vezes são difíceis de entender, então vamos a um exemplo. Vamos supor que tenhamos os seguintes dispositivos, cada um com uma programação de cobrança diferente:

| Dispositivo       | Agendamento de Cobrança          |
|-------------------|----------------------------------|
| HP LaserJet M477  | 1º dia do mês, a cada 2 meses    |
| HP OfficeJet 8700 | 1º dia do mês, todo mês          |

Você pode notar que, embora esses dois dispositivos tenham agendas de faturamento diferentes, na verdade ambos precisam ser cobrados no mesmo dia, a cada dois meses. No diagrama a seguir, observe como no mês 1 (primeiro círculo azul) cobramos apenas o cliente pelo dispositivo HP OfficeJet 8600. No entanto, no segundo mês (segundo círculo azul) faturamos o cliente por ambos os dispositivos, já que um dos dispositivos só deve ser faturado bimestralmente.

![](https://www.cdn.printtrackerpro.com/images/documentation/custom-reports-billing-schedules.png)

O relatório de período de cobrança leva em consideração essa ideia de agendamentos de cobrança diferentes por dispositivo e permite que você crie um único relatório que inclua todos os dispositivos cujas agendas de cobrança chegam na data selecionada ao configurar o relatório, independentemente do intervalo do agendamento de cobrança de cada dispositivo. 

Mencionamos anteriormente que o relatório de período de cobrança tem todas as mesmas colunas que o relatório de análise de volume, o que significa que o relatório nos dá acesso às colunas de leitura do primeiro e do último medidores no período de cobrança. Embora os carimbos de data/hora de leitura do último medidor sejam quase sempre a mesma data em todos os seus dispositivos (a data de cobrança do relatório), a primeira leitura do medidor pode variar de dispositivo para dispositivo. No exemplo anterior, quando recebermos nosso relatório de período de cobrança, a primeira leitura do medidor da HP LaserJet M477 será há dois meses, e a primeira leitura do medidor do HP OfficeJet 8700 será há um mês. 

### Esgotamento estimado {#estimated-depletion}
O relatório de esgotamento estimado pode ser usado para ajudá-lo a prever quando um suprimento instalado se esgotará. O Print Tracker analisa os últimos 90 dias de leituras do medidor e usa padrões históricos de impressão para fazer sua previsão.

:::caution Aviso
O relatório de esgotamento estimado baseia-se em padrões de impressão históricos para prever padrões de impressão futuros. Mudanças voláteis nos padrões de impressão podem afetar a precisão das datas de esgotamento previstas.
:::

| Nome da Coluna                            | Tipo Da Coluna | Descrição                                                                                                                        |
|-------------------------------------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                                      | `varchar`   | O identificador exclusivo do dispositivo                                                                                                 |
| `dealer_id`                               | `varchar`   | O identificador exclusivo da Conta do revendedor (se você for um revendedor, essa será sua Conta de nível raiz)                                     |
| `dealer_name`                             | `varchar`   | O nome da Conta da Revenda                                                                                                     |
| `entity_id`                               | `varchar`   | O identificador exclusivo da Conta à qual este dispositivo pertence (a Conta diretamente acima do dispositivo)                              |
| `entity_name`                             | `varchar`   | O nome da Conta à qual este dispositivo pertence                                                                                           |
| `integration_id`                          | `varchar`   | O identificador exclusivo do dispositivo importado de [outras integrações, como E-Automate](./integrations#third-party-integrations)        |
| `asset_id`                                | `varchar`   | Um identificador personalizado que você pode especificar para um dispositivo. Estes são geralmente identificadores amigáveis para humanos que são exclusivos para o seu negócio |
| `make`                                    | `varchar`   | O fabricante do dispositivo (por exemplo, HP, Brother)                                                                                     |
| `model`                                   | `varchar`   | O modelo do dispositivo (por exemplo, OfficeJet 8600)                                                                                      |
| `serial_number`                           | `varchar`   | O número de série do dispositivo, conforme especificado pelo dispositivo                                                                   |
| `custom_serial_number`                    | `varchar`   | O número de série do dispositivo conforme especificado por um usuário no webadmin                                                          |
| `location`                                | `varchar`   | A localização do dispositivo conforme especificado pelo dispositivo                                                                        |
| `custom_location`                         | `varchar`   | A localização do dispositivo conforme configurado por um usuário no webadmin                                                               |
| `ip_address`                              | `varchar`   | O endereço IP do dispositivo                                                                                                               |
| `mac_address`                             | `varchar`   | O endereço MAC do dispositivo                                                                                                              |
| `hostname`                                | `varchar`   | O [hostname](https://en.wikipedia.org/wiki/Hostname) do dispositivo                                                                        |
| `system_name`                             | `varchar`   | O [system name SNMP](https://oidref.com/1.3.6.1.2.1.1.5) do dispositivo                                                                    |
| `firmware`                                | `varchar`   | A versão do firmware ou o datacode atualmente instalado no dispositivo                                                                     |
| `note`                                    | `varchar`   | As notas anexadas ao dispositivo. As notas podem ser adicionadas no Print Tracker                                                          |
| `created_timestamp`                       | `datetime`  | O carimbo de data/hora quando este dispositivo foi criado no Print Tracker                                                                 |
| `modified_timestamp`                      | `datetime`  | O carimbo de data/hora quando este dispositivo foi modificado no Print Tracker                                                             |
| `latest_meter_timestamp`                  | `datetime`  | O carimbo de data/hora do medidor carregado mais recentemente                                                                              |
| `managed`                                 | `boolean`   | Indica se este dispositivo é [gerenciado ou não gerenciado](./discovery#managed-devices) in Print Tracker                                  |
| `average_daily_volume_total`              | `integer`   | O número médio de páginas que este dispositivo imprime todos os dias                                                                       |
| `average_daily_volume_totalColor`         | `integer`   | O número médio de páginas coloridas que este dispositivo está imprimindo todos os dias                                                     |
| `black_toner_estimated_depletion`         | `datetime`  | A data estimada que o toner preto chegará a 0% restante                                                                                    |
| `black_toner_current_level`               | `real`      | A porcentagem atual restante do toner preto                                                                                                |
| `black_toner_estimated_pages_remaining`   | `integer`   | O número estimado de páginas restantes no toner preto                                                                                      |
| `cyan_toner_estimated_depletion`          | `datetime`  | A data estimada que o toner ciano chegará a 0% restante                                                                                    |
| `cyan_toner_current_level`                | `real`      | A porcentagem atual restante do toner ciano                                                                                                |
| `cyan_toner_estimated_pages_remaining`    | `integer`   | O número estimado de páginas restantes no toner ciano                                                                                      |
| `magenta_toner_estimated_depletion`       | `datetime`  | A data estimada que o toner magenta atingirá 0% restante                                                                                   |
| `magenta_toner_current_level`             | `real`      | A porcentagem atual restante do toner magenta                                                                                              |
| `magenta_toner_estimated_pages_remaining` | `integer`   | O número estimado de páginas restantes no toner magenta                                                                                    |
| `yellow_toner_estimated_depletion`        | `datetime`  | A data estimada que o toner amarelo chegará a 0% restante                                                                                  |
| `yellow_toner_current_level`              | `real`      | A porcentagem atual restante do toner amarelo                                                                                              |
| `yellow_toner_estimated_pages_remaining`  | `integer`   | O número estimado de páginas restantes no toner amarelo  n                                                                                 |

#### Dispositivos se esgotando dentro de 42 dias {#devices-depleting-within-42-days}
A consulta a seguir retornará dispositivos em que a data estimada de esgotamento de qualquer um dos suprimentos de toner estiver dentro de 42 dias da data atual.

```sql
SELECT 
    entity_name as 'Entity Name',
    make as Make,
    model as Model,
    serial_number as 'Serial Number',
    asset_id as 'Asset ID',
    custom_location as 'Location',
    note as 'Notes',
    ip_address as 'IP Address',
    DATETIME(latest_meter_timestamp) as 'Latest Meter Timestamp',
    average_daily_volume_total as 'Avg Daily Vol Total',
    average_daily_volume_totalColor as 'Avg Daily Vol Color',
    black_toner_current_level as 'Black Level',
    black_toner_estimated_pages_remaining as 'Black Estimated Pages Remaining',
    DATE(black_toner_estimated_depletion) as 'Black Toner Depletion',
    cyan_toner_current_level as 'Cyan Level',
    cyan_toner_estimated_pages_remaining as 'Cyan Estimated Pages Remaining',
    DATE(cyan_toner_estimated_depletion) as 'Cyan Toner Depletion',
    magenta_toner_current_level as 'Magenta Level',
    magenta_toner_estimated_pages_remaining as 'Magenta Estimated Pages Remaining',
    DATE(magenta_toner_estimated_depletion) as 'Magenta Toner Depletion',
    yellow_toner_current_level as 'Yellow Level',
    yellow_toner_estimated_pages_remaining as 'Yellow Estimated Pages Remaining',
    DATE(yellow_toner_estimated_depletion) as 'Yellow Toner Depletion'
FROM device_estimated_depletion_on_demand
WHERE DATE(black_toner_estimated_depletion) < DATE('now', '+42 days')
    OR DATE(cyan_toner_estimated_depletion) < DATE('now', '+42 days')
    OR DATE(magenta_toner_estimated_depletion) < DATE('now', '+42 days')
    OR DATE(yellow_toner_estimated_depletion) < DATE('now', '+42 days')
```

### Volume mensal <BetaLabel/> {#monthly-volume-betalabel}
O relatório de volume mensal é útil para obter uma visualização mês a mês do número de páginas impressas por cada dispositivo, ao longo do último ano. Você pode pensar neste relatório como agregando todas as leituras diárias do medidor em **baldes** mensais que podem ser usados para analisar o volume ao longo do tempo. A consulta padrão para este relatório é exportada como um CSV e geralmente é mais útil combinar os dados CSV com uma tabela dinâmica no Excel. Este relatório não suporta a inclusão de filhas. As seguintes colunas são suportadas por este relatório:

| Nome da Coluna Name    | Tipo da Coluna | Descrição                                                                                                                               |
|------------------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                   | `varchar`   | O identificador exclusivo do dispositivo                                                                                                   |
| `integration_id`       | `varchar`   | O identificador exclusivo do dispositivo importado de [outras integrações, como E-Automate](./integrations#third-party-integrations)        |
| `asset_id`             | `varchar`   | Um identificador personalizado que você pode especificar para um dispositivo. Estes são geralmente identificadores amigáveis para humanos que são exclusivos para o seu negócio |
| `make`                 | `varchar`   | O fabricante do dispositivo (por exemplo, HP, Brother)                                                                                     |
| `model`                | `varchar`   | O modelo do dispositivo (por exemplo, OfficeJet 8600)                                                                                      |
| `serial_number`        | `varchar`   | O número de série do dispositivo, conforme especificado pelo dispositivo                                                                   |
| `location`             | `varchar`   | A localização do dispositivo conforme especificado pelo dispositivo                                                                        |
| `ip_address`           | `varchar`   | O endereço IP do dispositivo                                                                                                               |
| `mac_address`          | `varchar`   | O endereço MAC do dispositivo                                                                                                              |
| `hostname`             | `varchar`   | O [hostname](https://en.wikipedia.org/wiki/Hostname) do dispositivo                                                                        |
| `system_name`          | `varchar`   | O [system name SNMP](https://oidref.com/1.3.6.1.2.1.1.5) do dispositivo                                                                    |
| `firmware`             | `varchar`   | A versão do firmware ou o datecode atualmente instalado no dispositivo                                                                     |                        
| `year`                 | `integer`   | O número do ano associado a este volume (por exemplo, 2023)                                                                                |                        
| `month_number`         | `integer`   | O número do mês associado a esse "balde" de volume (por exemplo, 1)                                                                        |                        
| `month`                | `integer`   | O mês em forma de cadeia de caracteres (por exemplo, janeiro)                                                                              |                        
| `meter_read_timestamp` | `datetime`  | A leitura mais recente do medidor carregado dentro deste balde de volume                                                                   |                        
| `total`                | `integer`   | O valor mais recente do contador total dentro deste balde de volume                                                                        |                        
| `total_black`          | `integer`   | O valor mais recente do contador total preto dentro deste bucket de volume                                                                 |                        
| `total_color`          | `integer`   | O valor mais recente do contador total cor dentro deste bucket de volume                                                                   |                        
| `total_volume`         | `integer`   | O número total de páginas impressas durante o período de tempo deste balde                                                                 |                        
| `total_black_volume`   | `integer`   | O número total de páginas monocromáticas impressas durante o período de tempo deste balde                                                  |                        
| `total_color_volume`   | `integer`   | O número total de páginas coloridas impressas durante o período de tempo deste balde                                                       |                        

Quando analisado usando uma tabela dinâmica do Excel, esse relatório pode ajudar a fornecer uma visão geral rápida sobre o volume de seus dispositivos ao longo do tempo para uma Conta específica.

![](https://www.cdn.printtrackerpro.com/images/documentation/custom-reports-pivot-table.png)

### Suprimentos <BetaLabel/> {#supplies-betalabel}
The supplies report provides data about every supply (currently installed, and replaced) in your devices. The following columns are supported by this report:

| Nome da Coluna Name    | Tipo da Coluna | Descrição                                                                                                                                                                                                                                             |
|----------------------------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `entity_id`                | `varchar`   | O identificador exclusivo da Conta à qual este dispositivo pertence (a Conta diretamente acima do dispositivo)                                                                                                                                       |
| `entity_name`              | `varchar`   | O nome da Conta à qual este dispositivo pertence                                                                                                                                                                                                     |
| `device_id`                | `varchar`   | O identificador exclusivo do dispositivo                                                                                                                                                                                                             |
| `device_integration_id`    | `varchar`   | O identificador exclusivo do dispositivo importado de [outras integrações, como E-Automate](./integrations#third-party-integrations)                                                                                                                 |
| `device_asset_id`          | `varchar`   | Um identificador personalizado que você pode especificar para um dispositivo. Estes são geralmente identificadores amigáveis para humanos que são exclusivos para o seu negócio                                                        |
| `device_make`              | `varchar`   | O fabricante do dispositivo (por exemplo, HP, Brother)                                                                                                                                                                                               |
| `device_model`             | `varchar`   | O modelo do dispositivo (por exemplo, OfficeJet 8600)                                                                                                                                                                                                |
| `device_serial_number`     | `varchar`   | O número de série do dispositivo, conforme especificado pelo dispositivo                                                                                                                                                                             |
| `device_location`          | `varchar`   | A localização do dispositivo conforme especificado pelo dispositivo                                                                                                                                                                                  |
| `device_ip_address`        | `varchar`   | O endereço IP do dispositivo                                                                                                                                                                                                                         |
| `device_mac_address`       | `varchar`   | O endereço MAC do dispositivo                                                                                                                                                                                                                        |
| `device_hostname`          | `varchar`   | O [hostname](https://en.wikipedia.org/wiki/Hostname) do dispositivo                                                                                                                                                                                  |
| `device_system_name`       | `varchar`   | O [system name SNMP](https://oidref.com/1.3.6.1.2.1.1.5) do dispositivo                                                                                                                                                                              |
| `device_firmware`          | `varchar`   | A versão do firmware ou o datecode atualmente instalado no dispositivo                                                                                                                                                                               |
| `installed_date`           | `datetime`  | O carimbo de data/hora quando esta fonte foi instalada na máquina                                                                                                                                                                                    |
| `replaced_date`            | `datetime`  | O carimbo de data/hora quando esse suprimento foi substituído. Se o suprimento estiver instalado atualmente no dispositivo, o valor será nulo                                                                                                      |
| `confirmed_replaced_date`  | `datetime`  | O carimbo de data/hora quando o Print Tracker confirmou que essa substituição ocorreu. Isso geralmente ocorre algumas horas após o 'replaced_date'                                                                                                |
| `estimated_depletion_date` | `datetime`  | A data em que o suprimento deve atingir 0% com base em padrões históricos de impressão                                                                                                                                                               |
| `name`                     | `varchar`   | O nome do suprimento (por exemplo, Black Toner, Resíduos)                                                                                                                                                                                            |
| `type`                     | `varchar`   | O tipo de suprimento (por exemplo, toner, tambor, resíduos)                                                                                                                                                                                          |
| `color`                    | `varchar`   | A cor do suprimento (por exemplo, preto, ciano), se for colorido. Se não for um suprimento colorido, este campo será nulo                                                                                                                           |
| `part_number`              | `varchar`   | O número de peça do suprimento identificado pelo dispositivo                                                                                                                                                                                         |
| `serial_number`            | `varchar`   | O número de série do suprimento identificado pelo dispositivo                                                                                                                                                                                        |
| `description`              | `varchar`   | A descrição SNMP do suprimento. Esta é geralmente uma descrição amigável do suprimento instalado na máquina                                                                                                                                          |
| `remaining`                | `integer`   | O nível do suprimento atualmente restante no dispositivo                                                                                                                                                                                             |
| `remaining_at_install`     | `integer`   | O nível de suprimento restante no momento em que foi instalado. Em situações de grande volume, o Print Tracker nem sempre detectará o novo suprimento no momento em que for instalado por um usuário.                                              |
| `remaining_at_replacement` | `integer`   | O nível de suprimento restante quando foi substituído. Isso é útil para identificar quanto de suprimento não consumido e foi "deixado na mesa". Isso será nulo se o suprimento não tiver sido substituído.                                       |
| `fill_rate`                | `integer`   | A taxa de preenchimento ou cobertura do suprimento conforme fornecido pelo dispositivo. Se não for fornecido, o Print Tracker tentará calcular a taxa de preenchimento, se possível.                                                                |
| `pages_printed`            | `integer`   | O número de páginas impressas desde que o suprimento foi instalado.                                                                                                                                                                                  |
| `expected_yield`           | `integer`   | O número de páginas que este suprimento deveria ter impresso                                                                                                                                                                                         |
| `actual_cost_per_page`     | `integer`   | Se um custo de suprimento for especificado no Print Tracker, esse valor será o custo de cada página impressa no suprimento.                                                                                                                         |
| `lost_pages`               | `integer`   | Quando um suprimento é substituído, essa é a diferença entre o rendimento esperado e o número de páginas impressas no suprimento.                                                                                                            |

#### Todos os suprimentos de todos os dispositivos {#all-supplies-from-all-devices}
Esta consulta de exemplo retorna todas as informações de suprimento para todos os dispositivos.

```sql
SELECT
    entity_name as 'Entity',
    device_make as 'Device Make',
    device_model as 'Device Model',
    device_serial_number as 'Device Serial Number',
    device_asset_id as 'Device Asset ID',
    name as 'Name',
    type as 'Type',
    color as 'Color',
    serial_number as 'Serial Number',
    part_number as 'Part Number',
    DATETIME(installed_date) as 'Installed Date',
    DATETIME(replaced_date) as 'Replaced Date',
    DATETIME(estimated_depletion_date) as 'Estimated Depletion Date',
    ROUND(JULIANDAY(estimated_depletion_date) - JULIANDAY(DATETIME()), 0) as 'Estimated Days Remaining',
    remaining_at_install as '% Remaining at Install',
    remaining as '% Remaining',
    pages_printed as 'Pages Printed',
    expected_yield as 'Expected Yield',
    fill_rate as 'Fill Rate',
    lost_pages as 'Lost Pages',
    actual_cost_per_page as 'Actual Cost/Page'
FROM supplies;
```

### Dispositivos faturáveis <BetaLabel/> {#billable-devices-betalabel}
:::info
O Print Tracker não fatura seus clientes. O relatório de dispositivos faturáveis pode ajudá-lo a entender os custos do Print Tracker e como seus clientes estão contribuindo para esses custos.
:::

O relatório de dispositivos faturáveis pode ajudá-lo a entender melhor os custos do Print Tracker. Ele contém informações do dispositivo para cada mês em que o Print Tracker cobrou pelo dispositivo. 

As colunas a seguir estão disponíveis no relatório de dispositivos faturáveis:

| Column Name      | Data Type | Description                                                                                                                                |
|------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `entity_name`    | `varchar` | O nome da Conta onde o dispositivo está localizado                                                                                         |
| `entity_id`      | `varchar` | O id da Conta onde o dispositivo está localizado                                                                                           |
| `dealer_name`    | `varchar` | O nome da Conta da Revenda                                                                                                                 |
| `dealer_id`      | `varchar` | O id da Conta da Revenda                                                                                                                   |
| `id`             | `varchar` | O identificador exclusivo do dispositivo                                                                                                   |
| `integration_id` | `varchar` | O identificador exclusivo do dispositivo importado de [outras integrações, como E-Automate](./integrations#third-party-integrations) |
| `asset_id`       | `varchar` | Um identificador personalizado que você pode especificar para um dispositivo. Estes são geralmente identificadores amigáveis para humanos que são exclusivos para o seu negócio  |
| `make`           | `varchar` | O fabricante do dispositivo (por exemplo, HP, Brother)                                                                                     |
| `model`          | `varchar` | O modelo do dispositivo (por exemplo, OfficeJet 8600)                                                                                      |
| `serial_number`  | `varchar` | O número de série do dispositivo, conforme especificado pelo dispositivo                                                                   |
| `location`       | `varchar` | A localização do dispositivo conforme especificado pelo dispositivo                                                                        |
| `ip_address`     | `varchar` | O endereço IP do dispositivo                                                                                                               |
| `mac_address`    | `varchar` | O endereço MAC do dispositivo                                                                                                              |
| `hostname`       | `varchar` | O [hostname](https://en.wikipedia.org/wiki/Hostname) do dispositivo                                                                        |
| `system_name`    | `varchar` | O [system name SNMP](https://oidref.com/1.3.6.1.2.1.1.5) do dispositivo                                                                    |
| `firmware`       | `varchar` | A versão do firmware ou datecode atualmente instalado no dispositivo                                                                       |                        
| `year`           | `integer` | O número do ano associado a este registro quando este dispositivo foi faturado                                                             |                        
| `month_number`   | `integer` | O número do mês associado a este registo quando este dispositivo foi faturado                                                              |                        
| `month`          | `integer` | O mês em forma de cadeia de caracteres (por exemplo, janeiro)                                                                              |                        

#### Dispositivos faturáveis agrupados por Conta {#billable-devices-grouped-by-entity}
Essa consulta é útil para entender quais de seus clientes estão contribuindo de forma mais significativa para os custos do Print Tracker.
```sql
SELECT
    entity_name as 'Entity',
    month as 'Month',
    year as 'Year',
    count() as 'Billable Devices'
FROM billable_devices
GROUP BY entity_id, year, month
ORDER BY entity, year, month_number;
```

#### Dispositivos faturáveis agrupados por revendedor {#billable-devices-grouped-by-dealer}
Este exemplo agrupa dispositivos faturáveis por revendedor. Se você for um revendedor autorizado do Print Tracker, essa consulta o ajudará a entender quais de seus clientes estão contribuindo de forma mais significativa para os custos do Print Tracker.

```sql
SELECT
    dealer_name as 'Dealer',
    month as 'Month',
    year as 'Year',
    count() as 'Billable Devices'
FROM billable_devices
GROUP BY dealer_id, year, month
ORDER BY dealer_name, year, month_number;
```

## Colunas de medidor e suprimento {#meter-and-supply-columns}
:::tip
Perguntas? Nossa equipe de suporte está pronta e disposta a ajudá-lo a configurar seus relatórios personalizados. [support@printtrackerpro.com] (mailto:support@printtrackerpro.com)
:::

Os relatórios personalizados suportam mais de 450 colunas de contagem de páginas diferentes e mais de 375 colunas de suprimentos diferentes. Estamos sempre adicionando colunas relacionadas ao medidor aos nossos relatórios personalizados para que a lista de colunas com suporte esteja sempre mudando. Se você está se perguntando quais colunas estão disponíveis para você, tente pesquisar "pageCounts" no [visualizador de esquema](#schema-viewer).)

A estrutura geral das colunas segue este padrão:
```
pageCounts_<formato>_<contador>
supplies_<suprimento>_<atributo>
```

* Formato: Representa o formato em que o contador é medido. Os formatos comuns são equivalente, motor e vida útil (também conhecidos como não equivalentes).
* Contador: O nome real do contador. Contadores comuns são Total, Total Black, Total Color, Total Copies, Total Prints, etc.
* Suprimento: O nome do suprimento. Os suprimentos comuns são Black Toner, Magenta Toner, Yellow Toner, Cyan Toner, Waste Toner, etc.
* Atributo: O atributo no suprimento. Os atributos suportados variam de acordo com o dispositivo. A maioria dos dispositivos oferece suporte aos atributos Porcentagem Restante, Descrição e Tipo, enquanto outros dispositivos podem fornecer Taxa de Preenchimento, Data de Esgotamento Estimada, etc.

Aqui estão alguns exemplos das colunas mais usadas
* `pageCount_equiv_total`
* `pageCount_equiv_totalBlack`
* `pageCount_equiv_totalColor`
* `pageCount_life_total`
* `pageCount_life_totalBlack`
* `pageCount_life_totalColor`
* `supplies_blackToner_pctRemaining`
* `supplies_blackToner_type`
* `supplies_blackToner_color`
* `supplies_blackToner_description`
* `supplies_waste_pctRemaining`
