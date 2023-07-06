---
slug: remote-technician
sidebar_position: 2
description: Allows users to quickly connect to a printers webpage directly from anywhere.
---
# Técnico Remoto

O Técnico Remoto permite o acesso remoto ao servidor web incorporado (EWS) de um dispositivo a partir de qualquer lugar. Ele não requer nenhuma configuração especial de rede ou firewall.

## Gerenciando permissões {#managing-permissions}
A interface web do Print Tracker Pro tem controles de acesso refinados baseados em função. Há duas funções que pertencem ao recurso Técnico Remoto.

* **Remote Technician Configurer** Dá ao usuário a capacidade de ativar/desativar o Técnico Remoto para dispositivos gerenciados pelo usuário.
* **Remote Technician User** Dá ao usuário a capacidade de usar o recurso Técnico Remoto para dispositivos habilitados.

## Ativando o recurso {#enabling-the-feature}
Depois que um usuário tiver a função Remote Technician Configurer, uma nova configuração ficará visível em cada dispositivo, permitindo que ele habilite/desabilite o Técnico Remoto para qualquer dispositivo.

## Segurança {#security}
A seguir é descrito o comportamento do sistema quando um usuário autorizado inicia com êxito uma sessão do Técnico Remoto.

1. A interface do usuário da Web envia uma mensagem com segurança via mTLS GPRC para a instalação.
2. A instalação verifica o endereço mac ou número de série do dispositivo.
3. A instalação inicia uma conexão TLS persistente com o servidor Técnico Remoto.
4. O navegador do usuário inicia uma troca de token PKCE OAuth 2.1 com o servidor Técnico Remoto.
5. O navegador do usuário é redirecionado via HTTPS para o servidor Técnico Remoto.
6. As solicitações do navegador do usuário são passadas com segurança por TLS entre o dispositivo e o navegador do usuário.

O Técnico Remoto não requer regras especiais de encaminhamento de porta ou configurações de firewall. A instalação inicia a conexão TLS persistente com o servidor (tráfego de saída) e usa essa conexão para permitir que o usuário se comunique com o dispositivo.

## Gerenciamento de Sessão {#session-management}
Cada sessão do Técnico Remoto dura no máximo 30 minutos. Após 30 minutos, uma nova sessão deve ser criada por meio da interface do usuário.

## Política de Segurança de Conteúdo {#c  ontent-security-policy}
O Restrito Compartilhamento de Recursos de Origem Cruzada e uma rigorosa Política de Segurança de Conteúdo aplicada ao tráfego que atravessa o servidor do Técnico Remoto limitam severamente qualquer tipo de movimento lateral que possa ser tentado por um dispositivo mal-intencionado, além de eliminar qualquer potencial de falsificação de solicitação entre sites.

## Auditoria {#auditing}
Cada sessão é representada como um trabalho da Página da Web do Dispositivo Aberto. A exibição de qualquer trabalho desse tipo na guia Trabalhos exibirá um Log do Técnico Remoto na parte inferior, que contém os logs de acesso HTTP completos para a sessão.

## Conclusão {#conclusion}
Com o Controle de Acesso Baseado em Função, OAuth 2.1, TLS e uma rigorosa Política de Segurança de Conteúdo, o novo recurso Técnico Remoto habilita novos recursos e, ao mesmo tempo, mantém um perfil de segurança robusto.
