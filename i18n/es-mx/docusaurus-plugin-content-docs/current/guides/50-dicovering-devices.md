---
slug: discovery
sidebar_position: 50
---

# Discovering and Managing Devices
Print Tracker's primary purpose is to discover your devices and collect [meters](./60-meters-and-supplies.md) from those devices. Once discovered, you can view and manage your devices remotely from anywhere in the world. Managing your devices includes configuring device settings, cleaning up old devices, reviewing device statistics, and more.

:::caution Under Construction
This guide is currently under construction. Please check back soon for updates.
:::

## Discovering Devices {#discovering-devices}
The process of discovering devices on your network involves scanning every IP address to detect whether there's a printer located at that address. By default, Print Tracker will periodically scan your network automatically to discover new devices. You can also manually trigger a scan at any time. 

### On-demand Scans {#on-demand-scans}
![](https://www.cdn.printtrackerpro.com/images/documentation/discovering-devices-scan-for-device.gif)

To manually scan your network for devices:
1. Using the side navigation bar, click **Devices > View devices**
2. In the top-right corner, click **Scan for devices**
3. Enter the IP address, range, network, or CIDR block you want to scan
   :::info
   This field supports values formatted as:
   * Individual IP addresses (`10.0.0.1`)
   * Range of IP addresses (`10.0.0.1-10`)
   * A single subnet using a wild card (`10.0.0.*`)
   * A [CIDR notated](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) network (`10.0.0.1/24`)
   :::
4. Click **Add devices**
5. If there are multiple installs at this entity, select the installs that you want to run the scan from
6. Click **Confirm**

If the install is online, it will immediately begin scanning the network for devices. If the install is offline, the scan will begin the next time the install comes online.

#### Viewing Scan Progress {#viewing-scan-progress}
![](https://www.cdn.printtrackerpro.com/images/documentation/discovering-devices-scan-job.gif)

To view the progress of the scan:
1. Using the sidebar, click **Jobs > View**
2. Click on the job named **Custom Scan**

You can view the progress of the scan as well as the logs produced by the install during the scan.

### Scheduled Scans {#scheduled-scans}

## Viewing Devices {#viewing-devices}

### Customizing Columns {#customizing-columns}

### Including Children {#including-children}

### Filtering and Sorting {#filtering-and-sorting}

### Pagination {#pagination}

### Exporting {#exporting}

### New Devices {#new-devices}

## Device Details {#device-details}

### Supplies Overview {#supplies-overview}

### Available Meters {#available-meters}

### Supplies Details (beta) {#supplies-details-beta}

### Audit History {#audit-history}

### Alerts {#alerts}

### Settings {#settings}

### Reports {#reports}

### Remote Technician {#remote-technician}

## Managing Devices {#managing-devices}

### Enabling/Disabling Devices {#enablingdisabling-devices}

### Removing Devices {#removing-devices}

## Non-Managed Devices {#non-managed-devices}

## Network Topology Scanner {#network-topology-scanner}

## Troubleshooting {#troubleshooting}
[Troubleshooting](../troubleshooting/10-devices.md)