---
slug: discovery
sidebar_position: 50
---

# Discovering and Managing Devices

Print Tracker is able to discover and extract data from printing devices that are accessible via a network connection and extract all page count and supply data the devices provides. Print Tracker is also able to connect directly to non-networked devices and extract limited page count and supply data. This data is accesed via an agent installed on a device or machine within the network or on a local machine connected to a printer via USB.

## Discovering Devices

Devices are discovered when the agent scans accessible networks and identifies printing devices based off their response to certain SNMP requests.

### Ad Hoc Scans

You can scan an available network subnet on demand via an ad hoc scan. This allows you to discover new devices or confirm the existence of previous devices.

To start an ad hoc scan:

1. Navigate to the entity whose network you want to scan
2. On the side bar, click **Devices > View devices**
3. Click **Scan for devices**
4. Add IP adresses in a valid format to the **Include Subnets / IP Addresses** field and press **Return** or **Tab** on your keyboard after each entry
   :::info
   Print Tracker supports values formatted as an individual IP addresses (10.0.0.1), a range of IP addresses (10.0.0.1-10), using a wild card (10.0.0.\*), or using [Cider notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) (10.0.0.1/24)
   :::
5. If you want to skip certain IP addresses, add those IP addresses to the **Exclude IP Addresses** field
6. Click **Add devices**
7. Select the install(s) you want to perform the ad hoc scan
8. Click **Confirm**
9. Click **Confirm**

Depending on the number of IP addresses you have chosen to scan and other jobs already running at the entity this could take a cople of minutes to complete. You are able to view this scan's progress in the **Jobs** panel.

To view a scan's progress:

1. On the side bar, click on **Jobs > View**
2. In the jobs panel on the left pane, click on the most recent job labeled **Custom Scan**
3. Scroll to the bottom to see the complete logs or click on **View annotated logs**

### Scheduled Scans

You can configure when you want automatic scans of the network to take place in the settings. You can learn more about those settings [here](./settings#scanning-schedule).

## Viewing Devices

You can view all devices at a specific entity.

To do this:

1. Navigate to the appropriate entity
2. On the right bar, click **Devices > View devices**

### Customizing Columns

To change the visible columns on the **View devices** page:

1. Using the right bar, click on **Devices > View devices**
2. Click on the **Filter** icon in the top right corner of the table
3. Check the columns that you want to appear in the table

### Including Children

Along with the devices at a current entity, you can also view all of the active entity's children entity devices.

1. Navigate to the appropriate entity
2. On the right bar, click **Devices > View devices**
3. To view all of the devices at the current entity and every child entity, click the **Include children** toggle

### Filtering and Sorting

You can filter the list of devices by typing a search term into the search bar at the top of the table. You can search for specific devices by serial number, by model, supply name, and more. You can also click the column headers multiple times to adjust the sort direction (ascending or descending).

### Pagination

Entities may have hundreds or thousands of devices. In order to help you find the data that you're looking for, Print Tracker divides up all your data into pages. You can navigate between pages using the pagination controls at the bottom of the table.

### Exporting

You can export the list of devices to a CSV file. This is helpful if you want to share the list of supplies with someone else, or if you want to do additional analysis in a spreadsheet.

To do this:

1. Navigate to the **View devices** page
2. Cick on the **Gear** icon
3. Select **Export meters to CSV**
4. A downloaded CSV file will save to your computer

### New Devices

Anytime a new device is discovered by a scheduled or ad hoc scan, it will appear on the **New devices** page. You can choose if you want to disable a device, prior to being billed. [You can go here to understand how new devices are billed.](./billing#)

## Device Details

To view device details:

1. Navigate to the **View devices** page
2. Click on the row of the device you want details for

### Supplies Overview

The **Overview** tab gives a quick view of current supply levels along with a table of more detailed information about each supply.

### Available Meters

The **Overview** tab allows you to quickly view all available meters along with their most recent page count values.

### Supplies Details (beta)

### Audit History

### Alerts

The **Alerts** tab allows you to view all of the selected devices alerts. You can also manage the status of each alert, changing it from **New** to **In progress** or **Resolved**.

### Settings

The **Settings** tab allows you to change settings that will apply ONLY to the currently selected device. [Click here to learn more about these settings.](./settings#)

### Reports

### Remote Technician™

[Click here to learn more about Remote Technician.](./remote-technician#)

## Managing Devices

### Enabling/Disabling Devices

### Removing Devices

## Non-Managed Devices

## Network Topology Scanner

## Troubleshooting

[Troubleshooting](../troubleshooting/10-devices.md)
