import Custom from "./custom.js"

class CustomColor extends Custom{

    state = {
        new_color_selection : '',
        preview_colors : [],
        active_color_selection : 0
    }


    constructor(props){
        super(props)
        this.preview_new_color = this.preview_new_color.bind(this)
        this.active_color_select = this.active_color_select.bind(this)
        this.child.class = "color"
    }

    update_state({newCol, previwCol='#FFFFFF', actCol = -1}){

        const preview_cols = [...(this.state ? this.state.preview_colors : [])]
        if(newCol) preview_cols.push(newCol)

        if(actCol != -1){
        // () => {
            let activeCollor = preview_cols[actCol]
            console.log("Active color: ", activeCollor)
            console.log(this.props.onChange)
            this.props.onChange(this.child.tag, this.child.rule, activeCollor)
        }
        

        this.setState({
            new_color_selection : (previwCol ? previwCol : this.state.new_color_selection),
            preview_colors : preview_cols,
            active_color_selection : actCol
        })
    }

    append_preview_color(color){

        console.log('Append preview color', color)
        this.update_state({newCol : color})
    }


    preview_new_color(color){
        console.log('Update preview color', color)
        this.update_state({previwCol:color})
    }

    active_color_select(index){
        console.log('Setting active Color', index)
        this.update_state({actCol:index})
        
        
    }

    render_custom(){
        return <div>
            <input onChange={e=>this.preview_new_color(e.target.value)} style={{backgroundColor : this.state.new_color_selection}} onKeyDown={(e) => (e.key === 'Enter' ? this.append_preview_color(e.target.value) : '')}/>
            <div className='palet'>
                {this.state.preview_colors.map((v, k)=> <div onClick={(e)=> this.active_color_select(k)} key={k} className={`color ${(k == this.state.active_color_selection ? 'active' : '' ) }`}><div style={{backgroundColor : v}}></div> </div>)}
            </div>
            </div>
        
    }

    componentDidMount(){
        this.setState({
            new_color_selection : "",
            preview_colors : this.child.colors.map((v) => v),
            active_color_selection : -1
        })
    }
}

export default CustomColor