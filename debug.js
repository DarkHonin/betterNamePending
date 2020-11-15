// const { faGrinTongueSquint } = require("@fortawesome/free-solid-svg-icons");

var c = 0;




import Toggle from './debuger/toggle.js'
import CustomGroup from './debuger/customGroup.js'

const json_fetch = (url) => fetch(url, {headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }}).then(e => Object(e.json()), ((Err) => console.log(Err)))


const debugPanel = json_fetch("/javascript/assets/debug.json");
debugPanel.then(e => {const DEBUG_STRUCT = e;return DEBUG_STRUCT;})

class Debug extends React.Component{

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
            <link rel='stylesheet' href='/stylesheets/debug/debug.css' />
            <link rel='stylesheet' href='/stylesheets/debug/toggle.css' />
            <link rel='stylesheet' href='/stylesheets/debug/custom.css' />

            <div id='debugMain' className='main toggle body'>
                <div id='littleMenu'></div>
                {customs ? customs : <span>No customs</span>}
            </div>
            <Toggle target='debugMain' icon='fas fa-edit' id='mainToggle'/>
        </div>
    }

	componentDidMount() {
        debugPanel.then(json => this.setState({...json}))
	}


}

/** Mounts the app to the context */

ReactDOM.render(
	<Debug/>,
	document.querySelector('#debug')
  );