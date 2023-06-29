---
slug: settings
sidebar_position: 20
---

# Configuring Settings and Alerts

You can control how and where you collect data, and when you receive alerts about that data by configuring settings. Settings can be set and managed from the [top level entity](./30-creating-entities.md#top-level-entity), any individual entity, or an individual device. This gives you maximum flexibility while also providing efficient management of standard settings.

## Settings Inheritance {#settings-inheritance}

Print Tracker settings are inherited through [hierarchy](./entities#hierarchy). This means that when a new entity or device is created in Print Tracker, its settings and alerts will come from the first [parent entity](./entities#parent-entity) in its hierarchy with a setting value explicitly set.

### Inheriting Settings {#inheriting-settings}

Settings natively flow from the top down, according to [hierarchy](./entities#hierarchy). Custom settings you want to apply to your entire fleet should be set one time at your [top level entity](./entities#top-level-entity), while settings that only apply to a particular entity or device should be explicitly set at that level.

### Overriding Settings {#overriding-settings}

When a new entity or device is created, it will automatically inherit its settings through its hierarchy.

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-entity-alert-emails.gif)
To override an inherited setting at the entity level:

1. Navigate to the desired entity
2. Click on **Admin > Manage entity** on the side navigation bar
3. Click on the **Settings** tab
4. Change the setting(s)
5. Click **Save setting** at the bottom of the screen

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-device-alert-emails.gif)
To override an inherited setting at the device level:

1. Navigate to the desired entity
2. Click on **Devices > View devices** on the side navigation bar
3. Click on the device
4. Click on the **Settings** tab
5. Change the setting(s)
6. Click **Save setting** at the bottom of the screen

### Resetting Settings {#resetting-settings}

After a settings has been explicityly set, it will no longer automatically inherit that setting's value through its hierarchy.

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-device-reset.gif)
To reset a setting so it will inherit its value:

1. Clicking on the settings tab of any entity or device
2. Navigating to the correct setting
3. Click on **Reset** on the right side of the setting input.
4. Click **Save setting** at the bottom of the screen

#### Reset for all children {#reset-for-all-children}

When resetting a setting for an entity, you also have the choice to reset a setting for the [active entity](./entities#Active-Entity) and all of its children. This is typically done when you want to standardize a setting.

:::danger
When you **Reset for all children**, this will reset the setting to its inherited value for the active entity, all child entities, and those entites' devices.
:::

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-entity-bulk-reset.gif)
To reset a setting for all children:

1. Navigate to the the entity highest in the hierarchy where you want the change to take effect
2. Click on **Admin > Manage entity** on the side navigation bar
3. Click on the **Settings** tab
4. Go to the setting
5. Click on the down arrow at the right side of the setting input and select **Reset for all children**
6. Click **Save setting** at the bottom of the screen

## Changing Settings {#changing-settings}

### At an Entity {#at-an-entity}
### At an Install {#at-an-install}
### At an Device {#at-an-device}

## Supply Alerts {#supply-alerts}

Supply alerts are pre-defined conditions printing supplies reach that can trigger notifications be sent to a user or group of users.

### Low Supply Alerts {#low-supply-alerts}
![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-low-supply-alert.gif)

A low supply alert is triggered when a supply level crosses a user-defined minimum threshold and can be configured separately for black and color supplies.

To configure a low supply alert:

1. Open the **Device alerts > Supply alerts** section
2. Enable the **Low supply alerts**
3. Enter the email address(es) you want alerts sent to
4. Choose to include potential alerts that require human confirmation by enabling **Suspected alerts**
5. Enter a percentage value at the threshold where you want the alert to trigger
6. Choose to create a separate threshold level for color supplies by enabling the **Separate color threshold**
7. Click **Save setting** at the bottom of the screen

### Replacement Alerts {#replacement-alerts}
![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-replacement-alert.gif)

A replacement alert is triggered when a supply is replaced. Some dealers want to be notified when a supply is replaced in order to keep track of on-site inventory.

To enable replacement alerts:

1. Open the **Device alerts > Supply alerts** section
2. Enable the **Replacement** toggle
3. Enter the email address(es) you want alerts sent to
4. Click **Save setting** at the bottom of the screen

### Premature Replacement Alerts {#premature-replacement-alerts}
![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-premature-replacement-alert.gif)

A premature replacement alert is triggered when a supply is replaced before it drops below the threshold set for a low supply alert. Some dealers want to be notified when a supply is replaced too early in order to better manage supply costs and prevent preamture replacements in the future.

