---
slug: remote-technician
sidebar_position: 90
---

# Remote Technician
Remote Technician allows remote access to a device's embedded webserver from anywhere. It does not require any special network or firewall configuration and works out of the box. Remote Technician allows users to restart the device, upgrade firmware, view the front-panel, change settings, and more [^1].

:::info
Wondering about security? Check out the [Remote Technician Security Overview](../security/remote-technician.md).
:::

## Opening a Session {#opening-a-session}
![](https://www.cdn.printtrackerpro.com/images/documentation/remote-technician-start.gif)

To open a Remote Technician session:
1. Using the sidebar, click **Devices > View devices**
2. Find the device you want to access in the list of devices
3. Click on the **Remote Technician** tab
4. Click **Open Device Webpage**

A new browser tab will appear. It may take a few seconds to connect to the device. Once connected, you will be able to access the device's embedded webserver.

:::caution Note
Remote Technician will not be able to connect to the device if:
* The device is turned off
* The device is not connected to the local network
* The data collection agent is not on the same network as the device (for example, if the data collection agent is on a laptop, and the laptop is taken home)
:::

## Restricting Access {#restricting-access}
For sensitive customers, you can restrict access to Remote Technician by user, by install, or even by entity. When you restrict access by install, or entity, even users that have the Remote Technician User role will not be able to access the device.

### By User {#by-user}
![](https://www.cdn.printtrackerpro.com/images/documentation/remote-technician-restrict-access-user.gif)

When you restrict access to Remote Technician at the user level, you are restricting the ability for that user to access any device through Remote Technician. This is the easiest way to prevent unauthorized personal from using Remote Technician without preventing other authorized users from using it.

To prevent a user from using Remote Technician:
1. Using the sidebar, click **Admin > Manage users**
2. Find the user you want to restrict
3. Click the **Pencil** icon to edit the user
4. Click on the **Permissions** tab
5. Deselect the **Remote Technician User** role

### By Entity {#by-entity}
![](https://www.cdn.printtrackerpro.com/images/documentation/remote-technician-restrict-access-entity.gif)

When you restrict access to Remote Technician at the entity level, you are restricting access to all devices that underneath that entity. This is the recommended way to restrict access to Remote Technician across an entire site.

To prevent users from using Remote Technician for a specific entity and its children:
1. Ensure that the selected entity is the entity that you'd like to restrict
2. Using the sidebar, click **Admin > Manage entity**
3. Click the **Settings** tab
4. Expand the **Remote Technician** section
5. Click on the **Enabled** toggle to disable Remote Technician

### By Install {#by-install}
![](https://www.cdn.printtrackerpro.com/images/documentation/remote-technician-restrict-access-install.gif)

When you restrict access to Remote Technician at the install level, you are restricting access to all devices that are managed by that install[^2]. In most cases, you should restrict access to Remote Technician at the [entity level](#by-entity), however there may be some cases where you want to restrict access to a specific install (such as due to antivirus, or system network policy configurations on the specific install).

To prevent users from using Remote Technician for a specific install:
1. Using the sidebar, click **Installs > View installs**
2. Click the install you want to restrict access through in the list of installs
3. Click the **Settings** tab
4. Expand the **Remote Technician** section
5. Click on the **Enabled** toggle to disable Remote Technician

## Compatibility {#compatibility}
Remote Technician is compatible with nearly all devices regardless of manufacturer, however for some devices, not all features are guaranteed to work. The following devices are known to have compatibility issues:

| Device                                     | Issue                                                                                                                                                              |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Canon iR-ADV C5240<br/> Canon iR-ADV C5850 | Authentication does not work. If the device has some pages that are protected by a username and password, you may not be able login or access the protected pages. |

[^1]: Remote Technician only allows remote access to a device's embedded webserver. Only operations that can be performed from the device's webpage can be performed. These operations are supported on some devices, but may not be supported by all devices.
[^2]: If there are multiple installs tracking the same device and Remote Technician is not disabled on all of the installs, the device will still be accessible via Remote Technician.