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


## In Progress
During the WIGG Web Components meeting, we will assign work and send items to these categories. We will try to group issues that focus on a single component together and assign them to a developer. Priority is given to tasks identified as emergency fixes. 

### Steps:
1. Assign ths issue to a developer or yourself.
2. Move the issue into one of the three categories below. Note if the issue marks a new component, make sure to the "NEW" tag is added.

### Who does this and when?
Usually the person who intends to work on this will update the issue.

### Categories
* **Starting Work**: The person is intending to work on this, but hasn't started the work. 
* **Documenting**: The person is working on documentation. This is mainly for new components and major enhancements. 
* **In Progress**: The person is working on the ticket.


## Release
This signifies that the issue has been fixed and the component is ready to be integrated into the toolkit. If you have multiple issues with the same component, wait until all issues you plan on fixing are fixed before getting to this stage.  

### Steps:
1. Follow [New Component](https://github.com/web-illinois/toolkit-management/blob/main/documentation/NEW_COMPONENT.md) or [Update an existing component](https://github.com/web-illinois/toolkit-management/blob/main/documentation/EXISTING_COMPONENT.md) instructions
2. Create a comment in the issue ([see the toolkit project view](https://github.com/orgs/web-illinois/projects/7/views/1)) with a testing link for the testers. This will most likely be the [Toolkit Builder](https://builder3.toolkit.illinois.edu/index.html) application. 

### Who does this and when?
The person who completes the work on this will move the issue to this category when they create a new production version of the component. 

### Categories
* **Slotted for Next Release**  


## Needs Review
These two categories are for items that are "closed" as far as the Web Components teams is concerned. All issues in these two categories should be closed, and any tickets closed will be automatically added to the *For Product Review* category. See [Product Review Workflow](https://github.com/web-illinois/toolkit-management/blob/main/documentation/PRODUCT_REVIEW_WORKFLOW.md).

### Steps:
1. Copy the ticket title and link to the release notes. 
2. Close the ticket.

### Who does this and when?
The toolkit lead responsible for [integration of the components into the Toolkit](https://github.com/web-illinois/toolkit-management/blob/main/documentation/INTEGRATION.md) at the target monthly release date. 

Closed tickets are automatically moved to "For Product Review". 

### Categories
* **For Product Review**: needs to be validated by the WIGG Product Review team
* **Done**: does not need to be validated by the WIGG Product Review team -- used for internal items


## Emergency Fixes
This contains breaking issues or issues with a high accessibility violation that needs to bypass the regular process. These usually cause the toolkit to increment by a minor version.

### Who does this and when?
The Product Review or toolkit developers can move items here. See [Reporting a Production Issue](https://github.com/web-illinois/toolkit-management/blob/main/documentation/PRODUCTION_ISSUE.md). The person responsible for building the toolkit resolves and moves these back to review for the next iteration. 

### Categories
* **Emergency Fixes**

[Back to the README.md document](README.md)
