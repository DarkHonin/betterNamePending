import Toggle from '../toggle.js'

var customs = 0

class Custom extends React.Component{
    constructor(props){
        super(props)
        this.child = (this.props.child ? this.props.child : {
            class : "",
            id : "",
            title : "",
            type : "",
            fonts : [],
            tag : "",
            rule : "",
            children : [],
            colors : [],
        })
        this.props.id = (this.props.id ? this.props.id : `'custom_${customs++}'`)
    }
}

export default Custom