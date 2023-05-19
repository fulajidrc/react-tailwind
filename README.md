# React Tailwindcss Components Typescript

## Introduction
    Learn how to include easily React tailwindcss in your project.

## Installation
    npm install react-tailwindcss-ts


## Importing Components
    import { RTButton } from "react-tailwindcss-ts";

# Components 
##  Button Example
     
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

| Name                                        | Type                    | Default                             | Description                                                                                                       |
| ------------------------------------------- |:-----------------------:| :----------------------------------:| :-----------------------------------------------------------------------------------------------------------------|
| name<sup style="color:red;">*Required</sup> | string                  |                                     |  Name of button                                                                                                   |
| className                                   | string                  | `bg-indigo-700 hover:bg-indigo-900` |  Tailwindcss class for button color, <br />Example:`bg-red-700 hover:bg-red-900`,`bg-green-700 hover:bg-green-900`|
| type                                        | button | submit | reset | button                              |  Type of button,Example: button, submit, reset                                                                    |
| buttonType                                  | sm | md | lg            | md                                  |  Size of button, Example: sm,md,lg                                                                                |
| onClick                                     | function                |                                     | Callback fired when a button is pressed                                                                           |
| processing                                  | boolean                 | false                               | For Proccess is running or not                                                                                    |


## Input Example
     
        import { RTInput } from "react-tailwindcss-ts";

        function TypesExample() {
            return (
                <>
                    <RTInput name="input" label="Password" type={'text'}  placeholder="Password"/>
                </>
            );
        }

        export default TypesExample;

## Input API

| Name                                        | Type                                                | Default   | Description                             |
| ------------------------------------------- |:---------------------------------------------------:| :--------:| :---------------------------------------|
| name<sup style='color:red;'>*Required</sup> | string                                              |           |  Name of input field                    |
| className                                   | string                                              |           |  For Extra Tailwindcss class            |
| label                                       | string                                              |           |  Lable of Input                         |
| type                                        | text | password | email | date | datetime | number  | text      |  Type of input                          |
| placeholder                                 | string                                              |           |  Placeholder of Input                   |
| onChange                                    | function                                            |           |  Callback fired when a input is changed |
| id                                          | string                                              |           |  Id of Input                            |
| formik                                      | boolean                                             | false     |  it's use for `Formik` validation field |


# Other Components Comming Soon