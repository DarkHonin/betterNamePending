class CustomFont extends React.Component{

    constructor(props){
        super(props)
        this.update_font = this.update_font.bind(this)
    }

    update_font(e){
        this.setState({
            font : e,
            fonts : this.state.fonts
        })
        const font = this.state.fonts[e]
        this.props.onChange(this.props.child.tag, `font-family`, font)
        // debugStyles.innerHTML = `.title{font-family: ${this.fonts.fonts[this.state.font]}}`
    }

    render(){
        return <div className='custom font' id={this.props.id}>
            <span>{this.props.title}</span>
            <div className='preview'>
                <select onChange={ e=> this.update_font(e.target.value)}>
                {this.font_options}
                </select>
            </div>
        </div>
    }



    componentDidMount(){

        let getFontThings = (() => {
            const font_options = this.props.child.fonts.map((value, index) => <option className={`font_${index}`} key={index} value={index}>{value}</option>)
            const font_refrence = this.props.child.fonts.map((v) => v)
            
            this.font_options = font_options
            this.font_refrence = font_refrence
                
            this.setState({
                font : 0,
                fonts : font_refrence
            })
        }).bind(this)

        new Promise(getFontThings)
    }
}

export default CustomFont