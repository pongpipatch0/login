import React, { Component } from 'react';
import {
    StyleSheet,
    Text,View,
    TextInput,
    Button
} from 'react-native';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit() {
        console.log('onSubmit',this.state);
    }

    render() {
        return (
        <View style={styles.view}>
            <TextInput
            placeholder="Email...."
            onChangeText= {(email) => this.setState({email})}
            value={this.state.email}
            style={styles.input}/>
            <TextInput
            placeholder="Password...."
            onChangeText= {(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
            style={[styles.input,styles.inputPwd]}/>
            <Button
            title="LOGIN"
            color="#5cb85c"
            onPress={this.onSubmit}/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        padding: 10
    },
    input: {
        color: '#555',
        height: 40
    },
    inputPwd: {
        marginTop: 10,
        marginBottom: 15
    },
});

export default LoginForm;