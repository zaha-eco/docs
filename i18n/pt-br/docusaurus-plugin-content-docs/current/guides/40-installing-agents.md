---
slug: installation
sidebar_position: 40
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Instalando e gerenciando agentes
O Print Tracker utiliza agentes de coleta de dados -- aplicativos de software leves instalados em redes de clientes -- para descobrir e coletar dados de seus dispositivos. Os agentes estão disponíveis para sistemas operacionais Windows, Mac e Linux e podem ser instalados usando uma variedade de métodos, incluindo e-mail, download direto e linha de comando.  

## Código Datalink {#datalink-code}
Quando um agente é instalado dentro da rede de seus clientes, ele precisa saber como enviar esses dados para você. O Print Tracker conecta os dados coletados da rede do seu cliente à sua conta usando um identificador exclusivo chamado **Datalink Code**. Esse código é um identificador exclusivo gerado para cada conta em sua conta.

![](https://www.cdn.printtrackerpro.com/images/documentation/installing-agents-datalink-code.png)

Você pode obter o código datalink para uma conta:
1. Navegue até a conta para a qual você gostaria de obter o código de link de dados
2. Usando a barra lateral, clique em **Instalações > Implantar nova instalação**
3. Copie o código do datalink do campo **Datalink code**

## Estratégias de Implantação {#deployment-strategies}
Há várias maneiras diferentes de implantar o agente de coleta de dados do Print Tracker, dependendo de sua necessidade. Por exemplo, se você estiver no cliente, poderá optar por [baixar o agente diretamente](#download-and-install) no computador do cliente e instalá-lo manualmente. Ou, se você estiver trabalhando remotamente, você pode optar por [enviar o agente para o cliente por e-mail](#deployment-email) e fazer com que ele mesmo o instale. Você pode até ter acesso de administração remota a um conjunto de computadores, caso em que você pode implantar o agente usando [linha de comando](#command-line).

Uma vez instalado, o agente também precisa ser [ativado](#activation). O processo de ativação efetivamente "registra" esse agente em sua conta para que você possa gerenciar e coletar dados dele.

### Email de implantação {#deployment-email}
A estratégia de e-mail de implantação permite que você envie facilmente um link para o instalador diretamente para o cliente, juntamente com instruções sobre como ativar o agente.

![](https://www.cdn.printtrackerpro.com/images/documentation/installing-agents-send-deployment-email.gif)

Para enviar um email de implantação:
1. Selecione a conta à qual você deseja que a instalação seja associada.
2. Usando a barra lateral, clique em **Instalações > Implantar nova instalação**
3. Clique em **Enviar e-mail de instalação**
4. Digite o endereço de e-mail do contato do seu cliente no local
5. Clique em **Enviar e-mail**. 

Seu cliente receberá instruções sobre como baixar e ativar o agente

### Baixar e instalar {#download-and-install}
Você pode optar por baixar o agente diretamente para o computador em que está trabalhando no momento. Você pode encontrar todos os downloads do Print Tracker navegando até [printtrackerpro.com/download](https://www.printtrackerpro.com/download) ou escolhendo o download apropriado para seu sistema operacional abaixo.

<iframe src="https://app-v2.printtrackerpro.com/download" width="100%" height="500px" frameborder="0"></iframe>

### Linha de comando {#command-line}
Em alguns casos, pode ser mais fácil implantar o agente usando a linha de comando. Isso é especialmente verdadeiro se você tiver acesso de administração remota a uma frota de computadores que precisam ser instalados com o agente. Atualmente, apenas o Windows e o Linux oferecem suporte à instalação de linha de comando.

Se você quiser instalar e ativar o agente no mesmo comando, pule para [Ativação Automática](#automatic-activation).

#### Instalação {#installation}

<Tabs groupId="operating-system">
<TabItem value="windows" label="Windows">

:::Aviso de cautela
Você deve executar a janela do Powershell como administrador para instalar o agente. Se você não fizer isso, a instalação falhará silenciosamente.
:::

1. Abra uma janela do Powershell como administrador
2. Copie e cole o seguinte comando na janela do Powershell e pressione enter
3. Este comando irá baixar a versão mais recente do Print Tracker e instalá-lo
4. Quando a instalação estiver concluída, abra [localhost:1301](http://localhost:1301/) para ativar o agente com seu [datalink code](#datalink-code)

```powershell
$webClient = New-Object System.Net.WebClient; $version = $webClient.DownloadString('https://www.cdn.printtrackerpro.com/modules/dca/current_major_version').Trim(); $url = "https://www.cdn.printtrackerpro.com/modules/dca/$version/PrintTrackerProOfflineSetup.msi";  Write-Host "Version: $version"; Write-Host "Download URL: $url"; $output = Join-Path -Path $([System.IO.Path]::GetTempPath()) -ChildPath 'PrintTrackerProOfflineSetup.msi';  Write-Host "Download Path: $output" $webClient.DownloadFile($url, $output); Start-Process 'msiexec' -ArgumentList @('/qn', '/i', "`"$output`"") -Wait;
```

</TabItem>
<TabItem value="linux" label="Linux">

:::caution Aviso de cautela
Você deve ter acesso sudo para instalar o agente. Se você não fizer isso, a instalação falhará.
:::

1. Abra uma janela do terminal
2. Execute o seguinte comando para baixar e instalar o agente
3. Quando a instalação estiver concluída, abra [localhost:1301](http://localhost:1301/) para ativar o agente com seu [datalink code](#datalink-code)

```shell
source <(curl -fsSL https://www.cdn.printtrackerpro.com/modules/dca/install.sh)
```

</TabItem>
</Tabs>


#### Ativação Automática {#automatic-activation}
Além de instalar o agente usando a linha de comando, você também pode usar a linha de comando para ativar o agente.

<Tabs groupId="operating-system">
<TabItem value="windows" label="Windows">

:::caution Aviso de cautela
Você deve executar a janela do Powershell como administrador para instalar o agente. Se você não fizer isso, a instalação falhará silenciosamente.
:::

1. Abra uma janela do Powershell como administrador
2. Copie o seguinte comando
3. Substitua '<SEU CÓDIGO DATALINK>' pelo seu [código datalink](#datalink-code)
4. Execute o comando para baixar e instalar o agente

```powershell
$webClient = New-Object System.Net.WebClient; $version = $webClient.DownloadString('https://www.cdn.printtrackerpro.com/modules/dca/current_major_version').Trim(); $url = "https://www.cdn.printtrackerpro.com/modules/dca/$version/PrintTrackerProOfflineSetup.msi";  Write-Host "Version: $version"; Write-Host "Download URL: $url"; $output = Join-Path -Path $([System.IO.Path]::GetTempPath()) -ChildPath 'PrintTrackerProOfflineSetup.msi';  Write-Host "Download Path: $output" $webClient.DownloadFile($url, $output); Start-Process 'msiexec' -ArgumentList @('/qn', '/i', "`"$output`"", 'DATALINK_CODE=<YOUR DATALINK CODE>') -Wait;
```

</TabItem>
<TabItem value="linux" label="Linux">

:::caution Aviso de cautela
Você deve ter acesso sudo para instalar o agente. Se você não fizer isso, a instalação falhará.
:::

1. Abra uma janela do terminal
2. Copie o seguinte comando
3. Substitua '<SEU CÓDIGO DATALINK>' pelo seu [código datalink](#datalink-code)
4. Execute o comando para baixar e instalar o agente

```shell
datalink_code='<YOUR DATALINK CODE>'; source <(curl -fsSL https://www.cdn.printtrackerpro.com/modules/dca/install.sh)
```

</TabItem>
</Tabs>

## Instalação {#installation}
Depois que o agente tiver sido [baixado e instalado](#download-and-install), a última etapa é a ativação. A ativação conecta sua conta do Print Tracker ao agente instalado na rede do cliente. Um agente que não esteja ativado na sua conta não aparecerá no Print Tracker.

### Ativação {#activation}
Para ativar um agente, verifique se o agente foi baixado e instalado usando uma das [estratégias de implantação](#deployment-strategies). Uma vez instalado o agente:

1. Abra [localhost:1301](http://localhost:1301/) no navegador da Web do computador em que o agente está instalado
2. Digite seu [datalink code](#datalink-code)
3. Clique em **Ativar**

[//]: # (### Descoberta de Rede)

## Clustering e Redundância {#clustering-and-redundancy}
Clustering é a ideia de instalar vários agentes na mesma rede para que, se um agente ficar inativo, outro agente possa assumir o controle. O Print Tracker agrupa automaticamente os agentes registrados usando o mesmo [datalink code](#datalink-code). Isso significa que, se você tiver vários agentes instalados na mesma conta, eles se agruparão automaticamente sem exigir nenhuma configuração adicional de você.

Quando vários agentes são instalados na mesma rede, dispositivos, medidores e todos os outros dados coletados duplicados são eliminados automaticamente, não havendo duplicidade.

## Agentes obsoletos {#stale-agents}
Um agente obsoleto é um agente que não está mais conectado ao Print Tracker. As instalações geralmente fazem check-in a cada 30 minutos, no entanto, algumas instalações podem não fazer check-in por períodos mais longos se o computador for desligado ou entrar no modo de suspensão. Instalações que estão offline por longos períodos de tempo (vários dias) podem ser problemáticas. Por exemplo, o agente asn que está offline por um longo período de tempo pode ter perdido alertas de dispositivo críticos, como uma substituição de suprimento. Quando um [agente obsoleto volta a ficar online](./20-configuring-settings.md#stale-install-back-online-alert) é importante rever todos os seus dispositivos para se certificar de que não perdeu nenhum evento crítico.

## Desativando/Reativando {#deactivating-reactivating}
Você pode desativar um agente a qualquer momento. A desativação de um agente ocultará o agente da sua conta. A desativação de um agente não desinstalará o agente do computador em que ele está instalado. Se você quiser desinstalar o agente, deverá fazê-lo manualmente.

Os agentes desativados param de fazer check-in no Print Tracker regularmente e, em vez disso, fazem check-in apenas na reinicialização do sistema. Isso significa que, se você reativar uma instalação desativada, ela pode não voltar a ficar online até que o computador seja reiniciado.

Você só deve desativar os agentes que não planeja usar novamente. Se você planeja usar um agente novamente no futuro, você deve deixá-lo ativado.

### Desativando {#deactivating}
![](https://www.cdn.printtrackerpro.com/images/documentation/installing-agents-deactivating.gif)

Para desativar um agente:
1. Usando a barra lateral, clique em **Instalações > Exibir instalações**
2. Encontre a instalação que você deseja desativar
3. Clique no ícone **Checkbox** no lado esquerdo da tabela
4. Na parte superior da tabela, clique na seta para baixo ao lado do ícone da caixa de seleção da tabela
5. Clique em **Desativar selecionado**

### Reativando {#reactivating}
![](https://www.cdn.printtrackerpro.com/images/documentation/installing-agents-reactivating.gif)

Para reativar um agente:
1. Usando a barra lateral, clique em ** Instalações > Exibir instalações **
2. Certifique-se de que o filtro **Excluir inativo** está desativado
3. Encontre a instalação que você deseja reativar
4. Clique no **ícone da caixa de seleção** no lado esquerdo da tabela
5. Na parte superior da tabela, clique na seta para baixo ao lado do ícone da caixa de seleção da tabela
6. Clique em **Ativar selecionado**

## Desinstalando {#uninstalling}
A desinstalação do Print Tracker deve ser feita diretamente no computador onde o Print Tracker está instalado. Esse processo varia de acordo com o sistema operacional.

<Tabs groupId="operating-system">
<TabItem value="windows" label="Windows">

![](https://www.cdn.printtrackerpro.com/images/documentation/installing-agents-uninstalling.gif)

1. Abra o Windows **Menu Iniciar**
2. Pesquise "Adicionar ou remover programas" e abra-o
3. Procure por "Print Tracker Pro"
4. Clique no ícone de menu de três pontos ao lado de "Print Tracker Pro"
5. Clique em **Desinstalar**
6. Siga as instruções para concluir a desinstalação

</TabItem>
<TabItem value="macos" label="macOS">

1. Abra uma janela do terminal
2. Copie e execute o seguinte comando
3. Siga as instruções para concluir a desinstalação

```shell
sudo bash /Library/PrintTracker/DataCollectionAgent/uninstall.sh
```

</TabItem>
<TabItem value="linux" label="Linux">

1. Abra uma janela do terminal
2. Copie e execute o seguinte comando

```shell
source <(curl -fsSL https://www.cdn.printtrackerpro.com/modules/dca/uninstall.sh)
```

</TabItem>
</Tabs>

## Solução de problemas {#troubleshooting}
Para obter mais detalhes sobre como solucionar problemas com seus agentes, consulte [Solução de problemas](../troubleshooting/20-installs.mdx).

### Pacotes do instalador do macOS {#macos-installer-packages}

Alguns dispositivos macOS podem exibir um aviso indicando que o .pkg não pode ser aberto. Isso ocorre porque o Print Tracker não é registrado pela Apple e disponibilizado através da Apple App Store.

![](https://www.cdn.printtrackerpro.com/images/documentation/installing-agents-macos-error.png)

Para ignorar este aviso:
1. Clique com o botão direito do mouse no arquivo na janela do Finder.
2. Clique em **Abrir**
3. Clique em **Abrir** novamente
4. Siga as instruções de instalação.

![](https://www.cdn.printtrackerpro.com/images/documentation/installing-agents-macos.gif)
