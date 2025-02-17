# Production Issue Reporting

As much as we hate it, production issues happen. The web components are in an ecosystem and changes happen to browsers and operating systems that can impact our web components. 

If an issue is found, follow the steps below:

1. Create a GitHub issue in the repository that contains the web component. 
2. Assign the GitHub issue to the "Todo" category in the https://github.com/orgs/web-illinois/projects/7 Github project. 
3. Post a message to the [public WIGG Web Component channel](https://teams.microsoft.com/l/channel/19%3A734981213bce44f2a0f31e98a560fe08%40thread.tacv2/Web%20Components?groupId=7ecdbcb2-4a6c-438d-828c-70287b84f487&tenantId=44467e6f-462c-4ea2-823f-7800de5434e3). Tag the group Web Components and include a link to the GitHub issue. 
4. In the main branch of the repository that contains the web component, update the *notes* json section under the affected version under */builder/versions*. Include a link to the GitHub issue.
5. In the [deploy_release action for the Toolkit Builder 3](https://github.com/web-illinois/toolkit-builder-3/actions/workflows/deploy_release.yml), click the *Run Workflow* button to deploy the Toolkit Builder 3 with the changes you made. If you forget this step, it will run overnight. 

Please keep the issue up-to-date and include any workarounds you have on the issue. 

[Back to the README.md document](README.md)