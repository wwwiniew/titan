# Building Applications

Clone this repo to your local disk and then use that to create a publicly visible git repo on github.com (like on Day 3 homework).
The application is written in JavaScript, using the Node.js runtime. You should build and deploy the application to an OpenShift cluster according to the following requirements:

* Use project assigned to you on previous execises
* The application name for OpenShift is titan. 
* The application should be accessible from outside
* Create a simple python script as follows and place it into the root directory of the git repository.  Commit and push the file to git.
```python
# This program prints Hello, world!
print('Hello, world!')
```
* Make changes to OpenShift so that the python script created in the previous step is invoked every time the application is built as a post-commit build hook. Build the application and send the screenshot of the build log showing the python script output.
