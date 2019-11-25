# Component Based UI

- Previously used template (HTML), and used a combination of server side and client code to render different parts of that template.
- Component based UI takes a chunk of functionality and defines it such that it can be used anywhere in a project no matter what other technologies or processes occur around it.
- Combining concerns into a discreet package.
- React is our component library / framework, which creates standalone UI components.
- Our UI's need 4 thigns to work properly:
  - State - What data does our UI need
  - Behavior - How are users interacting with the UI
  - Events - What browser / API specific things are occuring in our UI
  - Template - What layout does our UI use to display content?

- npm install react-scripts node-sass react react-dom
- add a start script: "react-scripts start"
- all of your React code goes inside "src"
- otherwise it goes in "public"