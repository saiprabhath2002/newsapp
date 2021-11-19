import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {

  // static defaultProps = {
  //   county:'in',
  //   pagesize:6
  // }
  // static propTypes={
  //   country : propTypes.string,
  //   pagesize:propTypes.number
  // }

  constructor(props) {
    super(props);
    //console.log("hello hiii"); 
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
    //document.title=this.props.category
  }

  async componentWillMount() {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=5a5f8819925340d7969b21cc616ab09d&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parseddata=await data.json();
    console.log(parseddata);
    this.setState({articles:parseddata.articles,totalarticles:parseddata.totalResults,loading:false})
  }

  previous= async ()=>
  {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=5a5f8819925340d7969b21cc616ab09d&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parseddata=await data.json();
    this.setState({
      page:this.state.page-1,
      articles:parseddata.articles,
      loading:false
  });
  }

  next=async()=>
  {
    if(!(this.state.page+1>(Math.ceil(this.state.totalarticles/this.props.pagesize))))
    {
    console.log("next!!");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=5a5f8819925340d7969b21cc616ab09d&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parseddata=await data.json(); 
    this.setState({
      page:this.state.page+1,
      articles:parseddata.articles,
      loading:false
    });
  }
  }

  render() {
    return (
      <>
      <div className="container">
        <h2 className="text-center">top headlines!!</h2>
        <br />
        {this.state.loading && <Spinner/>}
        <div className="row">
        {(!(this.state.loading)) && this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
                <Newsitem  title={element.title?element.title.slice(0,90)+"...": ""} description={element.description?element.description.slice(0,45 )+"...":""} imgurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
              </div>
        })}
               
        </div>
      </div>
      <div className="container">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button onClick={this.previous} disabled={this.state.page<=1? true:false} className="btn btn-primary me-md-2" type="button">&larr; previous</button>
        <button disabled={this.state.page+1>(Math.ceil(this.state.totalarticles/this.props.pagesize))} onClick={this.next} className="btn btn-primary" type="button">next &rarr;</button>
        </div>
      </div>
      </>
    );
  }
}

export default News;
