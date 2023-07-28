---
slug: billing
sidebar_position: 100
---

# Faturamento e Pagamentos

:::caution Em Construção
Este guia está atualmente em construção. Por favor, volte em breve para atualizações.
:::

## Como funciona o faturamento? {#how-does-billing-work}
O Print Tracker fatura os clientes com base no número de dispositivos gerenciados que relatam medidores em um determinado mês do calendário. Qualquer dispositivo gerenciado que relate um medidor durante esse mês será incluído na fatura correspondente, com exceção dos dispositivos recém-descobertos. Quando um dispositivo é descoberto pela primeira vez, os revendedores têm uma janela de 7 dias para marcá-lo como "não gerenciado". Se o dispositivo ainda for rotulado como "gerenciado" após esse período de 7 dias, ele será incluído na fatura do mês do calendário.

### E se eu não quiser monitorar determinados dispositivos? {#what-if-i-dont-want-to-monitor-certain-devices}
Se o Print Tracker descobrir dispositivos que um revendedor não deseja monitorar, os revendedores poderão [desativar](./50-discovering-devices.mdx#enablingdisabling-devices) o dispositivo. Isso removerá esse dispositivo de todas as faturas futuras. Os revendedores recebem um medidor gratuito lido a cada trimestre de todos os dispositivos não gerenciados.

### Eu defini um dispositivo como não gerenciado. Por que fui cobrado por esse dispositivo? {{#i-set-a-device-to-non-managed-why-was-i-billed-for-that-device}
Se você definiu um dispositivo como não gerenciado, mas ainda foi cobrado por ele, pode ser porque o dispositivo já havia relatado um medidor durante esse mês. Nesses casos, o dispositivo será incluído na fatura do mês atual, mas não será cobrado nos meses subsequentes.

![](images/billing-example-non-managed-device.png)

### Novos dispositivos aparecem automaticamente no Print Tracker. Por que isso acontece e como faço para impedir isso?{#new-devices-automatically-show-up-in-print-tracker-why-does-this-happen-and-how-do-i-stop-it}
O Print Tracker verifica automaticamente a rede de um cliente todas as segundas e quintas-feiras para procurar dispositivos recém-adicionados. Quando um novo dispositivo é descoberto, ele aparece na página "Novos dispositivos" do Webadmin. Isso dá aos revendedores a oportunidade de marcá-los como não gerenciados nos primeiros 7 dias após a descoberta para evitar serem cobrados por esses dispositivos.
Se um revendedor não quiser que o Print Tracker pesquise novos dispositivos a cada semana, essa configuração poderá ser desativada usando as seguintes etapas:
1.	Navegue até a conta do cliente
2.	Abra as configurações da conta (guia Admin > Gerenciar Conta > Configurações)
3.	Expanda a seção intitulada "Agente de coleta de dados"
4.	Desmarque todas as caixas na configuração "Procurar por novos dispositivos nos dias"

## Visualizando faturas {#viewing-invoices}

## Pagamento de faturas {#paying-invoices}

## Salvando Métodos de Pagamento {#saving-payment-methods}

## Autopay {#autopay}

## Suporte de faturamento {#billing-support}
Para consultas de faturamento, entre em contato com accounting@printtrackerpro.com.
