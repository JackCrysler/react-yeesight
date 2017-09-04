import React,{Component,PropTypes} from 'react';

const style = {
    
    width: '100%',
    height: '9rem', 
    background: '#f2fcff'
}

class Canvas extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        
    }

    componentDidMount(){
        //console.log(this.refs.drawer)
        let wrap = this.refs.wrap;
        let h = wrap.offsetHeight;
        let w = wrap.offsetWidth;
        let drawer = this.refs.drawer;
        
        drawer.setAttribute('width',w+'px');
        drawer.setAttribute('height',h+'px');

        let ctx = drawer.getContext('2d');
        this.ctx = ctx;
        

        this.drawCoordinate(w,h)
    }

    drawCoordinate(w,h){
        let ctx = this.ctx;
        //绘制坐标系
        ctx.translate(20,h-20);
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(0,25-h);
        ctx.stroke();
        ctx.moveTo(0,0);
        ctx.lineTo(w-30,0);
        ctx.stroke();
    } 



    render(){
        return <p ref="wrap" style={style}>
            <canvas ref='drawer' width="100%" height="100%"></canvas>
            </p>
    }
}

Canvas.propTypes = {
    data:PropTypes.array.isRequired
}

export default Canvas;