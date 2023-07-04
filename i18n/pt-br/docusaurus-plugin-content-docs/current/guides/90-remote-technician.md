---
slug: remote-technician
sidebar_position: 90
---

# Técnico Remoto
O Técnico Remoto permite o acesso remoto a interface web de um dispositivo a partir de qualquer lugar. Ele não requer nenhuma configuração especial de rede ou firewall e funciona por padrão. Ele permite que os usuários reiniciem o dispositivo, atualizem o firmware, visualizem o painel frontal, alterem as configurações e muito mais  [^1].

:::info
Quer saber sobre segurança? Confira a [Visão geral da segurança do técnico remoto](../security/remote-technician.md).
:::

## Abrindo uma sessão {#opening-a-session}
![](https://www.cdn.printtrackerpro.com/images/documentation/remote-technician-start.gif)

Para abrir uma sessão do Técnico Remoto:
1. Usando a barra lateral, clique em **Dispositivos > Visualizar dispositivos**
2. Encontre o dispositivo que você deseja acessar na lista de dispositivos
3. Clique na guia **Técnico Remoto**
4. Clique em **Abrir página da Web do dispositivo**

Uma nova guia do navegador será exibida. Pode levar alguns segundos para se conectar ao dispositivo. Uma vez conectado, você poderá acessar a interface web do dispositivo.

:::caution Nota
Remote Technician will not be able to connect to the device if:
O Técnico Remoto não poderá se conectar ao dispositivo se:
* O dispositivo estiver desligado
* O dispositivo não estiver conectado à rede local
* O agente de coleta de dados não estiver na mesma rede que o dispositivo (por exemplo, se o agente de coleta de dados estiver em um laptop e o laptop for levado para casa)
:::

## Restringindo o acesso {#restricting-access}
Para clientes mais sensíveis com as informações, você pode restringir o acesso ao Técnico Remoto por usuário, por instalação ou até mesmo por conta. Quando você restringe o acesso por instalação ou conta, mesmo os usuários que têm a função de Usuário Técnico Remoto não poderão acessar o dispositivo.

### Por Usuário {#by-user}
![](https://www.cdn.printtrackerpro.com/images/documentation/remote-technician-restrict-access-user.gif)

Quando você restringe o acesso ao Técnico Remoto no nível do usuário, você está restringindo a capacidade desse usuário acessar qualquer dispositivo por meio do Técnico Remoto. Essa é a maneira mais fácil de impedir que pessoas não autorizadas usem o Técnico Remoto sem impedir que outros usuários autorizados o utilizem.

Para impedir que um usuário use o Técnico Remoto:
1. Usando a barra lateral, clique em **Admin > Gerenciar usuários**
2. Encontre o usuário que você deseja restringir
3. Clique no ícone do **Lápis** para editar o usuário
4. Clique na guia **Permissões**
5. Desmarque a função **Remote Technician User**

### Por Conta {#by-entity}
![](https://www.cdn.printtrackerpro.com/images/documentation/remote-technician-restrict-access-entity.gif)

Quando você restringe o acesso ao Técnico Remoto no nível da conta, você está restringindo o acesso a todos os dispositivos que estão abaixo dessa conta. Essa é a maneira recomendada de restringir o acesso ao Técnico Remoto em uma localidade inteira.

Para impedir que os usuários usem o Técnico Remoto para uma conta específica e seus filhos:
1. Certifique-se de que a conta selecionada é a conta que você deseja restringir
2. Usando a barra lateral, clique em **Admin > Gerenciar conta**
3. Clique na guia **Configurações**
4. Expanda a seção **Técnico Remoto**
5. Clique no botão de alternância **Ativado** para desativar o Técnico Remoto

### Por instalação {#by-install}
![](https://www.cdn.printtrackerpro.com/images/documentation/remote-technician-restrict-access-install.gif)

Quando você restringe o acesso ao Técnico Remoto no nível de instalação, você está restringindo o acesso a todos os dispositivos que são gerenciados por essa instalação[^2]. Na maioria dos casos, você deve restringir o acesso ao Técnico Remoto no [nível da conta](#by-entity), no entanto, pode haver alguns casos em que você deseja restringir o acesso a uma instalação específica (como devido a antivírus ou configurações de diretiva de rede do sistema na instalação específica).

Para impedir que os usuários usem o Técnico Remoto para uma instalação específica:
1. Usando a barra lateral, clique em **Instalações > Exibir instalações**
2. Clique na instalação que você deseja restringir o acesso na lista de instalações
3. Clique na guia **Configurações**
4. Expanda a seção **Técnico Remoto**
5. Clique no botão de alternância **Habilitar** para desativar o Técnico Remoto

## Compatibilidade {#compatibility}
O Técnico Remoto é compatível com quase todos os dispositivos, independentemente do fabricante, no entanto, para alguns dispositivos, nem todos os recursos podem funcionar. Os seguintes dispositivos são conhecidos por terem problemas de compatibilidade:

| Dispositivo                                     | Problema                                                                                                                                                              |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Canon iR-ADV C5240<br/> Canon iR-ADV C5850 | A autenticação não funciona. Se o dispositivo tiver algumas páginas protegidas por nome de usuário e senha, talvez você não consiga fazer login ou acessar as páginas protegidas.|

[^1]: O Técnico Remoto só permite o acesso remoto a interface web de um dispositivo. Somente operações que podem ser executadas a partir da página da Web do dispositivo podem ser executadas. Essas operações são suportadas em alguns dispositivos, mas podem não ser suportadas por todos os dispositivos.
[^2]: Se houverem várias instalações rastreando o mesmo dispositivo e o Técnico Remoto não estiver desabilitado em todas as instalações, o dispositivo ainda estará acessível via Técnico Remoto.
