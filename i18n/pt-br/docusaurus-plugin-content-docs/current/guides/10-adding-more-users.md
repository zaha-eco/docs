---
sidebar_position: 10
---

# Adicionando mais usuários

Criar e gerenciar usuários permite que você conceda e controle o acesso de outros usuários, inclusive a função que você precisa que eles tenham dentro de sua(s) organização(ões).

## Criando um usuário

Para criar um novo usuário:

1. Na barra de navegação lateral, clique em **Admin > Gerenciar usuários**
2. Na página **Gerenciar usuários**, clique em **Adicionar usuário**
3. Na guia **Informações de contato**, insira as informações de usuário necessárias
4. Clique em **Próximo**
5. Na guia **Permissões**, selecione a Função ou Funções que este usuário terá
6. A menos que você saiba a conta à qual deseja adicionar esse novo usuário, deixe a **Conta pai** como o valor padrão
7. Clique em **Criar usuário**

Depois que o processo for concluído com sucesso, o novo usuário receberá um e-mail com instruções sobre como definir sua própria senha na primeira vez que efetuar login.

## Mudando de Função

![](../images/manage-users-change-roles.gif)
Para alterar a função de um usuário ou adicionar uma função adicional a um usuário:

1. Na barra de navegação lateral, clique em **Admin > Gerenciar usuários**
2. Clique no ícone **Editar** do usuário que você deseja mover
3. Clique na guia **Permissões**
4. Na entrada **Funções**, selecione ou desmarque várias funções conforme necessário
5. Clique em **Salvar alterações**

## Atribuição de Conta

Um usuário tem acesso à conta na qual o usuário está atribuído (chamada de conta pai) e a qualquer uma da contas filhas da conta pai.

### Movendo usuários entre entidades

![](../images/manage-users-move-user.gif)
É possível mover um usuário para qualquer conta que você tenha acesso para exibir. Para mover um usuário:

1. Na barra de navegação lateral, clique em **Admin > Gerenciar usuários**
2. Clique no ícone **Editar** do usuário que você deseja mover
3. Clique na guia **Permissões**
4. Na entrada **Conta pai**, comece a digitar o nome da conta para a qual você deseja mover o usuário
5. Clique em **Salvar alterações**

## Funções e permissões

| Permissões                                | Master Admin | Admin | Buyer | User | Remote Technician Configurer | Remote Technician User |
| ----------------------------------------- | ------------ | ----- | ----- | ---- | ---------------------------- | ---------------------- |
| Visualizar detalhes dos usuários          | X            | X     | X     | X    |                              |                        |
| Download instalador Print Tracker         | X            | X     | X     | X    |                              |                        |
| Visualizar alertas                        | X            | X     | X     | X    |                              |                        |
| Visualizar dispositivos                   | X            | X     | X     | X    |                              |                        |
| Incluir filhas em "Vis. dispositivos"     | X            | X     | X     | X    |                              |                        |
| Visualizar novos dispositivos             | X            | X     | X     |      |                              |                        |
| Ações em lote em "Vis. dispositivos"      | X            | X     | X     |      |                              |                        |
| Atualizar status de alerta em lote        | X            | X     | X     |      |                              |                        |
| Atualizar status de alerta                | X            | X     | X     |      |                              |                        |
| Adicionar dispositivos                    | X            | X     | X     |      |                              |                        |
| Atualizar ou deletar usuários             | X            | X     |       |      |                              |                        |
| Criar ou deletar conta                    | X            | X     |       |      |                              |                        |
| Editar configurações de conta             | X            | X     |       |      |                              |                        |
| Gerenciar conta                           | X            | X     |       |      |                              |                        |
| Criar novo usuário                        | X            | X     |       |      |                              |                        |
| Atualizar configurações de dispositivo    | X            | X     |       |      |                              |                        |
| Mudar status de rastreio do dispositiv    | X            | X     |       |      |                              |                        |
| Enviar email de implantação Print Tracker | X            | X     |       |      |                              |                        |
| Editar configurações de instalação        | X            | X     |       |      |                              |                        |
| Solicitar leituras de medidores           | X            | X     |       |      |                              |                        |
| Ver tarefas executadas por instalações    | X            | X     |       |      |                              |                        |
| Importação em lote de dispositivos        | X            | X     |       |      |                              |                        |
| Ver histórico de medidores                | X            | X     |       |      |                              |                        |
| Criar e gerenciar relatórios              | X            | X     |       |      |                              |                        |
| Visualizar relatórios                     | X            | X     |       |      |                              |                        |
| Mover conta na hierarquia                 | X            |       |       |      |                              |                        |
| Remover trabalhos da lista de trabalhos   | X            |       |       |      |                              |                        |
| Configurar Técnico Remoto                 | X            |       |       |      | X                            |                        |
| Utilizar Técnico Remoto                   | X            |       |       |      |                              | X                      |
