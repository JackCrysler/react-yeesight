import React,{Component} from 'react';
import './politics.css';
class List extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return <h2>这里是时政页</h2>
    }
}
export default List