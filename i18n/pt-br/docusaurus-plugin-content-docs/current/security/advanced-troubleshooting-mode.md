---
slug: atm
sidebar_position: 3
description: Allows Print Tracker engineers to quickly connect directly to your printers to troubleshoot issues.
---
# Modo de solução de problemas avançado

import Admonition from '@theme/Admonition';

<Admonition type="caution" icon="⍺" title="Alpha Feature">
  <p>
    Esse recurso não foi lançado e só é fornecido em versões de patch especialmente compiladas do agente de coleta de dados mediante solicitação.
  </p>
</Admonition>

Esse modo permite que os engenheiros designados do Print Tracker se conectem diretamente a um dispositivo de impressão, criando uma rede privada virtual temporária entre os engenheiros do Print Tracker e o dispositivo de impressão. Esta tecnologia é alimentada pelo Tailscale, que permite conexões privadas e seguras entre o Print Tracker e o dispositivo de impressão usando uma tecnologia padrão da indústria chamada Wireguard. Essas conexões temporárias são criadas apenas entre os engenheiros do Print Tracker e o dispositivo de impressão, outros dispositivos nas redes do cliente não são expostos; esse comportamento garante que os engenheiros do Print Tracker acessem apenas dispositivos autorizados.

## Habilitando {#enabling}
Para ativar o Modo de Solução de Problemas Avançado, verifique se você tem acesso físico ou remoto ao agente de coleta de dados.

1. Navegue até [localhost:1301](http://localhost:1301)
2. Clique no botão de alternância na seção Modo de Solução de Problemas Avançado.

:::info
Se a opção Modo de Solução de Problemas Avançado não for exibida, talvez ela ainda não esteja disponível para o Agente de Coleta de Dados. Entre em contato com [support@printtrackerpro.com](mailto:support@printtrackerpro.com) para perguntas adicionais.
:::

![Advanced Troubleshooting Mode](images/atm.png)

## Perguntas Frequentes {#frequently-asked-questions}
### Por que eu precisaria usar o Modo de Solução de Problemas Avançado? {#why-would-i-need-to-use-advanced-troubleshooting-mode}
Na maioria dos casos, você não precisa, no entanto, há algumas situações que anteriormente exigiam uma reunião do Zoom/Team Viewer entre os engenheiros do Print Tracker e alguém no local do cliente. Nessas situações, o Modo de Solução de Problemas Avançado pode permitir que o Print Tracker execute essas etapas de solução de problemas remotamente, em vez de exigir que uma reunião seja agendada com o cliente final. Exemplos de situações em que o Modo de Solução de Problemas Avançado pode ser necessário:

* O técnico remoto não está funcionando para um modelo específico.
* Print Tracker não é capaz de se conectar a um dispositivo, mas o dispositivo está na rede.

O Modo de Solução de Problemas Avançado não o ajudará se:

* O agente de coleta de dados do Print Tracker está sendo interrompido pelo software antivírus.
* O computador que executa o agente de coleta de dados do Print Tracker não tem conectividade com a Internet.

### Como isso é diferente do que o Print Tracker faz normalmente? {#how-is-this-different-then-what-print-tracker-does-normally}
O Print Tracker normalmente faz vários tipos de solicitações de rede diretamente do agente instalado nas redes do cliente para dispositivos de impressão. Os engenheiros do Print Tracker configuraram o Print Tracker para fazer essas solicitações, mas as solicitações não são feitas diretamente pelos engenheiros do Print Tracker. O Modo de Solução de Problemas Avançado permite que os engenheiros do Print Tracker façam solicitações diretamente ao dispositivo de impressão.

### O que essa tecnologia permite que o Print Tracker faça? {#what-does-this-technology-allow-print-tracker-to-do}
Isso permite que os engenheiros do Print Tracker façam solicitações de rede para dispositivos de impressão que são gerenciados pelo Print Tracker remotamente por meio do agente de coleta de dados do Print Tracker. Ele não permite que os engenheiros do Print Tracker se conectem a outros dispositivos em sua rede que não sejam gerenciados pelo Print Tracker.

### O que aconteceria no caso improvável de o Print Tracker ser comprometido por um invasor? {#what-would-happen-in-the-unlikely-event-that-print-tracker-were-compromised-by-an-attacker}
Tomamos várias medidas para garantir que o Modo de Solução de Problemas Avançado não possa ser usado no caso de o Rastreador de Impressão ser comprometido:

* As conexões só são permitidas se o Modo de Solução de Problemas Avançado tiver sido ativado diretamente no agente de coleta de dados por alguém com acesso físico ao agente de coleta de dados do Print Tracker.
* O Tailscale requer que todos os usuários da rede estejam registrados como usuários autorizados em nossa conta Tailscale. Essa conta é autorizada usando [Microsoft SSO](https://www.microsoft.com/en-us/security/business/identity-access/azure-active-directory-single-sign-on) que requer autenticação de dois fatores.
* As ACLs Tailscale garantem que cada cliente que usa o Modo de Solução de Problemas Avançado esteja isolado em sua própria "rede virtual". Isso garante que um cliente comprometido não possa comprometer outro cliente.
* As ACLs Tailscale garantem que apenas engenheiros específicos do Print Tracker estejam autorizados a se conectar a dispositivos de impressão. Esses engenheiros também são autorizados usando o Microsoft SSO.

### Como saber se meu agente tem o Modo de Solução de Problemas Avançado habilitado? {#how-do-i-know-if-my-agent-has-advanced-troubleshooting-mode-enabled}
O Modo de Solução de Problemas Avançado é desabilitado por padrão e só pode ser habilitado por alguém com acesso físico ao agente de coleta de dados do Print Tracker. Você pode verificar se o Modo de Solução de Problemas Avançado está habilitado navegando até [localhost:1301](http://localhost:1301)

![Advanced Troubleshooting Mode](images/atm.png)
