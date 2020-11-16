import CustomColor from './customColor.js'
import CustomFont from './customFont.js'
import Toggle from './toggle.js'

let groups = 0

class CustomGroup extends React.Component{

    state = {
        styleList : {}
    }

	constructor(props){
        super(props)
        this.body_id = `${groups++}_group_body`

        
        this.generate = this.props.gen ? this.props.gen : []

        this.fontlist = {}
        this.handleChange = this.handleChange.bind(this)
       
    }

    
    handleChange(tag, rule, attr){
        console.log(tag, {rule, attr})
        let styles = {}
        styles[tag] = [attr]
        if(!this.state.styleList[tag]){
            this.state.styleList[tag] = {}
            this.state.styleList[tag][rule] = attr
        }
        else
            this.state.styleList[tag][rule] = attr
        

        this.setState(this.state)
        var css =""
        css = Object.keys(this.state.styleList).map((k) => {
            let rules = Object.keys(this.state.styleList[k]).map(n=>{
                return `;${n} : ${this.state.styleList[k][n]};\n`
            })
            return `${k}{${rules}}\n`
        })
        var style = document.getElementById('styles_'+this.body_id)
        if(!style){
            style = document.createElement('style')
            style.setAttribute('id', 'styles_'+this.body_id)
            document.head.appendChild(style)
        }
        style.innerHTML = ""
        css.map((v) => style.innerHTML += v)
        
    }
    


    render(){
        const childrenWithProps = React.Children.map(this.props.children, (index, child) => {
            // checking isValidElement is the safe way and avoids a typescript error too
            const props = {  };
            if (React.isValidElement(child)) {
                return React.cloneElement(child, props);
            }
            return child;
        });

        const customs = this.props.customs.map(((child, index)=>{
            // console.log(`index: ${index}, child: `, child)
            switch(child.type){
                case 'font':
                    return <CustomFont key={index} id={child.id} title={child.title} fonts={child.fonts} child={child} onChange={this.handleChange}/>
                case 'group':
                    return <CustomGroup key={index} title={child.title} id={child.id} customs={child.children} child={child}/>
                case 'color':
                    return <CustomColor key={index} title={child.title} id={child.id} child={child} onChange={this.handleChange}></CustomColor>
                default:
                    return <span key={index}>No customs</span>
            }
        }).bind(this))


        return <div id={this.props.id} className='custom group'>
                <h2>{this.props.title}<Toggle target={this.body_id} icon='fas fa-edit'/></h2>
                <div className='custom group toggle body vert' id={this.body_id}>
                    {childrenWithProps}
                    {customs}
                </div>
            </div>;
    }

    attatch_style(name, sheet){
        this[`style_${name}`] = sheet
    }

	componentDidMount() {
        // const style = document.createElement('style')

        // style.setAttribute("id", `style_${this.id}`)
        // let select = document.querySelector(`#style_${this.id}`)
        // if(!select){
        //     document.head.appendChild(style)
        //     this.style = style
        // }else{
        //     this.style = select
        // }

	}


}


export default CustomGroup