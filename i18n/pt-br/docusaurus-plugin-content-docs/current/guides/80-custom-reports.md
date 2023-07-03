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

### Estimated Depletion {#estimated-depletion}
The estimated depletion report can be used to help you predict when a currently installed supply will run out. Print Tracker analyzes the last 90 days of meter reads and uses historical printing patterns to make its prediction.

:::caution Warning
The estimated depletion report relies in historical printing patterns to predict future printing patterns. Volatile changes in printing patterns may affect the accuracy of the predicted depletion dates.
:::

| Column Name                               | Column Type | Description                                                                                                                                |
|-------------------------------------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                                      | `varchar`   | The unique identifier for the device                                                                                                       |
| `dealer_id`                               | `varchar`   | The unique identifier for the dealer entity (if you're a dealer, this would be your root-level entity)                                     |
| `dealer_name`                             | `varchar`   | The name of the dealer entity                                                                                                              |
| `entity_id`                               | `varchar`   | The unique identifier for the entity that this device belongs to (the entity directly above the device)                                    |
| `entity_name`                             | `varchar`   | The name of the entity that this device belongs to                                                                                         |
| `integration_id`                          | `varchar`   | The unique identifier for the device imported from [other integrations such as E-Automate](./integrations#third-party-integrations)        |
| `asset_id`                                | `varchar`   | A custom identifier that you can specify for a device. These are usually human-friendly identifiers that are propreitary for your business |
| `make`                                    | `varchar`   | The manufacturer of the device (e.g. HP, Brother)                                                                                          |
| `model`                                   | `varchar`   | The model of the device (e.g. OfficeJet 8600)                                                                                              |
| `serial_number`                           | `varchar`   | The serial number of the device as specified by the device                                                                                 |
| `custom_serial_number`                    | `varchar`   | The serial number of the device as specified by a user in the webadmin                                                                     |
| `location`                                | `varchar`   | The location of the device as specified by the device                                                                                      |
| `custom_location`                         | `varchar`   | The location of the device as configured by a user in the webadmin                                                                         |
| `ip_address`                              | `varchar`   | The IP address of the device                                                                                                               |
| `mac_address`                             | `varchar`   | The MAC address of the device                                                                                                              |
| `hostname`                                | `varchar`   | The [hostname](https://en.wikipedia.org/wiki/Hostname) of the device                                                                       |
| `system_name`                             | `varchar`   | The [SNMP system name](https://oidref.com/1.3.6.1.2.1.1.5) of the device                                                                   |
| `firmware`                                | `varchar`   | The firmware version or datecode currently installed on the device                                                                         |
| `note`                                    | `varchar`   | The notes attached to the device. Notes can be added within Print Tracker                                                                  |
| `created_timestamp`                       | `datetime`  | The timestamp when this device was created in Print Tracker                                                                                |
| `modified_timestamp`                      | `datetime`  | The timestamp when this device was modified in Print Tracker                                                                               |
| `latest_meter_timestamp`                  | `datetime`  | The timestamp of the most recently uploaded meter                                                                                          |
| `managed`                                 | `boolean`   | Indicates whether this device is [managed or non-managed](./discovery#managed-devices) in Print Tracker                                    |
| `average_daily_volume_total`              | `integer`   | The average number of pages this device is printing every day                                                                              |
| `average_daily_volume_totalColor`         | `integer`   | The average number of color pages this device is printing every day                                                                        |
| `black_toner_estimated_depletion`         | `datetime`  | The estimated date that the black toner will reach 0% remaining                                                                            |
| `black_toner_current_level`               | `real`      | The current percent remaining of the black toner                                                                                           |
| `black_toner_estimated_pages_remaining`   | `integer`   | The estimated number of pages remaining in the black toner                                                                                 |
| `cyan_toner_estimated_depletion`          | `datetime`  | The estimated date that the cyan toner will reach 0% remaining                                                                             |
| `cyan_toner_current_level`                | `real`      | The current percent remaining of the cyan toner                                                                                            |
| `cyan_toner_estimated_pages_remaining`    | `integer`   | The estimated number of pages remaining in the cyan toner                                                                                  |
| `magenta_toner_estimated_depletion`       | `datetime`  | The estimated date that the magenta toner will reach 0% remaining                                                                          |
| `magenta_toner_current_level`             | `real`      | The current percent remaining of the magenta toner                                                                                         |
| `magenta_toner_estimated_pages_remaining` | `integer`   | The estimated number of pages remaining in the magenta toner                                                                               |
| `yellow_toner_estimated_depletion`        | `datetime`  | The estimated date that the yellow toner will reach 0% remaining                                                                           |
| `yellow_toner_current_level`              | `real`      | The current percent remaining of the yellow toner                                                                                          |
| `yellow_toner_estimated_pages_remaining`  | `integer`   | The estimated number of pages remaining in the yellow toner                                                                                |

#### Devices Depleting Within 42 Days {#devices-depleting-within-42-days}
The following query will return devices where the estimated depletion date of any of the toner supplies is within 42 days of the current date.

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

### Monthly Volume <BetaLabel/> {#monthly-volume-betalabel}
The monthly volume report is helpful for getting a month-over-month view of the number of pages printed by each device, over the last year. You can think of this report as aggregating all daily meter reads into monthly **buckets** which can then be used to analyze volume over time. The default query for this report is exported as a CSV, and it's usually most helpful to combine the CSV data with a pivot table in Excel. This report does not support including children. The following columns are supported by this report:

| Column Name            | Column Type | Description                                                                                                                                |
|------------------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                   | `varchar`   | The unique identifier for the device                                                                                                       |
| `integration_id`       | `varchar`   | The unique identifier for the device imported from [other integrations such as E-Automate](./integrations#third-party-integrations)        |
| `asset_id`             | `varchar`   | A custom identifier that you can specify for a device. These are usually human-friendly identifiers that are propreitary for your business |
| `make`                 | `varchar`   | The manufacturer of the device (e.g. HP, Brother)                                                                                          |
| `model`                | `varchar`   | The model of the device (e.g. OfficeJet 8600)                                                                                              |
| `serial_number`        | `varchar`   | The serial number of the device as specified by the device                                                                                 |
| `location`             | `varchar`   | The location of the device as specified by the device                                                                                      |
| `ip_address`           | `varchar`   | The IP address of the device                                                                                                               |
| `mac_address`          | `varchar`   | The MAC address of the device                                                                                                              |
| `hostname`             | `varchar`   | The [hostname](https://en.wikipedia.org/wiki/Hostname) of the device                                                                       |
| `system_name`          | `varchar`   | The [SNMP system name](https://oidref.com/1.3.6.1.2.1.1.5) of the device                                                                   |
| `firmware`             | `varchar`   | The firmware version or datecode currently installed on the device                                                                         |                        
| `year`                 | `integer`   | The year number associated with this volume bucket (e.g. 2023)                                                                             |                        
| `month_number`         | `integer`   | The month number associated with this volume bucket (e.g. 1)                                                                               |                        
| `month`                | `integer`   | The month in string form (e.g. January)                                                                                                    |                        
| `meter_read_timestamp` | `datetime`  | The latest meter read uploaded within this volume bucket                                                                                   |                        
| `total`                | `integer`   | The latest value of the total counter within this volume bucket                                                                            |                        
| `total_black`          | `integer`   | The latest value of the total black counter within this volume bucket                                                                      |                        
| `total_color`          | `integer`   | The latest value of the total color counter within this volume bucket                                                                      |                        
| `total_volume`         | `integer`   | The total number of pages printed during the timeframe of this bucket                                                                      |                        
| `total_black_volume`   | `integer`   | The total number of monochrome pages printed during the timeframe of this bucket                                                           |                        
| `total_color_volume`   | `integer`   | The total number of color pages printed during the timeframe of this bucket                                                                |                        

When parsed using an Excel pivot table, this report can help give you a quick overview about the volume of your devices over time, for a particular entity.

![](https://www.cdn.printtrackerpro.com/images/documentation/custom-reports-pivot-table.png)

### Supplies <BetaLabel/> {#supplies-betalabel}
The supplies report provides data about every supply (currently installed, and replaced) in your devices. The following columns are supported by this report:

| Column Name                | Column Type | Description                                                                                                                                                                                                                                          |
|----------------------------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `entity_id`                | `varchar`   | The unique identifier for the entity that this device belongs to (the entity directly above the device)                                                                                                                                              |
| `entity_name`              | `varchar`   | The name of the entity that this device belongs to                                                                                                                                                                                                   |
| `device_id`                | `varchar`   | The unique identifier for the device                                                                                                                                                                                                                 |
| `device_integration_id`    | `varchar`   | The unique identifier for the device imported from [other integrations such as E-Automate](./integrations#third-party-integrations)                                                                                                                  |
| `device_asset_id`          | `varchar`   | A custom identifier that you can specify for a device. These are usually human-friendly identifiers that are propreitary for your business                                                                                                           |
| `device_make`              | `varchar`   | The manufacturer of the device (e.g. HP, Brother)                                                                                                                                                                                                    |
| `device_model`             | `varchar`   | The model of the device (e.g. OfficeJet 8600)                                                                                                                                                                                                        |
| `device_serial_number`     | `varchar`   | The serial number of the device as specified by the device                                                                                                                                                                                           |
| `device_location`          | `varchar`   | The location of the device as specified by the device                                                                                                                                                                                                |
| `device_ip_address`        | `varchar`   | The IP address of the device                                                                                                                                                                                                                         |
| `device_mac_address`       | `varchar`   | The MAC address of the device                                                                                                                                                                                                                        |
| `device_hostname`          | `varchar`   | The [hostname](https://en.wikipedia.org/wiki/Hostname) of the device                                                                                                                                                                                 |
| `device_system_name`       | `varchar`   | The [SNMP system name](https://oidref.com/1.3.6.1.2.1.1.5) of the device                                                                                                                                                                             |
| `device_firmware`          | `varchar`   | The firmware version or datecode currently installed on the device                                                                                                                                                                                   |
| `installed_date`           | `datetime`  | The timestamp when this supply was installed in the machine                                                                                                                                                                                          |
| `replaced_date`            | `datetime`  | The timestamp when this supply was replaced. If the supply is currently installed in the device, this will be null                                                                                                                                   |
| `confirmed_replaced_date`  | `datetime`  | The timestamp when Print Tracker confirmed that this replacement ocurred. This usually is a few hours after the `replaced_date`                                                                                                                      |
| `estimated_depletion_date` | `datetime`  | The date that the supply is expected to reach 0% based on historical printing patterns                                                                                                                                                               |
| `name`                     | `varchar`   | The name of the supply (e.g. Black Toner, Waste)                                                                                                                                                                                                     |
| `type`                     | `varchar`   | The supply type (e.g. toner, drum, waste)                                                                                                                                                                                                            |
| `color`                    | `varchar`   | The color of the supply (e.g. black, cyan), if the supply supports a color. If the supply is not a colored supply, this field will be null                                                                                                           |
| `part_number`              | `varchar`   | The part number of the supply as identified by the device                                                                                                                                                                                            |
| `serial_number`            | `varchar`   | The serial number of the supply as identified by the device                                                                                                                                                                                          |
| `description`              | `varchar`   | The SNMP description of the supply. This is usually a human-friendly description of the supply installed in the machine                                                                                                                              |
| `remaining`                | `integer`   | The supply level currently remaining in the device                                                                                                                                                                                                   |
| `remaining_at_install`     | `integer`   | The supply level remaining in the supply at the time the supply was installed. In high-volume situations, Print Tracker will not always detect the new supply the moment it's installed by a user.                                                   |
| `remaining_at_replacement` | `integer`   | The supply level remaining in the supply at the time the supply was replaced. This is helpful in identifying how much unconsumed supply was "left on the table" when the supply was replaced. This will be null if the supply has not been replaced. |
| `fill_rate`                | `integer`   | The fill or coverage rate of the supply as provided by the device. If not provided Print Tracker will attempt to calculate the fill rate if possible.                                                                                                |
| `pages_printed`            | `integer`   | The number of pages printed since the supply was installed.                                                                                                                                                                                          |
| `expected_yield`           | `integer`   | The number of pages that this supply should have printed.                                                                                                                                                                                            |
| `actual_cost_per_page`     | `integer`   | If a supply cost is specified in Print Tracker, this value is the cost of each page printed on the supply.                                                                                                                                           |
| `lost_pages`               | `integer`   | When a supply is replaced, this is the difference between the expected yield of the supply, and the number of pages printed on the supply.                                                                                                           |

#### All Supplies from All Devices {#all-supplies-from-all-devices}
This example query returns all supply information for all devices.

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

### Billable Devices <BetaLabel/> {#billable-devices-betalabel}
:::info
Print Tracker does not bill your customers. The billable devices report can help you understand _your_ Print Tracker costs, and how your customers are contributing to those costs.
:::

The billable devices report can help you better understand your Print Tracker costs. It contains device information for each month where Print Tracker billed you for the device. 

The following columns are available in the billable devices report:

| Column Name      | Data Type | Description                                                                                                                                |
|------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `entity_name`    | `varchar` | The name of the entity where the device is located                                                                                         |
| `entity_id`      | `varchar` | The id of the entity where the device is located                                                                                           |
| `dealer_name`    | `varchar` | The name of the dealer entity                                                                                                              |
| `dealer_id`      | `varchar` | The id of the dealer entity                                                                                                                |
| `id`             | `varchar` | The unique identifier for the device                                                                                                       |
| `integration_id` | `varchar` | The unique identifier for the device imported from [other integrations such as E-Automate](./integrations#third-party-integrations)        |
| `asset_id`       | `varchar` | A custom identifier that you can specify for a device. These are usually human-friendly identifiers that are propreitary for your business |
| `make`           | `varchar` | The manufacturer of the device (e.g. HP, Brother)                                                                                          |
| `model`          | `varchar` | The model of the device (e.g. OfficeJet 8600)                                                                                              |
| `serial_number`  | `varchar` | The serial number of the device as specified by the device                                                                                 |
| `location`       | `varchar` | The location of the device as specified by the device                                                                                      |
| `ip_address`     | `varchar` | The IP address of the device                                                                                                               |
| `mac_address`    | `varchar` | The MAC address of the device                                                                                                              |
| `hostname`       | `varchar` | The [hostname](https://en.wikipedia.org/wiki/Hostname) of the device                                                                       |
| `system_name`    | `varchar` | The [SNMP system name](https://oidref.com/1.3.6.1.2.1.1.5) of the device                                                                   |
| `firmware`       | `varchar` | The firmware version or datecode currently installed on the device                                                                         |                        
| `year`           | `integer` | The year number associated with this record when this device was billed                                                                    |                        
| `month_number`   | `integer` | The month number associated with this record when this device was billed                                                                   |                        
| `month`          | `integer` | The month in string form (e.g. January)                                                                                                    |                        

#### Billable Devices Grouped by Entity {#billable-devices-grouped-by-entity}
This query is helpful for understanding which of your customers are most significantly contributing to your Print Tracker costs.
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

#### Billable Devices Grouped by Dealer {#billable-devices-grouped-by-dealer}
This example groups billable devices by dealer. If you are a Print Tracker authorized reseller, this query will help you understand which of your customers are most significantly contributing to your Print Tracker costs.

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

## Meter and Supply Columns {#meter-and-supply-columns}
:::tip
Questions? Our support team is ready and willing to help you configure your custom reports. [support@printtrackerpro.com](mailto:support@printtrackerpro.com)
:::

Custom reports supports over 450 different page count columns and over 375 different supply columns. We are always adding meter-related columns to our custom reports so the list of supported columns is always changing. If you're wondering what columns are available to you, try searching "pageCounts" in the [schema viewer](#schema-viewer).)

The general structure of the columns follows this pattern:
```
pageCounts_<format>_<counter>
supplies_<supply>_<attribute>
```

* Format: The format represents the format that the counter is measured in. Common formats are equivalent, engine, and life (otherwise known as non-equivalent).
* Counter: The actual name of the counter. Common counters are Total, Total Black, Total Color, Total Copies, Total Prints, etc.
* Supply: The name of the supply. Common supplies are Black Toner, Magenta Toner, Yellow Toner, Cyan Toner, Waste Toner, etc.
* Attribute: The attribute on the supply. Supported attributes vary by device. Most devices support the Percent Remaining, Description, and Type attributes, while other devices might provide Fill Rate, Estimated Depletion Date, etc.

Here are some examples of the most commonly used columns
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
