import React, { Component } from 'react';
import './App.css';
class FormUi extends Component {
    constructor() {
        super()
        this.state = {
            head: "Lets get you a quote - it only takes few seconds",
            zip: "zipcode is required to get a quote",
            zip21: "",
            visibility21: "none",
            visibility22: "none",
            visibility23: "none",
            visibility24: "none",
            visibility25: "none",
            visibility26: "none",
            visibility27: "none",
            option: "",
            family: "I make"
        }
    }
    ZipChange = (e) => {
        this.setState({ zip21: e.target.value })
        if (e.target.value.length >= 5) {
            this.setState({ head: "" })
            this.setState({ zip: "" })
            this.setState({ visibility21: "" })
        } else {
            this.setState({ head: "Lets get you a quote - it only takes few seconds" })
            this.setState({ zip: "zipcode must be 5 digit" })
            this.setState({ visibility21: "hidden" })
        }
    }

    OptionChange = (e) => {
        this.setState({ option: e.target.value })
        if (e.target.value === "Me") {
            this.setState({ visibility22: " ", visibility23: "none", visibility24: "none", visibility25: "none" })
        } if (e.target.value === "Me and My Spouse") {
            this.setState({ visibility23: "", visibility22: "none", visibility24: "none", visibility25: "none" })
        } if (e.target.value === "Me, My Spouse & My Kids") {
            this.setState({ visibility24: "", visibility23: "none", visibility22: "none", visibility25: "none" })
        } if (e.target.value === "Me and My Kids") {
            this.setState({ visibility25: "", visibility23: "none", visibility24: "none", visibility22: "none" })
        }
    }

    MemberChange = () => {
        this.setState({ visibility26: "" })
    }

    SelectChange = (e) => {
        if (e.target.value === "1") {
            this.setState({ family:  "I make" })
        }else{
            this.setState({ family: "My family"  })
        }
    }

    ShowBtn = () => {
        this.setState({ visibility27: "" })
    }
    render() {
        return (
            <form>
                <label>{this.state.head}</label>
                <div>
                    <label>MY ZIP code is: </label>
                    <input type="text" placeholder="10012" onChange={this.ZipChange} value={this.state.zip21} />
                </div>

                <label>{this.state.zip}</label>

                <div style={{ display: this.state.visibility21 }}>
                    <label>I'd Like to cover</label>
                    <select onChange={this.OptionChange}>
                        <option></option>
                        <option>Me</option>
                        <option>Me and My Spouse</option>
                        <option>Me, My Spouse & My Kids</option>
                        <option>Me and My Kids</option>
                    </select>
                </div>
                <div style={{ display: this.state.visibility22 }}><label>I am <input onChange={this.MemberChange} />years old</label></div>
                <div style={{ display: this.state.visibility23 }}><label>I am <input />years old and my spouse is</label><input onChange={this.MemberChange} /></div>
                <div style={{ display: this.state.visibility24 }}><label>I am <input />years old and my spouse is<input />and my Kid is</label><input onChange={this.MemberChange} /></div>
                <div style={{ display: this.state.visibility25 }}><label>I am <input />years old and my Kid is</label><input onChange={this.MemberChange} /></div>
                <div style={{ display: this.state.visibility26 }} ><label>{this.state.family} $<input onChange={this.ShowBtn} />yearly with
                        <select onChange={this.SelectChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                    </select>person in my tax household</label></div>
                <div style={{ display: this.state.visibility27 }}><button>NEXT</button></div>
            </form>
        );
    }
}

export default FormUi;

