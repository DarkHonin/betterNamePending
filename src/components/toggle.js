class Toggle extends React.Component{
    constructor(props){
        super(props)
        
        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        document.getElementById(this.props.target).classList.toggle('open')
    }

    render(){
        return <div className='toggle btn' onClick={this.toggle} id={this.props.id}>
            <i className={this.props.icon} />
        </div>
    }
}

export default Toggle