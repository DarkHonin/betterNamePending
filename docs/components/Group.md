# Group
Prividing the ability to nest components together it also serves as a 'container' for a selected css ruleset.

It is implemented as:
    

        <Group child={jsonChunk} />

## or like with children defined here

        <Group child={jsonChunk} >
            ...
                More components here
            ...
        </Group>

## Wheres the css you ask?
Its under the hood still. The group itterates and bind ***onChange*** to ***Group::handleChange***.

    Class Group extends Component

        function handleChange(tag, rule, attr); 
            // Tag -> 'The css selection', Rule -> 'the css rule', attr -> 'The value for the rule'

Any terminating custom child components will deal with css controls through this mechanisim. 

___It sould be noted___ this handleChange function cant deal with arguments such as ```(..., {a, b})```, the latter part always becomes undefined

***[index](../index.md)***