---
slug: meters
sidebar_position: 60
---

# Meter Reads

One of the primary functions of a Data Collection Agent is to reliabiliy collect accurate meters from every model of device so you can bill your customers the right amount at the right time. Print Tracker's philosophy is to collect every piece of data a device reports then allow you to choose which ones are most important.

## What is a Meter Read?

Every printer and copier keeps track of how many pages it has printed, but there are several ways a machine can count a page. These meters help companies do things like keep track of how much a machine is being used, know when routine maintenance should be performed, or how much to bill a customer for usage. Some examples of meters Print Tracker collects include:
* Total
* Total Black
* Total Color
* Total Prints
* Total Copies
* Tier 1 Prints
* Tier 2 Prints
* Tier 3 Prints

A **meter read** is performed when Print Tracker collects data from a device. This can include meters, supply levels (e.g., toner, drums, maintenance supplies), device console messages, and other information about the device.

## Uploading Meters

Print Tracker will securely collect and upload meters from devices. Print Tracker will do this automatically every day, but you can also do this anytime on-demand through an ad hoc upload.

### Ad Hoc Uploads

To upload meters on-demand:
1. Using the sidebar, click **Devices > View devices**
2. Click the **Upload meters** button

### Automated Uploads

Print Tracker will automatically upload meters every day during one of the following windows:
* 12am - 6am
* 6am - 12pm
* 12pm - 6pm
* 6pm - 12am

To change the window of the automatic upload:
1. Using the sidebar, click **Admin > Manage entity**
2. Click the **Settings** tab
3. Open the **Data Collection Agent** section
4. Change the **Upload daily meter read** setting to the desired window
5. Click the **Save settings** button at the bottom of the page

## Viewing Meters and Supplies

Once meter reads have been collected and securely uploaded, you can view them in a variety of ways.

### Device Details

To view the key billing meters and supplies for a device:
1. Using the sidebar, click **Devices > View devices**
2. Click on a device in the **View devices** table

This will open details for a device. On the **Overview** tab, you can see the key billing meters and any supplies the device reports.

### Meter History

To view historical meter reads for a device:
1. Using the sidebar, click **Devices > View devices**
2. Locate the desired device
3. Click on the 3 dots in the last column of the **View devices** table
4. Select **View meter history**

:::info Info
Additional details on how to customize the data displayed can be found on the [Custom Reports](./reports) page.
:::

### Volume Over Time
To view usage behavior over time:
1. Using the sidebar, click **Devices > View devices**
2. Click on a device in the **View devices** table
3. Click on the **Reports** tab
4. View the **Page Counts** chart

### Supply Burn-down
To view how supply levels have burned-down over time:
1. Using the sidebar, click **Devices > View devices**
2. Click on a device in the **View devices** table
3. Click on the **Reports** tab
4. View the **Supplies** chart

## Billing Meters

Billing meters are a collection of meters you use to bill your customer. They allow you to set default formats and counters. These defaults are displayed on the Device Overview tab, and in all the default custom reports. Because many devices measure page counts using different measurement formats and counters, Print Tracker is designed to allow you to customize down to a per-device basis which of those measurement formats and counters you care about.

### Formats and Counters

A **format** is a calculation method used by a manufacturer to count pages. These calculation methodologies are defined by the manufacturer, not Print Tracker. Print Tracker has classified these methodologies into the following terms:
* **Life**: generally counts any piece of paper the comes out of the machine as one page. If the manufacturer doesn't specifically denote one of the other formats, Print Tracker will assume it is using the Life format.
* **Equivalent**: a methodology designed to equivalize page counts based on factors such as simplex, duplex, paper size, etc. For example, a duplex print or copy will count as 2 pages while an envelope may count as 1/3 of a page.
* **Linear Feet/Meters**: calculates meters based on the number of linear feet or meters printed by the device.
* **Square Feet/Meters**: calculates meters based on the number of square feet or meters printed by the device.
* **Engine**: a methodology used by HP to indicate the number of cycles the print engine has gone through.

Examples of **counters** include:
* Total
* Total Black
* Total Color
* Total Prints
* Total Copies
* Tier 1 Prints
* Tier 2 Prints
* Tier 3 Prints

In most cases, the same counter will appear in multiple formats, which is another way of saying that for a given device, the total counter can be represented in equivalent page counts as well as engine page counts (life). The page count that you choose to make your default depends on how your device's contract is structured.

### Configuring Preferences
Because contracts can vary from one customer to the next or even one device to the next, billing meters can be customized by entity or device.

#### By Entity
To configure billing preferences by entity:
1. Navigate to the desired entity
:::tip Tip
If all your devices use the same meters for billing, setup your default preferences at your dealer entity and all your child entities and devices will inherit these defaults.
:::
2. Using the sidebar, click **Admin > Manage entity**
3. Click on the **Settings** tab
4. Open the **Billing preferences** section
5. Enable the **Toggle billing schedule** setting
6. Enter your formats in order of preference in the *Formats* setting
:::info Info
The order in which you enter your preferences matters. For example, if your preference lists **Equivalent** then **Life**, Print Tracker will use the equivalent meter if the device reports it. If the device does not report equivalent meters, Print Tracker will use the life meter.
:::
7. Enter the counters you want to use for billing and see throughout the Web Admin in the **Counters** setting
8. Click the **Save settings** button at the bottom of the page

## Billing Schedule
The billing schedule is used to set the timing and frequency of when you bill your customers. For example, if Entity A has a billing schedule of "every 1 month on the 15th day of the month", Print Tracker will create a billing period that can be used to calculate all the volume printed at Entity A from January 15 through February 15 then February 15 through March 15, etc.

To configure this setting:
1. Navigate to the desired entity
:::tip Tip
If all your devices use the same schedule for billing, setup your default schedule at your dealer entity and all your child entities and devices will inherit these defaults.
:::
2. Using the sidebar, click **Admin > Manage entity**
3. Click on the **Settings** tab
4. Open the **Billing preferences** section
5. Enable the **Toggle billing schedule** setting
6. Change the **Current schedule** to the desired frequency for billing
7. Set the desired **Schedule timezone**
8. Click the **Save settings** button at the bottom of the page