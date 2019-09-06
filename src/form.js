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
            visibility28: "none",
            visibility29: "none",
            option: "",
            family: "I make",
            age: " your age is required to get a quote",
            income: "valid income required to get a quote",
            opacity: "",
            opacity1: "",
            opacity2: "",
            opacity3: ""
        }
    }
    ZipChange = (e) => {
        const zip21 = (e.target.validity.valid) ? e.target.value : this.state.zip21;
        this.setState({ zip21 });
        if (e.target.value.length >= 5) {
            this.setState({
                head: "",
                zip: "",
                visibility21: "",
                opacity: "0.3"
            })
        } else {
            this.setState({
                head: "Lets get you a quote - it only takes few seconds",
                zip: "zipcode must be 5 digit",
                visibility21: "hidden"
            })
        }
    }

    OptionChange = (e) => {
        this.setState({ option: e.target.value })
        if (e.target.value === "Me") {
            this.setState({
                visibility22: " ",
                visibility23: "none",
                visibility24: "none",
                visibility25: "none",
                visibility28: " ",
                opacity1: "0.3"
            })
        } if (e.target.value === "Me and My Spouse") {
            this.setState({
                visibility23: "",
                visibility22: "none",
                visibility24: "none",
                visibility25: "none",
                visibility28: " ",
                age: " your and your spouse age is required to get a quote",
                opacity1: "0.3"
            })
        } if (e.target.value === "Me, My Spouse & My Kids") {
            this.setState({
                visibility24: "",
                visibility23: "none",
                visibility22: "none",
                visibility25: "none",
                visibility28: " ",
                age: " all ages are required to get a quote",
                opacity1: "0.3"
            })
        } if (e.target.value === "Me and My Kids") {
            this.setState({
                visibility25: "",
                visibility23: "none",
                visibility24: "none",
                visibility22: "none",
                visibility28: " ",
                age: " your and your kids age is required to get a quote",
                opacity1: "0.3"
            })
        }
    }

    MemberChange = () => {
        this.setState({
            visibility26: "",
            visibility29: "",
            visibility28: "none",
            opacity2: "0.3"
        })
    }
    SelectChange = (e) => {
        if (e.target.value === "1") {
            this.setState({ family: "I make" })
        } else {
            this.setState({ family: "My family makes" })
        }
    }
    ShowBtn=(e) => {
        if(e.target.value > 1){
            this.setState({
                visibility27: "",
                visibility29: "none"
            })
        }else{
            this.setState({
                visibility29: "",
                visibility27: "none"
            })
        }
    }

    active=()=>{
       if(this.state.opacity==="0.3"){
        this.setState({opacity:""})
       }
    }
    dactive=()=>{
        if(this.state.opacity===""){
            this.setState({opacity:"0.3"})
        }
    }
    active1=()=>{
        if(this.state.opacity1==="0.3"){
         this.setState({opacity1:""})
        }
     }
     dactive1=()=>{
         if(this.state.opacity1===""){
             this.setState({opacity1:"0.3"})
         }
     }
     active2=()=>{
        if(this.state.opacity2==="0.3"){
         this.setState({opacity2:""})
        }
     }
     dactive2=()=>{
         if(this.state.opacity2===""){
             this.setState({opacity2:"0.3"})
         }
     }
     active3=()=>{
        if(this.state.opacity3==="0.3"){
         this.setState({opacity3:""})
        }
     }
     dactive3=()=>{
         if(this.state.opacity3===""){
             this.setState({opacity3:"0.3"})
         }
     }

    render() {
        return (
            <form>
                <label>
                    {this.state.head}
                </label>
                <div style={{ opacity: this.state.opacity }} onMouseOver={this.active} onMouseOut={this.dactive}>
                    <label>MY ZIP code is: </label>
                    <input
                        placeholder="10012"
                        onChange={this.ZipChange}
                        type="text"
                        pattern="[0-9]*"
                        maxLength="5"
                        size="4"
                        onInput={this.ZipChange.bind(this)}
                        value={this.state.zip21}
                    />
                </div>

                <label style={{ fontStyle: "italic", fontSize: "medium" }}>
                    {this.state.zip}
                </label>

                <div style={{ display: this.state.visibility21, opacity: this.state.opacity1 }} onMouseOver={this.active1} onMouseOut={this.dactive1}>
                    <label>I'd Like to cover</label>
                    <select onChange={this.OptionChange}>
                        <option></option>
                        <option>Me</option>
                        <option>Me and My Spouse</option>
                        <option>Me, My Spouse & My Kids</option>
                        <option>Me and My Kids</option>
                    </select>
                </div>
                <div style={{ display: this.state.visibility22, opacity: this.state.opacity2 }} onMouseOver={this.active2} onMouseOut={this.dactive2}>
                    <label> I am<input maxLength="3"size="3"onChange={this.MemberChange}/>years old</label>
                </div>
                <div style={{ display: this.state.visibility23, opacity: this.state.opacity2 }} onMouseOver={this.active2} onMouseOut={this.dactive2} >
                    <label>I am <input maxLength="3" size="3" />years old and my spouse is</label>
                    <input maxLength="3" size="3" onChange={this.MemberChange} />
                </div>
                <div style={{ display: this.state.visibility24, opacity: this.state.opacity2 }} onMouseOver={this.active2} onMouseOut={this.dactive2}>
                    <label>I am <input maxLength="3" size="3" />years old and my spouse is<input maxLength="3" size="3" />and my Kid is</label>
                    <input maxLength="3" size="3" onChange={this.MemberChange} />
                </div>
                <div style={{ display: this.state.visibility25, opacity: this.state.opacity2 }} onMouseOver={this.active2} onMouseOut={this.dactive2}>
                    <label>I am <input maxLength="3" size="3" />years old and my Kid is</label>
                    <input maxLength="3" size="3" onChange={this.MemberChange} />
                </div>
                <div style={{ display: this.state.visibility28 }}>
                    <label style={{ fontStyle: "italic", fontSize: "medium" }}>{this.state.age}</label>
                </div>

                <div style={{ display: this.state.visibility26, opacity: this.state.opacity3 }} onMouseOver={this.active3} onMouseOut={this.dactive3}>
                    <label>{this.state.family} $<input size="10" onChange={this.ShowBtn} />yearly with
                        <select onChange={this.SelectChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5+</option>
                        </select>person in my tax household</label>
                </div>

                <div style={{ display: this.state.visibility29 }}>
                    <label style={{ fontStyle: "italic", fontSize: "medium" }}>{this.state.income}</label>
                </div>

                <div style={{ display: this.state.visibility27 }}>
                    <button>NEXT</button>
                </div>
            </form>
        );
    }
}

export default FormUi;

