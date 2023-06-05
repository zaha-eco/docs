---
slug: installation
sidebar_position: 40
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installing and Managing Agents
Print Tracker utilizes data collection agents -- lightweight software applications installed within customer networks -- to discover and collect data from your devices. The agents are available for Windows, Mac, and Linux operating systems and can be installed using a variety of methods, including email, direct download, and command line. 

## Datalink Code
When an agent is installed inside your customers network, it needs to know how to upload that data to you. Print Tracker connects data collected from your customer's network to your account using a unique identifier called a **Datalink Code**. This code is a unique identifier that is generated for each entity in your account.

![](../images/installing-agents-datalink-code.png)

You can get the datalink code for an entity by:
1. Navigating to the entity you'd like to get the datalink code for
2. Using the sidebar, click **Installs > Deploy install**
3. Copy the datalink code from the **Datalink code** field

## Deployment Strategies
There are several different ways that you can deploy the Print Tracker data collection agent depending on your use-case. For example, if you're on-site at a customer's location, you may choose to [download the agent directly](#download-and-install) to the customer's computer and install it manually. Or, if you're working remotely, you may choose to [send the agent to the customer via email](#deployment-email) and have them install it themselves. You might even have remote administration access to a fleet of computers, in which case you can deploy the agent using the [command line](#command-line).

Once the agent is installed, it also needs to be [activated](#activation). The activation process effectively "registers" this agent to your account so that you can manage and collect data from it.

### Deployment Email
The deployment email strategy allows you to easily send a link to the installer directly to your customer, along with instructions on how to activate the agent.

![](../images/installing-agents-send-deployment-email.gif)

To send a deployment email:
1. Select the entity that you'd like the install to be associated with.
2. Using the sidebar, click **Installs > Deploy install**
3. Click **Send installation email**
4. Enter the email address of your customer's on-site contact
5. Click **Send email**. 

Your customer will receive instructions on how to download and activate the agent

### Download and Install
You may choose to download the agent directly to the computer that you're working on right now. You can find all Print Tracker downloads by navigating to [printtrackerpro.com/download](https://www.printtrackerpro.com/download), or picking the appropriate download for your operating system below.

<iframe src="https://app-v2.printtrackerpro.com/download" width="100%" height="500px" frameborder="0"></iframe>

### Command Line
In some cases, it may be easier to deploy the agent using the command line. This is especially true if you have remote administration access to a fleet of computers that all need to be installed with the agent. Currently, only Windows and Linux support command-line installation.

If you'd like to install and activate the agent in the same command, please skip to [Automatic Activation](#automatic-activation).

#### Installation
<Tabs groupId="operating-system">
<TabItem value="windows" label="Windows">

:::caution Warning
You must run the Powershell window as an administrator in order to install the agent. If you do not, the installation will silently fail.
:::

1. Open a Powershell window as an administrator
2. Copy and paste the following command into the Powershell window and press enter
3. This command will download the latest version of Print Tracker and install it
4. Once the installation is complete, open [localhost:1301](http://localhost:1301/) to activate the agent with your [datalink code](#datalink-code)

```powershell
$webClient = New-Object System.Net.WebClient; $version = $webClient.DownloadString('https://www.cdn.printtrackerpro.com/modules/dca/current_major_version').Trim(); $url = "https://www.cdn.printtrackerpro.com/modules/dca/$version/PrintTrackerProOfflineSetup.msi";  Write-Host "Version: $version"; Write-Host "Download URL: $url"; $output = Join-Path -Path $([System.IO.Path]::GetTempPath()) -ChildPath 'PrintTrackerProOfflineSetup.msi';  Write-Host "Download Path: $output" $webClient.DownloadFile($url, $output); Start-Process 'msiexec' -ArgumentList @('/qn', '/i', "`"$output`"") -Wait;
```

</TabItem>
<TabItem value="linux" label="Linux">

:::caution Warning
You must have sudo access in order to install the agent. If you do not, the installation will fail.
:::

1. Open a terminal window
2. Run the following command to download and install the agent
3. Once the installation is complete, open [localhost:1301](http://localhost:1301/) to activate the agent with your [datalink code](#datalink-code)

```shell
source <(curl -fsSL printtrackerpro.com/install.sh)
```

</TabItem>
</Tabs>


#### Automatic Activation
In addition to installing the agent using the command line, you can also use the command line to activate the agent.

<Tabs groupId="operating-system">
<TabItem value="windows" label="Windows">

:::caution Warning
You must run the Powershell window as an administrator in order to install the agent. If you do not, the installation will silently fail.
:::

1. Open a Powershell window as an administrator
2. Copy the following command
3. Replace `<YOUR DATALINK CODE>` with your [datalink code](#datalink-code)
4. Run the command to download and install the agent

```powershell
$webClient = New-Object System.Net.WebClient; $version = $webClient.DownloadString('https://www.cdn.printtrackerpro.com/modules/dca/current_major_version').Trim(); $url = "https://www.cdn.printtrackerpro.com/modules/dca/$version/PrintTrackerProOfflineSetup.msi";  Write-Host "Version: $version"; Write-Host "Download URL: $url"; $output = Join-Path -Path $([System.IO.Path]::GetTempPath()) -ChildPath 'PrintTrackerProOfflineSetup.msi';  Write-Host "Download Path: $output" $webClient.DownloadFile($url, $output); Start-Process 'msiexec' -ArgumentList @('/qn', '/i', "`"$output`"", 'DATALINK_CODE=<YOUR DATALINK CODE>') -Wait;
```

</TabItem>
<TabItem value="linux" label="Linux">

:::caution Warning
You must have sudo access in order to install the agent. If you do not, the installation will fail.
:::

1. Open a terminal window
2. Copy the following command
3. Replace `<YOUR DATALINK CODE>` with your [datalink code](#datalink-code)
4. Run the command to download and install the agent

```shell
datalink_code='<YOUR DATALINK CODE>'; source <(curl -fsSL printtrackerpro.com/install.sh)
```

</TabItem>
</Tabs>

## Installation
Once the agent has been [downloaded and installed](#download-and-install), the last step is activation. Activation connects your Print Tracker account to the agent installed within your customer's network. An agent that is not activated to your account will not appear in Print Tracker.

### Activation
To activate an agent, make sure the agent has been downloaded and installed using one of the [deployment strategies](#deployment-strategies). Once the agent has been installed:

1. Open [localhost:1301](http://localhost:1301/) in the web browser of the computer that the agent is installed on
2. Enter your [datalink code](#datalink-code)
3. Click **Activate**

[//]: # (### Network Discovery)

## Clustering and Redundancy
Clustering is the idea of installing multiple agents on the same network so that if one agent goes down, another agent can take over. Print Tracker automatically clusters agents that are registered using the same [datalink code](#datalink-code). This means that if you have multiple agents installed at the same entity, they will automatically cluster together without requiring any additional configuring from you.

When multiple agents are installed on the same network, devices, meters, and all other collected data is de-duplicated automatically.

## Stale Agents
A stale agent is an agent that is no longer connected to Print Tracker. Installs usually check-in every 30-minutes, however, some installs may not check in for longer periods of time if the computer is shutdown, or enters sleep mode. Installs that are offline for extended periods of time (several days) can be problematic. For example asn agent that is offline for an extended period of time may have missed critical device alerts, such as a supply being replaced. When a [stale agent comes back online](./20-configuring-settings.md#stale-install-back-online-alert) it is important to review all your devices to make sure you haven't missed any critical events.

## Deactivating/Reactivating
You can deactivate an agent at any time. Deactivating an agent will hide the agent from your account. Deactivating an agent will not uninstall the agent from the computer it is installed on. If you want to uninstall the agent, you must do so manually.

Deactivated agents stop checking in to Print Tracker regularly, and instead, check in only on system restart. This means that if you reactivate a deactivated install, it may not come back online until the computer is restarted.

You should only deactivate agents that you don't plan on using again. If you plan on using an agent again in the future, you should leave it activated.

### Deactivating
![](../images/installing-agents-deactivating.gif)

To deactivate an agent:
1. Using the sidebar, click **Installs > View installs**
2. Find the install that you want to deactivate
3. Click the **Checkbox Icon** on the left side of the table
4. At the top of the table, click the down arrow next to table's checkbox icon
5. Click **Disable selected**

### Reactivating
![](../images/installing-agents-reactivating.gif)

To reactivate an agent:
1. Using the sidebar, click **Installs > View installs**
2. Make sure that the **Exclude inactive** filter is disabled
3. Find the install that you want to reactivate
4. Click the **Checkbox Icon** on the left side of the table
5. At the top of the table, click the down arrow next to table's checkbox icon
6. Click **Enable selected**

## Uninstalling
Uninstalling Print Tracker must be done directly on the computer where Print Tracker is installed. This process varies depending on the operating system.

<Tabs groupId="operating-system">
<TabItem value="windows" label="Windows">

![](../images/installing-agents-uninstalling.gif)

1. Open the Windows **Start Menu**
2. Search "Add or remove programs" and open it
3. Search for "Print Tracker Pro"
4. Click the three-dot menu icon next to "Print Tracker Pro"
5. Click **Uninstall**
6. Follow the prompts to complete the uninstallation

</TabItem>
<TabItem value="macos" label="macOS">

1. Open a terminal window
2. Copy and run the following command
3. Follow the prompts to complete the uninstallation

```shell
sudo bash /Library/PrintTracker/DataCollectionAgent/uninstall.sh
```

</TabItem>
<TabItem value="linux" label="Linux">

1. Open a terminal window
2. Copy and run the following command

```shell
source <(curl -fsSL printtrackerpro.com/uninstall.sh)
```

</TabItem>
</Tabs>

## Troubleshooting
For more details on troubleshooting issues with your agents, see the [Troubleshooting](../troubleshooting/20-installs.md) section.

### macOS Installer Packages

Some macOS devices may pop up a warning indicating that the .pkg cannot be opened. This is because Print Tracker is not notarized by Apple and made available via the Apple App Store.

![](../images/installing-agents-macos-error.png)

To bypass this warning:
1. Right-click on the file in your Finder window.
2. Click **Open**
3. Click **Open** again
4. Follow the installation prompts.

![](../images/installing-agents-macos.gif)