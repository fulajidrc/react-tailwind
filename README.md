# react-tailwindcss-ts (React Tailwindcss Typescript)

## Introduction
    Learn how to include easily React tailwindcss in your project.

## Installation
    npm install react-tailwindcss-ts


## Importing Components
    import { RTButton } from "react-tailwindcss-ts";

# Components 
## Buttons
     
        import { RTButton } from "react-tailwindcss-ts";

        function TypesExample() {
            return (
                <>
                    <RTButton name="Submit" type={'submit'} />
                </>
            );
        }

        export default TypesExample;
    
## Button API

| Name                                        | Type                    | Default                             | Description                                          |
| ------------------------------------------- |:-----------------------:| :----------------------------------:| :----------------------------------------------------|
| className                                   | string                  | `bg-indigo-700 hover:bg-indigo-900` |  Tailwindcss class for button color                  |
| type                                        | button | submit | reset | button                              |  Type of button,Example: button, submit, reset       |
| name<sup style="color:red;">*Required</sup> | string                  |                                     |  Name of button                                      |
| buttonType                                  | sm | md | lg            | md                                  |  Size of button, Example: sm,md,lg                   |
| onClick                                     | function                |                                     | Callback fired when a button is pressed              |
| processing                                  | boolean                 | false                               | For Proccess is running or not                       |