# Scriptable Site editor

---
# This is still a proof of consept
---
The remaining meatballs after a weeks worth of spaghetti

## Synopsis
This an attempt at building a portable, custom frontend editing tool.
At this point in time the script generates everying based on a json file, providing dynamic css for the tools.

Eventualy I want to be able to save a configuration and switch between them.

It is my hope for this project to be easily understood and devloped further by anyone with the desire to do so. Any feedback would be welcome.

## Buglist
 - There is an extra comma in the generated css :/

## Usage
### config.json
    {
        'components' : [
            type : String ['group', 'font', 'color', ... ],
            title : String ('Title text to use for the component'),
            id : ElementID,
            tag : Element css attachment, eg. '.someClass, #someSpesificID',
            fonts : type is 'fonts' ? String[ ... Fonts ...] : null,
            colors : type is 'color' ? String[ ... Colors ...] : null,
            "rule" : "background-color/?color",  // Loose thread?  # Its all Ive tested with
            "children" : type is 'group' [... components ...]
        ]
    }

Check out the example [config.json](./config.json)

## More docs here : [>DOCS<](./docs/index.md)
---

# Mad ideas 
- Description based, AI generated elements.