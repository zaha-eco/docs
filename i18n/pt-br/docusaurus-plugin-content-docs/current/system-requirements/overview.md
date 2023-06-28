# Visão Geral
O Print Tracker tem vários componentes diferentes que trabalham em conjunto para lhe fornecer acesso aos dados da impressora. Alguns desses componentes são baseados na Web, outros são instalados em redes de clientes. Você pode encontrar os requisitos do sistema para cada componente abaixo.


## Webadmin
O webadmin é a interface baseada na Web que você usa para gerenciar sua conta do Print Tracker. Está disponível em [https://app.printtrackerpro.com](https://app.printtrackerpro.com). O webadmin suporta todos os principais navegadores e sistemas operacionais, exceto o Safari. Recomendamos usar a versão mais recente do Chrome, Firefox.

## Agente de Coleta de Dados
O agente de coleta de dados é um aplicativo leve que é executado como um serviço do Windows dentro de uma rede de cliente final. Ele é completamente autônomo e não requer que nenhum aplicativo ou serviço de terceiros venha pré-instalado na máquina.

### Requisitos do sistema
Muitos dos requisitos de sistema a seguir dependem do número de dispositivos que serão rastreados por esse agente de coleta de dados. Para redes com menos de 100 dispositivos, os requisitos mínimos do sistema devem ser suficientes. Para todos os outros tamanhos de rede, recomendamos que você instale o agente de coleta de dados em uma máquina que atenda aos requisitos de sistema recomendados.

|| Mínimo          | Recomendado                         |     |
|------------------|-------------------------------------|------------|
| S.O.             | Windows[^1], macOS, or Linux[^2] |     |
| CPU              | 1 GHz x 2 Cores                     | 3 GHz x 4 Cores |
| Memória          | 2 GB                                | 4 GB |
| Disco            | 2 GB HDD                            | 10 GB SSD|
| Navegador        | Chrome, Firefox                     | Chrome, Firefox |
| Outras considerações| O agente de coleta de dados não deve ser instalado em um laptop ou em qualquer outra máquina que seja desligada com frequência, ou a confiabilidade pode ser afetada.||

### Requisitos de rede
:::informação
O Print Tracker Pro não requer regras de encaminhamento de portas ou configurações de rede especiais para operar normalmente. Todo o tráfego de rede, independentemente do protocolo, é pelo menos criptografado por TLS, enquanto a maioria do tráfego de rede é criptografada usando mTLS.
:::

A coleta de dados requer conectividade com a Internet para que os medidores e alertas sejam enviados para app.printtrackerpro.com. Nossos agentes exigem acesso aos seguintes domínios, que talvez precisem ser permitidos em sua configuração de rede:

| Domain                               | Protocol                                    | Port | Purpose                                                                                             |
|--------------------------------------|---------------------------------------------|------|-----------------------------------------------------------------------------------------------------|
| dcam.printtrackerpro.com             | gRPC streaming (uses HTTP/2 as a transport) | 443  | Allows data collection agents to receive jobs, upload meters, and fire alerts.                      |
| csr.printtrackerpro.com              | gRPC (uses HTTP/2 as a transport)           | 443  | Allows data collection agents to register under entities that you configure.                        |
| hc.printtrackerpro.com               | HTTP                                        | 443  | Allows data collection agents to report their health status.                                        |
| api.printtrackerpro.com              | HTTP                                        | 443  | Allows data collection agents to upload trouble reports.                                            |
| www.cdn.printtrackerpro.com          | HTTP                                        | 443  | Allows data collection agents to automatically upgrade themselves.                                  |
| www.googleapis.com                   | HTTP                                        | 443  | Allows data collection agents to download Chromium, the browser used for web-based data collection. |
| remotetechnician.printtrackerpro.com | Proprietary                                 | 7000 | Allows authenticated users to remotely access device embedded webservers if the feature is enabled. |

[//]: # (Se o [Modo de Solução de Problemas Avançado]&#40;.. /security/advanced-troubleshooting-mode.md&#41; está habilitado, você precisará verificar se sua rede é compatível com o [Tailscale]&#40;https://tailscale.com/kb/1082/firewall-ports/#what-if-i-really-really-want-to-specify-the-hostnames-that-tailscale-uses-to-operate-its-service&#41; requisitos de rede.)

[^1]: O Print Tracker Pro é executado em todas as versões do Windows que são ativamente suportadas pela Microsoft e não atingiram o fim da vida útil.
[^2]: O Print Tracker Pro tem suporte beta para Linux. Ele foi testado no Ubuntu 18, Debian 10 e Raspbian 10.
