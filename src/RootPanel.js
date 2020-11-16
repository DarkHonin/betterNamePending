// const { faGrinTongueSquint } = require("@fortawesome/free-solid-svg-icons");

import Toggle from './components/toggle.js'
import CustomGroup from './components/customGroup.js'

const json_fetch = (url) => fetch(url, {headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }}).then(e => Object(e.json()), ((Err) => console.log(Err)))


const config = json_fetch("./config.json");
config.then(e => {const DEBUG_STRUCT = e;return DEBUG_STRUCT;})

class RootPanel extends React.Component{

    state = {
        components :[
        ]
    }

	constructor(props){
        super({...props, id : "headgroup", title:"Custom"})
    }

    


    render(){
        const customs = this.state.components.map((child, index)=>{
            switch(child.type){
                case 'group':
                    return <CustomGroup key={index} title={child.title} id={child.id} customs={child.children} child={child}/>
            }
        })
        return <div id='debug_panel'>
            <link rel='stylesheet' href='/stylesheets/debug.css' />
            <link rel='stylesheet' href='/stylesheets/toggle.css' />
            <link rel='stylesheet' href='/stylesheets/custom.css' />

            <div id='debugMain' className='main toggle body'>
                <div id='littleMenu'></div>
                {customs ? customs : <span>No customs</span>}
            </div>
            <Toggle target='debugMain' icon='fas fa-edit' id='mainToggle'/>
        </div>
    }

	componentDidMount() {
        config.then(json => this.setState({...json}))
	}


}

/** Mounts the app to the context */

ReactDOM.render(
	<RootPanel/>,
	document.querySelector('#Root')
  );