import React from 'react';
import { TextField } from './text-field';
import { TextArea } from './text-area';

export default class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            url: ''
        };
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleUrlChange(e) {
        this.setState({ url: e.target.value });
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            title: '',
            description: '',
            url: ''
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const formPayload = {
            id: new Date(),
            title: this.state.title,
            description: this.state.description,
            url: this.state.url
        };
        this.props.onChange(formPayload);
        this.handleClearForm(e);
    }

    render() {
        console.log('props: ', this.props);
        return (
            <form>
                <fieldset>
                    <legend>Add New Image Information: </legend>
                    <TextField
                        inputType={'text'}
                            title={'Title: '}
                            name={'title'}
                            controlFunc={this.handleTitleChange}
                            content={this.state.title}
                            placeholder={this.props.item.title} />
                    <TextArea
                        title={'Description: '}
                        rows={5}
                        resize={false}
                        content={this.state.description}
                        name={'description'}
                        controlFunc={this.handleDescriptionChange}
                        placeholder={this.props.item.description} />
                    <TextField
                        inputType={'text'}
                            title={'URL: '}
                            name={'url'}
                            controlFunc={this.handleUrlChange}
                            content={this.state.url}
                            placeholder={this.props.item.url} />
                    <button className='buttons' onClick={this.handleFormSubmit}>Submit</button>
                    <button className='buttons' onClick={this.handleClearForm}>Cancel</button>
                </fieldset>
            </form>
        );
    }
}

EditForm.constructor.propTypes = {
    onChange: React.PropTypes.func,
    item: React.PropTypes.object
};
