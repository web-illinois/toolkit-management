# Project Workflow

## Introduction

The project for the Toolkit is at https://github.com/orgs/web-illinois/projects/7/views/1 -- this manages all of our tickets for our various components. All tickets for any of our component libraries are funneled into this project. 

This document lists the workflow for a typical issue, and who is responsible for moving it from one category to another. 

## Pending Work
These categories are all the pending items from the various components. Issues that designate a new component are put in the toolkit-management and tagged with the "NEW" tag. 

### Who does this and when?
These are automatically added to the project. 

### Categories
* **Review - AutoAdded**: Issues added to various components are going to be in this bucket. 
* **QC Bugs**: Quality Control is instructed to use this category when creating bugs. These should be given higher priority because they may be causing accessibility issues. 
* **No Status**: These are added using dependabot and have lower priority. 

## Working On
During the WIGG Web Components meeting, we will assign work and send items to these categories. We will try to group issues that focus on a single component together and assign them to a developer. 

### Who does this and when?
The person who intends to work on this will move the issue to these categories.

### Categories
* **Starting Work**: The person is intending to work on this, but hasn't started the work. 
* **Documenting**: The person is working on documentation. This is mainly for new components and major enhancements. 
* **In Progress**: The person is working on the ticket. 

## Release
This signifies that the issue has been fixed and the component is ready to be integrated into the toolkit. If you have multiple issues with the same component, wait until all issues you plan on fixing are fixed before getting to this stage. Before you get to this stage, perform the following steps:
1. Create a new production version of the component using the "releases" area in GitHub. This will deploy to the /latest build. 
2. In the issue, create a comment with a testing link for the testers. This will most likely be the Toolkit Builder application. 

### Who does this and when?
The person who completes the work on this will move the issue to this category when they create a new production version of the component. 

### Categories
* **Slotted for Next Release**

## Needs Review
These two categories are for items that are "closed" as far as the Web Components teams is concerned. All issues in these two categories should be closed, and any tickets closed will be automatically added to the *For Product Review* category. Before you get to this stage, perform the following steps:
1. Copy the ticket title and link to the release notes. 
2. Close the ticket.

### Who does this and when?
The person responsible for building the Toolkit when the toolkit is built. 

### Categories
* **For Product Review**: needs to be validated by the WIGG Product Review team
* **Done**: does not need to be validated by the WIGG Product Review team -- used for internal items

## Product Review Notes
Product Review is going to review items in the *For Product Review* category. If the component passes, they will move the issue to *Done*. 

If the component has problems, they will document the problem in the issue, re-open the issue, and move it to one of two categories:
* If this is an urgent issue, it will go into the *Emergency Fix* category.
* If this is a non-urgent issue, it will go into the *QC Bugs* category.

[Back to the README.md document](README.md)
