---
slug: discovery
sidebar_position: 50
---

# Descobrindo e gerenciando dispositivos
O objetivo principal do Print Tracker é encontrar seus dispositivos e coletar [medidores](./60-meters-and-supplies.md). Uma vez encontrados, você pode visualizar e gerenciar seus dispositivos remotamente de qualquer lugar do mundo. O gerenciamento de seus dispositivos inclui a definição de configurações de dispositivos, a limpeza de dispositivos antigos, a revisão de estatísticas de dispositivos e muito mais.

:::caution Em Construção
Este guia está atualmente em construção. Por favor, volte em breve para atualizações.
:::

## Descobrindo dispositivos {#discovering-devices}
O processo de descoberta de dispositivos em sua rede envolve a varredura de cada endereço IP para detectar se há uma impressora localizada nesse endereço. Por padrão, o Print Tracker verificará periodicamente sua rede automaticamente para descobrir novos dispositivos. Você também pode acionar manualmente uma varredura a qualquer momento. 

### On-demand Scans {#on-demand-scans}
![](https://www.cdn.printtrackerpro.com/images/documentation/discovering-devices-scan-for-device.gif)

Para verificar manualmente a rede em busca de dispositivos:
1. Usando a barra de navegação lateral, clique em **Dispositivos > Ver dispositivos**
2. No canto superior direito, clique em **Procurar dispositivos**
3. Digite o endereço IP, intervalo, rede ou bloco CIDR que você deseja verificar
   :::info
   Este campo suporta valores formatados como:
   * Endereços IP individuais ('10.0.0.1')
   * Intervalo de endereços IP ('10.0.0.1-10')
   * Uma única sub-rede usando um curinga ('10.0.0.*')
   * Uma rede [CIDR notated](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) ('10.0.0.1/24')
   :::
4. Clique em **Adicionar dispositivos**
5. Se houver várias instalações nesta conta, selecione as instalações das quais você deseja executar a varredura
6. Clique em **Confirmar**

Se a instalação estiver online, ela começará imediatamente a verificar a rede em busca de dispositivos. Se a instalação estiver offline, a verificação começará na próxima vez que a instalação ficar online.

#### Viewing Scan Progress {#viewing-scan-progress}
![](https://www.cdn.printtrackerpro.com/images/documentation/discovering-devices-scan-job.gif)

Para exibir o progresso da varredura:
1. Usando a barra lateral, clique em **Jobs > View**
2. Clique no trabalho chamado **Custom Scan**

Você pode visualizar o progresso da varredura, bem como os logs produzidos pela instalação durante a verificação.

### Scheduled Scans {#scheduled-scans}

## Viewing Devices {#viewing-devices}

### Customizing Columns {#customizing-columns}

### Including Children {#including-children}

### Filtering and Sorting {#filtering-and-sorting}

### Pagination {#pagination}

### Exporting {#exporting}

### New Devices {#new-devices}

## Device Details {#device-details}

### Supplies Overview {#supplies-overview}

### Available Meters {#available-meters}

### Supplies Details (beta) {#supplies-details-beta}

### Audit History {#audit-history}

### Alerts {#alerts}

### Settings {#settings}

### Reports {#reports}

### Remote Technician {#remote-technician}

## Managing Devices {#managing-devices}

### Enabling/Disabling Devices {#enablingdisabling-devices}

### Removing Devices {#removing-devices}

## Non-Managed Devices {#non-managed-devices}

## Network Topology Scanner {#network-topology-scanner}

## Troubleshooting {#troubleshooting}
[Troubleshooting](../troubleshooting/10-devices.md)
