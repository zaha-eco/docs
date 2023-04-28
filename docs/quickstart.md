---
id: start
sidebar_position: 0
---

import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

# Quickstart

## 1. Start your Trial

Print Tracker offers a free, no obligation 30-day trial with no restrictions. You can start your trial by registering for an account. Click below to get started!

<Box mb={2}>
    <Button fullWidth size="lg" onClick={() => window.open("https://app.printtrackerpro.com/auth/register")}>Register</Button>
</Box>


[//]: # (![]&#40;./images/quickstart-register.png&#41;)

## 2. Install the Agent
Print Tracker collects data from your devices by installing a small software agent on your network. The agent is available for Windows, Mac, and Linux. You can download the agent by clicking the button below.

<iframe src="https://app-v2.printtrackerpro.com/download" width="100%" height="300px" frameborder="0"></iframe>

## 3. Activate the Agent
Once you've installed the agent, you'll need to activate it. You can activate the agent by following [these directions](./guides/installation#datalink-code)

## 3. Discover Devices
After activation, the agent will begin to discover devices on your network. You can view the discovered devices by following [these directions](./guides/installation#discovered-devices).

:::info Missing devices?
Can't find the device's you're looking for? Try manually scanning their IP addresses.
<Box mb={2}>
    <Button fullWidth size="lg" onClick={() => window.open("/docs/guides/discovery#discovering-devices")}>Learn How</Button>
</Box>
:::

## 4. Upload Meters
Once devices are discovered, they'll automatically start uploading meters! You can view the meters by following [these directions](./guides/meters#viewing-meters-and-supplies).

:::info Missing Meters?
Meters not uploading? Try manually uploading meters for your devices.
<Box mb={2}>
<Button fullWidth size="lg" onClick={() => window.open("/docs/guides/meters#on-demand-uploads")}>Learn How</Button>
</Box>
:::

## What's Next?
There's a lot more to learn about Print Tracker, and there are many strategies for effectively managing large fleets of printers. Here are some resources to help you get started:
* [Configuring Settings and Alerts](guides/20-configuring-settings.md)
* [Creating and Organizing Entities](guides/30-creating-entities.md)
* [Creating Custom Reports](guides/80-custom-reports.md)