# Toggle Component
This component toggles the class value 'open' on a spesific element.
With a small cosmetic bonus of allowing a '[font awesome]()' icon

    <Toggle target='idOf' icon='fa fa-edit' />

    ...

    <container>
        <togglable id='idOf' />
    </container>

Specified by the element id : just 'something'


## Class Toggle
---
###  Props:
- target: the Id of the element to toggle on click
- icon:   the icon for the toggle button
---
    class Toggle extends React.Component{
        constructor(props){
            super(props)

            // Binds toggle event to the current instance 
            // it seems it forces the current instance as
            // the 'this' variable. These functions may lose
            // variables sometimes        
            this.toggle = this.toggle.bind(this)
        }

        // Toggles the class 'open' within its specified target
        toggle(){
            document.getElementById(this.props.target).classList.toggle('open')
        }

        render(){
            return <div className='toggle btn' onClick={this.toggle} id={this.props.id}>
                <i className={this.props.icon} />
            </div>
        }
    }