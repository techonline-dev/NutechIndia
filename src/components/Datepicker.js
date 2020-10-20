import React, { Component } from 'react';

export default class Datepicker extends Component {
    input = React.createRef()
    componentDidMount() {
        const picker = window.jQuery(`[data-toggle="datepicker${this.props.id}"]`);
        picker.datepicker({ format: 'dd/MM/yyyy' });
        picker.on('pick.datepicker', this.props.dateChange);
    }
    onBlur = e =>{
        const picker = window.jQuery(`[data-toggle="datepicker${this.props.id}"]`);
        // if input is invalid, date refers to today's date
        const date=picker.datepicker('parseDate', e.target.value);
        const dateStr = picker.datepicker('formatDate', date);
        this.input.current.value=dateStr;
        this.props.dateChange({date});        
    }
    render() {
        return (
           <>
                <input ref={this.input} type="text" onBlur={this.onBlur} pattern="\d{2}/\d{2}/\d{4}" title="Age should be more than 40 years" className="form-control docs-date" placeholder={this.props.placeholder} name={this.props.name} data-toggle={'datepicker'+this.props.id} required />
                <div data-toggle={'datepicker'+this.props.id}></div>
           </>
        )
    }
}
