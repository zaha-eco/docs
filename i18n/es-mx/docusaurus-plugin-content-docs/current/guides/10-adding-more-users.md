---
sidebar_position: 10
---

# Adding More Users

Creating and managing users allows you to grant and control access to other users depending on the role you need them to have within your organization(s).

## Creating a User {#creating-a-user}

To create a new user:

1. In the side navigation bar, click on **Admin > Manage users**
2. On the **Manage users** page, click **Add user**
3. On the **Contact info** tab, enter the required user information
4. Click **Next**
5. On the **Permissions** tab, select the Role or Roles this user will have
6. Unless you know the entity where you want to add this new user to, leave the **Parent entity** as the default value
7. Click **Create user**

After a new user has been successfully completed, the new user will receive an email with instructions on how to set their own password the first time they login.

## Changing Roles {#changing-roles}

![](https://www.cdn.printtrackerpro.com/images/documentation/manage-users-change-roles.gif)
To change a user's role or add an additional role to a user:

1. On the side navigation bar, click **Admin > Manage users**
2. Click the **Edit** icon of the user you want to move
3. Click the **Permissions** tab
4. In the **Role** input, select or unselect multiple roles as needed
5. Click **Save changes**

## Entity Assignment {#entity-assignment}

A user has access to the entity where the user is assigned (called the parent entity) and any of the chlidren entites of the parent entity.

### Moving Users Between Entities {#moving-users-between-entities}

![](https://www.cdn.printtrackerpro.com/images/documentation/manage-users-move-user.gif)
You can move a user to any entity you have access to view. To move a user:

1. On the side navigation bar, click **Admin > Manage users**
2. Click the **Edit** icon of the user you want to move
3. Click the **Permissions** tab
4. In the **Parent entity** input, begin typing the name of the entity you want to move the user to
5. Click **Save changes**

## Roles and Permissions {#roles-and-permissions}

| Permission                                | Master Admin | Admin | Buyer | User | Remote Technician Configurer | Remote Technician User |
| ----------------------------------------- | ------------ | ----- | ----- | ---- | ---------------------------- | ---------------------- |
| View user details                         | X            | X     | X     | X    |                              |                        |
| Download Print Tracker installer          | X            | X     | X     | X    |                              |                        |
| View alerts                               | X            | X     | X     | X    |                              |                        |
| View devices                              | X            | X     | X     | X    |                              |                        |
| Include children toggle on "View devices" | X            | X     | X     | X    |                              |                        |
| View new devices                          | X            | X     | X     |      |                              |                        |
| Bulk actions on "View devices"            | X            | X     | X     |      |                              |                        |
| Bulk update alert status                  | X            | X     | X     |      |                              |                        |
| Update alert status                       | X            | X     | X     |      |                              |                        |
| Add devices                               | X            | X     | X     |      |                              |                        |
| Update or delete users                    | X            | X     |       |      |                              |                        |
| Create or delete entity                   | X            | X     |       |      |                              |                        |
| Edit entity settings                      | X            | X     |       |      |                              |                        |
| Manage entity                             | X            | X     |       |      |                              |                        |
| Create new user                           | X            | X     |       |      |                              |                        |
| Update device settings                    | X            | X     |       |      |                              |                        |
| Change device tracking status             | X            | X     |       |      |                              |                        |
| Send Print Tracker deployment email       | X            | X     |       |      |                              |                        |
| Edit install settings                     | X            | X     |       |      |                              |                        |
| Request meter reads                       | X            | X     |       |      |                              |                        |
| View jobs run by installs                 | X            | X     |       |      |                              |                        |
| Bulk import devices                       | X            | X     |       |      |                              |                        |
| View meter history                        | X            | X     |       |      |                              |                        |
| Create and manage reports                 | X            | X     |       |      |                              |                        |
| View reports                              | X            | X     |       |      |                              |                        |
| Move entity in hierarchy                  | X            |       |       |      |                              |                        |
| Remove jobs from the jobs list            | X            |       |       |      |                              |                        |
| Configure Remote Technician               | X            |       |       |      | X                            |                        |
| Use Remote Technician                     | X            |       |       |      |                              | X                      |
