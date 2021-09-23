var inputStyle = {
      width: "80vw",
      height: "40vh",
      marginLeft: "10vw",
      marginRight: "10vw",
      padding: "10px"
    };
var outputStyle = {
  width: "80vw",
  height: "40vh",
  marginLeft: "10vw",
  marginRight: "10vw",
  padding: "10px",
}

class Editor extends React.Component{
  
  constructor(props){
    super(props);
  }
  render(){
    return(<textarea id = "editor" style={inputStyle} value = {this.props.input} onChange = {this.props.handleChange}></textarea>);
  }
}
class Preview extends React.Component{
  
  constructor(props){
    super(props);
  }
  render(){
   return(<div id = "preview" style={outputStyle} dangerouslySetInnerHTML={{ __html: marked(this.props.text) }}>
   </div>); 
  }
}
class MarkdownPreviewer extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      input: "# h1\n## h2\n[link](https://www.google.com)\ninline code `<div></div>` inline code\n\n```\n// multiline code\nfunction(){\n\treturn False;\n}\n```\n\n- li\n- li\n> Block quote\n\n![Google logo](https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.hubspot.com%2Fmarketing%2Fgoogle-logo-history&psig=AOvVaw3NEHlKLnZ0tmwSzoQYXz-f&ust=1605379051609000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiawpKVgO0CFQAAAAAdAAAAABAD)\n\n**bold**"
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render(){
    return(<div>
        <Editor input = {this.state.input} handleChange = {this.handleChange}/><Preview text = {this.state.input}/>
        </div>
    );
  }
}

ReactDOM.render(<MarkdownPreviewer />, document.getElementById("container"));