To enable premature replacement alerts:

1. Open the **Device alerts > Supply alerts** section
2. Enable the **Premature replacement** toggle
3. Enter the email address(es) you want alerts sent to
4. Click **Save setting** at the bottom of the screen

## Service Alerts {#service-alerts}
![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-service-alert.gif)

Printing devices wear out, break down, or enter into a state where printing cannot continue without some sort of human intervention. A service alert is triggered when different service needs are required by a device.

To receive low supply alerts for fusers, drums, waste toners, and other maintenance supplies:

1. Open the **Device alerts > Service alerts** section
2. Enable the **Maintenance supply alert** toggle
3. Enter a percentage value at the threshold where you want the alert to trigger
4. Enter the email address(es) you want alerts sent to
5. Click **Save setting** at the bottom of the screen

### Maintenance Alerts {#maintenance-alerts}

<!-- TO DO- Need clarification here -->

## Skip Alerts {#skip-alerts}
![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-skip-alert.gif)

Skip alerts allow you to choose to temporarily ignore low supply alerts. This is typically used by dealers who know how many supplies of a parcticular type they have at a customer's site and do not want to send more of that supply until the current inventoy has been depleted.

To set a skip alert:

1. Open the **Skip alerts** section
2. Click **Add supply**
3. Select the supply you want to create a skip alert for
4. Click on the edit icon and select how many future low supply alerts you want to skip
5. Click **Save setting** at the bottom of the screen

## Volume Alerts {#volume-alerts}

Volume alerts can be configured to notify you when a device has printed a specified number of pages. Volume alerts can be set to be recurring or one-time. Recurring volume alerts will be sent each time the device prints the desired number of pages.

### One-time Volume Alerts {#one-time-volume-alerts}
When configuring a one-time volume alert, you decide the number of pages you want to be alerted at and the email address(es) you want the alert sent to.

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-volume-alert-overview.png)

To configure a one-time volume alert:
1. Open the **Device alerts > Volume alerts** section
2. Enable the **Volume threshold alerts** toggle
3. Enter a value into the **Next alert at** field to set the number of pages you want a volume alert sent at. You'll notice that the current page count is shown below the input for reference.
4. Enter the email addresses you want alerts sent to
5. Click **Save setting** at the bottom of the screen

### Recurring Volume Alerts {#recurring-volume-alerts}

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-recurring-volume-alert.gif)

When configuring a recurring volume alert, you not only configure the volume at which you want your next alert to be sent, but you also configure a frequency at which you want to be alerted. For example, if I set my **Next alert at** to 15000 pages, and my **Frequency** to 5000 pages, I will receive a volume alert at 15000 pages, and then again at 20000 pages, and then again at 25000 pages, and so on.

To set a volume alert:

1. Open the **Device alerts > Volume alerts** section
2. Enable the **Volume alerts** toggle
3. Enable the **Recurring** toggle 
4. Enter a value into the **Next alert at** field to set the first time you want a volume alert sent
5. Enter a value into the **Frequency** field to set how often you want to receive volume alerts after the first alert
6. Enter the email addresses you want alerts sent to
7. Click **Save setting** at the bottom of the screen

## Install Alerts {#install-alerts}

Install alerts are helpful for keeping track of lifecycle events related to an install, such as when a new install is registered to your account, or when an install becomes stale (hasn't checked in for a specified number of days). These alerts can help you proactively manage the health of your fleet.

### New Install Alert {#new-install-alert}
![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-new-install-alert.gif)

A new install alert is triggered anytime a new install is registered to your entity.

To configure a new install alert:

1. Navigate to the desired entity
2. From the side bar, click **Admin > Manage entity > Setings > Install Alerts**
3. Enable the **New install alerts** toggle
4. Enter the email address(es) you want alerts sent to
5. Click **Save setting** at the bottom of the screen

### Stale Install Alert {#stale-install-alert}

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-stale-install-alert.gif)

A stale install alert is triggered anytime an install fails to check in after a configurable number of days.

To configure a stale install alert:

1. Navigate to the desired entity
2. From the side bar, click **Admin > Manage entity > Setings > Install Alerts**
3. Enable the **Stale install** toggle
4. Enter the email address(es) you want alerts sent to
5. Enter into the **Stale days** field how many days the install has to fail to check in before it becomes stale
6. Click **Save setting** at the bottom of the screen

### Stale Install Back Online Alert {#stale-install-back-online-alert}
![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-stale-install-online-alert.gif)

