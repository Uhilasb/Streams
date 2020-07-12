import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { createStream} from '../../actions';

class  StreamForm extends React.Component{
    renderErrors(meta){
        if(meta.error && meta.touched){
            return(
            <div className="ui error message">
                <div className="header">{meta.error}</div>
            </div>
            );
        }
    }

    renderInput = (formProps) =>{
        return(
            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                <div>{this.renderErrors(formProps.meta)}</div>
            </div>
        ); 
        // return <input 
        // onChange={formProps.input.onChange}
        // value={formProps.input.value}
        // />
    }
    onSubmit = formValues =>{
        this.props.onSubmit(formValues);
    }
    render(){
        return (
            <div>
                <form className="ui form error" 
                onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <Field name="title" component={this.renderInput} label="Enter a name" />
                    <Field name="description"  component={this.renderInput} label="Enter description" />
                    <button className="ui primary button">Submit</button>
                </form>
            </div>
        );
    }
};

const validate = (formValues) =>{
    const errors = {};
    if(!formValues.title){
        errors.title ="You must enter a title";
    }
    if(!formValues.description){
        errors.description="You must enter description"
    }

    return errors;
}

export default  reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);
