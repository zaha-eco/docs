---
slug: meters
sidebar_position: 60
---

# Meter Reads
Our primary responsibility is consistently gathering your data from your devices, ensuring that your customers are billed accurately and on-time. Print Tracker's approach involves capturing all data reported by a device, and then providing you with the flexibility to select the most relevant data for your contracts.

## What is a Meter Read? {#what-is-a-meter-read}

Print Tracker tracks several different meters to help you understand how your customers are using your devices, for example:
* Total
* Total Black
* Total Color
* Total Prints
* Total Copies
* Total Faxes
* Total Scans
* Tier 1 Prints
* Tier 2 Prints
* Tier 3 Prints

We periodically collect these meters (and many others depending on the device), along with the supply levels, console messages, and any error codes that are reported by the device. A **meter read** is the combination of all of these data points that are collected at a specific point in time. By default, Print Tracker will collect meter reads several times a day, and upload at least one meter read per day.

## Uploading Meters {#uploading-meters}

Print Tracker will securely collect and upload meters from devices automatically based on a schedule that you can customize, or you can also collect and upload the latest data anytime you'd like.

### On-demand Uploads {#on-demand-uploads}
![](../images/meters-upload-on-demand.gif)

To upload meters once, immediately:
1. Using the sidebar, click **Devices > View devices**
2. Click the **Upload meters** button

### Automated Uploads {#automated-uploads}

Print Tracker will automatically upload meters every day during one of the following windows:
* 12am - 6am
* 6am - 12pm
* 12pm - 6pm
* 6pm - 12am

See [Scanning Schedule](./settings#scanning-schedule) for more details about changing the schedule to meet your needs.

## Viewing Meters and Supplies {#viewing-meters-and-supplies}

Once meter reads have been collected and securely uploaded, you can query them with a [custom report](./reports), query the meter history over time for a specific device, or visualize the data using Print Tracker's integrated visualization tools.

[//]: # (### Device Details)

[//]: # ()
[//]: # (To view the key billing meters and supplies for a device:)

[//]: # (1. Using the sidebar, click **Devices > View devices**)

[//]: # (2. Click on a device in the **View devices** table)

[//]: # ()
[//]: # (This will open details for a device. On the **Overview** tab, you can see the key billing meters and any supplies the device reports.)

### Meter History {#meter-history}
![](../images/meters-view-meter-history.gif)

To view historical meter reads for a device:
1. Using the sidebar, click **Devices > View devices**
2. Find the device that you'd like to view the meter history for
3. Click on the 3-dot icon in the last column of the **View devices** table
4. Click **View meter history**

:::info Info
Additional details on how to customize the data displayed can be found on the [Custom Reports](./reports) page.
:::

### Volume Over Time {#volume-over-time}
![](../images/meters-view-volume.gif)

To view usage behavior over time:
1. Using the sidebar, click **Devices > View devices**
2. Click on a device in the **View devices** table
3. Click on the **Reports** tab
4. View the **Page Counts** chart

### Supply Burn-down {#supply-burn-down}
![](../images/meters-view-supply-burndown.gif)

To view how supply levels have burned-down over time:
1. Using the sidebar, click **Devices > View devices**
2. Click on a device in the **View devices** table
3. Click on the **Reports** tab
4. View the **Supplies** chart

## Billing Meters {#billing-meters}

Billing meters are a collection of meters that you may use to bill your customer and allow you to specify which formats and counters you'd like to see in your reports, or send to your ERP if using a [third-party integration](./integrations). These defaults are displayed on the device's Overview tab, and in all the default custom reports. Because many devices measure page counts using different measurement formats and counters, Print Tracker allows you to customize on a per-device basis which of those measurement formats and counters you care about.

### Formats and Counters {#formats-and-counters}

A **format** is a calculation method used by a manufacturer to count pages. These calculation methodologies are defined by the manufacturer, not Print Tracker. Print Tracker has classified these methodologies into the following terms:

| Format                 | Description                                                                                                                                                                                                    |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Life**               | Generally counts any piece of paper the comes out of the machine as one page. If the manufacturer doesn't specifically denote one of the other formats, Print Tracker will assume it is using the life format. |
| **Equivalent**         | A methodology designed to equivalize page counts based on factors such as simplex, duplex, paper size, etc. For example, a duplex print will count as 2 pages while an envelope may count as 1/3 of a page.    |
| **Linear Feet/Meters** | Calculates meters based on the number of linear feet or meters printed by the device.                                                                                                                          |
| **Square Feet/Meters** | Calculates meters based on the number of square feet or meters printed by the device.                                                                                                                          |
| **Engine**             | A methodology used by HP to indicate the number of cycles the print engine has gone through.                                                                                                                   |
Examples of **counters** include:
* Total
* Total Black
* Total Color
* Total Prints
* Total Copies
* Tier 1 Prints
* Tier 2 Prints
* Tier 3 Prints

In most cases, the same counter will appear in multiple formats, which is another way of saying that for a given device, the total counter can be represented in equivalent page counts as well as engine page counts (life). The billing meters that you choose should depend on how your device's contract is structured.

### Configuring Preferences {#configuring-preferences}
Because contracts can vary from one customer to the next or even one device to the next, billing meters can be customized by entity or device. To configure these settings, see [Configuring Billing Meters](./settings#meters).

## Billing Schedule {#billing-schedule}
The billing schedule is used to set the timing and frequency of when you bill your customers. For example, if Entity A has a billing schedule of "every 1 month on the 15th day of the month", Print Tracker will create a billing period that can be used to calculate all the volume printed at Entity A from January 15 through February 15 then February 15 through March 15, etc.

To configure this setting, see [Billing Schedule](./settings#schedule).