A stale install back online alert is triggered anytime an install that has been stale for a configurable number of days comes back online. When an install has been offline for a while, it is possible that the install has missed key events such as supply replacements, or low supply alerts. In these cases it is important to manually review the devices tracked by this install to make sure that any missed events are accounted for. This alert notifies you when an install has come back online so that you can manually review the devices tracked by this install.

To configure a stale install back online alert:

1. Navigate to the desired entity
2. From the side bar, click **Admin > Manage entity > Setings > Install Alerts**
3. Enable the **Stale install back online** toggle
4. Enter the email address(es) you want alerts sent to
5. Enter into the **Stale days** field how many days the install has to fail to check in before it comes back online
6. Click **Save setting** at the bottom of the screen

## Network Scans {#network-scans}

Network scan settings set defaults for how an [agent](./installation) scans the network where it is installed.

### IP Addresses to Scan {#ip-addresses-to-scan}

You can set the default IP addresses you want to have scanned by the agent.

<!-- TO DO: INSERT GIF -->

To manage IP addresses:

1. Navigate to the desired entity or install
2. Click **Settings > Network discovery**
3. Add IP adresses in a valid format and press **Return** or **Tab** on your keyboard after each entry
   :::info
   Print Tracker supports values formatted as an individual IP addresses (10.0.0.1), a range of IP addresses (10.0.0.1-10), using a wild card (10.0.0.\*), or using [Cider notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) (10.0.0.1/24)
   :::

### Scanning Schedule {#scanning-schedule}

You can manage when the agent scans your network.

<!-- TO DO: INSERT GIF -->

To change your scanning schedule:

1. Navigate to the desired entity or install
2. Click **Settings > Data Collection Agent**
3. Change how often the agents scans the network for alert by changing the value in the **Check for alert frequency (in minutes)** field
4. Change what time of days meters are uploaded by seleting a time range in the **Upload daily meter read** field
5. Change what day(s) the network will be scanned for newly added devices by checking boxes in the **Scan for new device on days** options
6. Click **Save setting** at the bottom of the screen

## SNMP Settings {#snmp-settings}

You can manage the settings that determine how SNMP data is collected.

<!-- TO DO: INSERT GIF -->

To adjust your SNMP settings:

1. In the **Settings** tab, click **SNMP**
2. Enter the number of times you want to retry pinging an OID by changing the value in **Max retries**
3. Change the amount of time (in milliseconds) to wait before timing out a request by changing the value in **Timout**
4. Change the value for the SNMP community by changing the value in **Community**
5. Change the connection settings and what version of SNMP is being used by chainging the value in **Version**
6. Click **Save setting** at the bottom of the screen

## Billing {#billing}

You can manage when and which page count formats you want to use for billing.

### Meters {#meters}

A meter is a page count collected from a device for a specific format of counter. For example, a printing device might report a total value for both an equivalent format and a squre feet format. Choosing which meter type you want to bill off allows the flexibility to collect all the reportble meter formats from a device, but to choose which format will be used to bill the customer. Because different devices collect different page count formats, Print Tracker gives you the flexibility to specifiy an order of priority.

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-entity-change-billing-preferences.gif)

To configure billing meter preferences by entity:

1. Navigate to the desired entity
   :::tip
   If all your devices use the same meters for billing, set your default preferences at your [top level entity](./30-creating-entities.md#top-level-entity) so that all your child entities and devices will inherit these defaults.
   :::
2. Using the sidebar, click **Admin > Manage entity**
3. Click on the **Settings** tab
4. Open the **Billing preferences** section
5. Enable the **Toggle billing schedule** setting
6. Enter your formats in order of preference in the _Formats_ setting
   :::info Info
   The order in which you enter your preferences matters. For example, if your preference lists **Equivalent** then **Life**, Print Tracker will use the equivalent meter if the device reports it. If the device does not report equivalent meters, Print Tracker will use the life meter.
   :::
7. Enter the counters you want to use for billing and see throughout the Web Admin in the **Counters** setting
8. Click the **Save settings** button at the bottom of the page

### Schedule {#schedule}

The billing schedule is used to set the timing and frequency of when you bill your customers. For example, if Entity A has a billing schedule of "every 1 month on the 15th day of the month", Print Tracker will create a billing period that can be used to calculate all the volume printed at Entity A from January 15 through February 15 then February 15 through March 15, etc.

![](https://www.cdn.printtrackerpro.com/images/documentation/configuring-settings-entity-change-billing-preferences.gif)

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
