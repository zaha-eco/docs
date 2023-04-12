---
slug: reports
sidebar_position: 80
---

# Custom Reports
Having access to the right data can help businesses find answers to important questions and make better decisions. Print Tracker's custom reports lets users explore their data in a way that suits their needs by allowing them to create and save personalized reports.

## Overview
Custom reports supports a variety of report types, such as device, install, and meter reports, making it versatile for different types of business questions. This flexibility allows you to focus on specific aspects of your operations. To build and customize these reports, the feature utilizes [SQLite](#structured-query-language-sql), a variant of SQL that is lightweight and efficient. By leveraging SQLite, you can easily manage and manipulate their data, creating tailored reports that help you better understand their business and make data-driven decisions.

## Creating Reports
![](../images/custom-reports-creating-report.gif)

To create a custom report:
1. Using the sidebar, click **Insights > Reports**
2. Click **New report**
3. Enter a name for the report
4. Click **Confirm**
5. Your new report has been created and will have appeared in the list of custom reports
6. Click on your new report to open it

### Report Configuration
![img.png](../images/custom-reports-report-configuration.png)

You can configure a report using the report editor. The report editor allows you to:
* Change the name and description of the report
* Change the report type
* View the report's schema (the columns that fields that are available for use in the report)
* Change the SQL query used to generate the report
* Run the report to view a sample of the report
* Export the report to a CSV file

For more information on the report types that are available, see [Report Types](#report-types).

### Schema Viewer
![](../images/custom-reports-table-schema.png)

Each [report type](#report-types) has its own schema. The schema determines which columns are available for use in your custom report. Each column has a name and a particular data type. For example, to utilize the device's firmware in a report, you could reference the `firmware` column. The data type of this column is [`varchar`](https://en.wikipedia.org/wiki/Varchar) which is a string of characters. On the other hand the `created_timestamp` column is of time `datetime` indicating that we can perform custom date-related calculations on this column, such as calculating the number of days since this device was created.

### Query Editor
![](../images/custom-reports-query-editor.png)

The query editor is where you will build, customize, and test your reports. Each [report type](#report-types) comes with a default query that you can use as a starting point. You can also use the schema viewer to help you build your query. Queries are written in SQL using the [SQLite](#structured-query-language-sql) dialect. 


### Query Results
![](../images/custom-reports-query-results.png)

Whenever you click the **Run** button in the [query editor](#query-editor), the results will be displayed below the editor. The results are only a sample of your data which allows you to quickly test your reports on a small subset of your data without having to wait for the entire report to run.

:::info No results?
When adding `WHERE` clauses to your query, you might find that no results are returned when you test your query. This is because when testing the report by clicking **Run**, the query is only run on a sample of your data, and there's no garuntee that the rows in the sample will also match the `WHERE` clause. For these types of queries, you can use the **Export** button to export the entire report to a CSV file and then open the file in a spreadsheet application to view the results.
:::

## Editing Reports

## Scheduling Reports

### Billing Period Report

## Report Types

### Device
### Install
### Current Meter
### Volume Analysis
### Billing Period
### Estimated Depletion
### Monthly Volume
### Supplies

## Caveats

## Structured Query Language (SQL)
Print Tracker utilizes a variant of SQL called [SQLite](https://www.sqlite.org/lang.html).