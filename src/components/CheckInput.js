import { render } from "@testing-library/react";
import React from "react";

const MAX_TEXT_LENGTH = 15;
class CheckInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: '',
            message: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
        
    }

handleInputChange(e) {
    this.setState({
        content: e.target.value
    })
}
handleOnKeyPress(e) {
    if(e.charCode === 13){
        let mesage = '';
        const {content} = this.state;
        if(content.length > 0 && content.length <= MAX_TEXT_LENGTH){
            mesage = 'Nội dung hợp lệ.'

        }else if(content.length > MAX_TEXT_LENGTH){
            mesage = 'Nội dung quá dài, vui loàn nhập lại';
        }
        this.setState({
            mesage,
        })
    }
}
render(){
    const {content} = this.state;
    return(
        <div>
            <h3>Nội dung</h3>
            <input
            value={content}
            onChange={this.handleInputChange}
            onKeyPress={this.handleOnKeyPress}
            name="name"
            placeholder="Nhập nội dung"
            />
            {this.state.mesage && (
                <div>
                    <h3>{this.state.mesage}</h3>
                </div>
            )}
        </div>
    )
}
}


export default CheckInput;