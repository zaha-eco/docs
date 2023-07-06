---
id: start
sidebar_position: 0
---

import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

# Guia de início rápido

## 1. Comece sua avaliação {#1-start-your-trial}

O Print Tracker oferece uma avaliação gratuita de 30 dias sem compromisso, sem restrições. Você pode iniciar sua avaliação registrando-se para uma conta. Clique abaixo para começar!

<Box mb={2}>
    <Button fullWidth size="lg" onClick={() => window.open("https://app.printtrackerpro.com/auth/register")}>Register</Button>
</Box>


[//]: # (![]&#40;./images/quickstart-register.png&#41;)

## 2. Instalar o agente {#2-install-the-agent}
O Print Tracker coleta dados de seus dispositivos instalando um pequeno agente de software em sua rede. O agente está disponível para Windows, Mac e Linux. Você pode baixar o agente clicando no botão abaixo.

<iframe src="https://app-v2.printtrackerpro.com/download" width="100%" height="300px" frameborder="0"></iframe>

## 3. Ativar o agente {#3-activate-the-agent}
Depois de instalar o agente, você precisará ativá-lo. Você pode ativar o agente seguindo [estas instruções](./guides/installation#datalink-code)

## 3. Descobrir dispositivos {#3-discover-devices}
Após a ativação, o agente começará a descobrir dispositivos em sua rede. Você pode exibir os dispositivos descobertos seguindo [estas instruções](./guides/installation#discovered-devices).

:::info Dispositivos ausentes?
Não consegue encontrar o dispositivo que procura? Tente verificar manualmente seus endereços IP.
<Box mb={2}>
    <Button fullWidth size="lg" onClick={() => window.open("/docs/guides/discovery#discovering-devices")}>Saiba como</Button>
</Box>
:::

## 4. Carregar Medidores {#4-upload-meters}
Assim que os dispositivos forem descobertos, eles começarão automaticamente a carregar medidores! Você pode visualizar os medidores seguindo [estas instruções](./guides/meters#viewing-meters-and-supplies).

:::info Faltam medidores?
Os medidores não carregam? Tente carregar manualmente medidores para seus dispositivos.
<Box mb={2}>
<Button fullWidth size="lg" onClick={() => window.open("/docs/guides/meters#on-demand-uploads")}>Saiba como</Button>
</Box>
:::

## O que vem a seguir? {#whats-next}
Há muito mais a aprender sobre o Print Tracker e há muitas estratégias para gerenciar com eficiência grandes frotas de impressoras. Aqui estão alguns recursos para ajudá-lo a começar:
* [Configurações e alertas](guides/20-configuring-settings.md)
* [Criação e Organização de contas](guides/30-creating-entities.md)
* [Criação de relatórios personalizados](guides/80-custom-reports.md)
