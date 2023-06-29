---
slug: entities
sidebar_position: 30
---

# Criação e Gestão de Contas

Uma conta é um contêiner usado para organizar outras contas, instalações, dispositivos e facilitar o gerenciamento e a navegação. Uma conta funciona como uma "Pasta" funciona dentro do sistema de pastas do Windows.

As contas podem conter qualquer número de outras contas, instalações, dispositivos e podem ser aninhadas em outras contas para criar uma estrutura de organização hierárquica. Cada conta deve ser identificada por um nome exclusivo e seu conteúdo pode ser acessado e manipulado por meio da ferramenta **Seletor de Contas** ou da barra de pesquisa **Pesquisar contas** na parte superior da página.

Você pode criar, renomear, mover, copiar, excluir e modificar o conteúdo de contas para organizar e gerenciar seu conteúdo de forma eficiente. As contas são essenciais para gerir de forma eficaz, organizada e facilitar o acesso e o compartilhamento de dados.

## Hierarquia

As contas e seu conteúdo são organizados em uma relação pai-filho, onde uma conta pai pode conter uma ou mais contas filhas, e cada conta filha pode, por sua vez, conter contas, instalações ou dispositivos filhos adicionais. Essa hierarquia de contas pode ser pensada como uma árvore de diretórios ou árvore de sistema de arquivos. O Print Tracker suporta um número ilimitado de níveis de hierarquia.

Cada conta na árvore de diretórios deve ter um nome exclusivo e seu local é especificado pelo caminho completo do diretório de nível superior da conta. A hierarquia de uma conta pode ser vista na estrutura de navegação e cada nível de hierarquia é denotado com o "/" entre os nomes das contas.

O sistema de conta usa uma estrutura hierárquica para facilitar a organização, facilitando a localização e o gerenciamento do seu parque de impressoras. Ele também permite que você defina permissões e níveis de acesso em uma base de conta por conta, fornecendo segurança e controle aprimorados.

### Conta de Nível Superior

A conta de nível superior contém todas as contas filhas, instalações e dispositivos que um determinado usuário pode acessar. Cada usuário deve ter exatamente uma conta de nível superior.

### Conta Pai

Uma conta pai descreve qualquer conta que esteja diretamente acima da conta ativa ou da conta que você selecionou no momento.

### Conta Filha

Uma conta filha é uma conta contida em outra conta no sistema de hierarquia do Print Tracker e pode estar localizada em qualquer nível abaixo de uma conta pai na hierarquia. Uma conta filha pode conter suas próprias contas, instalações e dispositivos filhos.

### Conta Ativa

A conta ativa é a conta que você selecionou no momento. Para configurar ou gerenciar as configurações de uma conta, ela deve primeiro ser navegada usando a ferramenta **Seletor de Conta** ou a barra de pesquisa **Pesquisar contas** na parte superior da página.

## Estratégias de Organização

A melhor estratégia para organizar a hierarquia dentro do sistema de contas do Print Tracker dependerá de suas necessidades e preferências específicas. No entanto, existem algumas diretrizes gerais que podem ajudar a criar uma estrutura hierárquica eficaz e eficiente:

1. Mantenha a simplicidade e a lógica: use nomes de contas claros e concisos que descrevam com precisão o conteúdo.

2. Use contas para gerenciar divisões lógicas de acesso: considere como você deseja controlar a visibilidade, as funções e permissões e o acesso de outros usuários. Você pode usar contas para delinear entre divisões geográficas de uma organização (por exemplo. Divisão Norte e Divisão Sul) ou limites de pessoal dentro da sua organização (por exemplo, Time do João, Time da Maria).

3. Crie uma convenção de nomenclatura consistente: use uma convenção de nomenclatura consistente para contas e instalações, para que elas sejam fáceis de localizar e identificar.

4. Evite criar muitos níveis: Tente manter a estrutura da conta o mais plana possível e evite criar muitos níveis de contas-filhas. Isso pode dificultar a navegação na estrutura de pastas e a localização de contas específicas.

Em geral, uma estrutura de conta eficaz deve ser fácil de navegar, organizada logicamente e permitir uma gestão eficiente da conta, tendo simultaneamente em conta o acesso e a gestão dos utilizadores.

### Locais Físicos

### Escopo de Acesso do Usuário

Um usuário só pode acessar contas e seus conteúdos em ou abaixo de sua própria conta.

## Criando uma conta

<!-- TO DO: INSERT GIF -->

Para criar uma nova conta:

1. Navegue até a conta que você deseja que se torne a conta pai da nova conta
2. Clik na seta para baixo ao lado do nome da conta ativa no canto superior esquerdo da tela
3. Clique em **Adicionar conta**
4. Introduza o nome da nova conta no campo **Nome da conta**
5. Adicione qualquer informação adicional que você deseja associar à nova conta nos campos
6. Clique em **Salvar e editar configurações**

## Excluindo uma conta

<!-- TO DO: INSERT GIF -->

Para excluir uma conta:

1. Navegue até a conta que você deseja excluir
2. Na barra lateral esquerda, clique em **Admin > Gerenciar conta**
3. Clique em **Configurações**
4. Clique em **Excluir conta** na parte inferior da página
5. Siga as instruções para confirmar que deseja excluir a conta
   :::perigo
   A exclusão de uma conta também excluirá **todos** de seus descendentes e seus conteúdos, incluindo contas filhas, instalações, usuários, dispositivos e dados de dispositivos. Essa ação não pode ser desfeita.
   :::

## Movendo uma conta

Se você tiver a função e as permissões adequadas, poderá mover qualquer conta para se tornar uma conta filha de qualquer outra conta no nível de conta de nível superior ou abaixo dele.

Para mover uma conta:

1. Na barra direita, clique em **Admin > Mover Contas**
2. Comece a digitar o nome da conta que você deseja mover no campo de entrada **Mover** e selecione o nome da conta que deseja mover quando ela aparecer na lista suspensa
3. Comece a digitar o nome da conta para a qual você deseja mover a conta no campo de entrada **para** e selecione o nome da conta que você deseja se tornar a nova conta pai quando ela aparecer na lista suspensa
4. Clique em **Mover conta**
5. Confim a ação se quiser continuar
