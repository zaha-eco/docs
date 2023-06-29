---
slug: entities
sidebar_position: 30
---

# Creating and Managing Entities

An entity is a container used for organizing other entities, installs, and devices for easier management and navigation. An entity functions much like a "Folder" does within the Windows folder system.

Entities can contain any number of other entities, installs, and devices and they can be nested within other entities to create a hierarchical organization structure. Each entity should be identified by a unique name, and its contents can be accessed and manipulated through the **Entity Selector** tool or the **Search entities** search bar at the top of the page.

You can create, rename, move, copy, delete, and modify the contents of entities to organize and manage their contents efficiently. Entities are essential to effectively manage organized and to facilitate easy access and sharing of data.

## Hierarchy {#hierarchy}

Entities and their contents are organized in a parent-child relationship, where a parent entity can contain one or more child entities, and each child entity can, in turn, contain additional child entities, installs or devices. This hierarchy of entities can be thought of like a directory tree or file system tree. Print Tracker supports an unlimited number of levels of hierarchy.

Each entity in the directory tree should have a unique name, and its location is specified by the full path from the top level directory to the entity. An entity's hierarchy can be seen in the bread crumb and each level of hierarchy is denoted with the "/" between entity names.

The entity system uses a hierarchical structure to facilitate organization, making it easier for you to locate and manage your printer fleet. It also enables you to set permissions and access levels on an entity-by-entity basis, providing enhanced security and control.

### Top Level Entity {#top-level-entity}

The top level entity contains all child entities, installs, and devices a particular user can access. Each user must have exactly one top level entity.

### Parent Entity {#parent-entity}

A parent entity describes whichever entity is directly above the active entity, or the entity you have currently selected.

### Child Entity {#child-entity}

A child entity is entity that is contained within another entity in the Print Tracker hierarchy system and can be located at any level below a parent folder in the hierarchy. A child entity can contain its own child entities, installs, and devices.

### Active Entity {#active-entity}

The active entity is the entity you have currently selected. In order to configure or manage an entity's settings, it must first be navigated to using the **Entity Selector** tool or the **Search entities** search bar at the top of the page.

## Organization Strategies {#organization-strategies}

The best strategy for organizing the hierarchy within the Print Tracker entity system will depend on your specific needs and preferences. However, there are some general guidelines that can help create an effective and efficient hierarchy structure:

1. Keep it simple and logical: Use clear and concise entity names that accurately describe the contents.

2. Use entities to manage logical divisions of access: Consider how you want to control visibility, roles and permission, and access of other users. You might use entites to delineate between georaphical divisions of an organization (eg. North Division, and South Division) or personnel limits within your organization (eg John Doe Team, Mary Doe Team).

3. Create a consistent naming convention: Use a consistent naming convention for entities, and install, so they are easy to locate and identify.

4. Avoid creating too many levels: Try to keep the entity structure as flat as possible and avoid creating too many levels of child-entities. This can make it difficult to navigate the folder structure and find specific entities.

Overall, an effective entity structure should be easy to navigate, organized logically, and allow for efficient entity management, while also taking into account user access and management.

### Physical Locations {#physical-locations}

### User Access Scope {#user-access-scope}

A user can only access entities and their contents at or below their own top level entity.

## Creating an Entity {#creating-an-entity}

<!-- TO DO: INSERT GIF -->

To create a new entity:

1. Navigate to the entity you want to become the new entity's parent entity
2. Clik on the down arrow next to name of the active entity in the upper left corner of the screen
3. Click **Add entity**
4. Enter the new entity's name in the **Entity name** field
5. Add any additional information you want to associate with the new entity in the options fields
6. Click **Save and edit settings**

## Deleting an Entity {#deleting-an-entity}

<!-- TO DO: INSERT GIF -->

To delete an entity:

1. Navigate to the entity you want to delete
2. On the right bar, click **Admin > Manage entity**
3. Click **Settings**
4. Click **Delete entity** at the bottom of the page
5. Follow the instructions to confirm you want to delete the entity
   :::danger
   Deleting an entity will also delete **all** of its descendants and their contents, including child entities, installs, users, devices, and device data. This action cannot be undone.
   :::

## Moving an Entity {#moving-an-entity}

If you have the proper role and permissions, you can move any entity to become a child entity of any other entity at or below your top level entity level.

To move an entity:

1. In the right bar, click **Admin > Move Entities**
2. Begin typing the name of the entity you want to move in the **Move** input field and select the name of the entity you want to move when it appears in the drop down list
3. Begin typing the name of the entity you want to move the entity to in the **to** input field and select the name of the entity you want to become the new parent entity when it appears in the drop down list
4. Click **Move entity**
5. Confim the action if you want to continue
