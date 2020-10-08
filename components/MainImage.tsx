import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import Head from "next/head";
import images from "./ImageUrls";

type Section = { name: string; text: string; baseUrl: string };

interface ImageComponentProps {
  data: { loading: boolean; sections: Section[] };
  loading: boolean;
  sections: string[];
}

interface ImageComponentState {
  scrollThreshold: number;
  loading: boolean;
  data: { loading: boolean };
}

class MainImage extends Component<ImageComponentProps, ImageComponentState> {
  imageRef: React.RefObject<HTMLImageElement>;
  textChange: React.RefObject<HTMLParagraphElement>;

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.imageRef = React.createRef();
    this.textChange = React.createRef();

    this.state = {
      scrollThreshold: 10,
      loading: false,
      data: null,
    };
  }

  // on DOM render  display default image
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    this.imageRef.current.src = "img/01-hero-lightpass/0000.jpg";
    this.fetchData();
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  fetchData() {
    fetch("/api/graphql-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "{ sections { name } }" }),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.data }));
  }

  //to create file path to be retrieved from Public folder
  getImagePath(section, index, baseUrl) {
    let fileName = "";
    fileName = index.toString().padStart(4, "000");

    return `${baseUrl}/${section}/${fileName}.jpg`;
  }

  handleScroll = () => {
    const scrollThreshold = this.state.scrollThreshold;

    let newIndex;
    let sTop = window.scrollY; //number of pixels document is currently scrolled vertically
    let index = sTop / scrollThreshold;

    index = Math.floor(index);

    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (index < 148) {
      this.imageRef.current.src = this.getImagePath(
        this.props.data.sections[0].name,
        index,
        this.props.data.sections[0].baseUrl
      );
      this.textChange.current.innerHTML = this.props.data.sections[0].text;
      //text for each section
    } else if (index >= 148 && index < 280) {
      newIndex = index - 148;
      this.imageRef.current.src = this.getImagePath(
        this.props.data.sections[1].name,
        newIndex,
        this.props.data.sections[1].baseUrl
      );
      this.textChange.current.innerHTML = this.props.data.sections[1].text;
    } else if (index >= 280 && index < 368) {
      newIndex = index - 280;
      this.imageRef.current.src = this.getImagePath(
        this.props.data.sections[2].name,
        newIndex,
        this.props.data.sections[2].baseUrl
      );
      this.textChange.current.innerHTML = this.props.data.sections[2].text;
    } else if (index >= 368 && index < 506) {
      newIndex = index - 368;
      this.imageRef.current.src = this.getImagePath(
        this.props.data.sections[3].name,
        newIndex,
        this.props.data.sections[3].baseUrl
      );
      this.textChange.current.innerHTML = this.props.data.sections[3].text;
    } else if (index >= 506 && index < 645) {
      newIndex = index - 506;
      this.imageRef.current.src = this.getImagePath(
        this.props.data.sections[4].name,
        newIndex,
        this.props.data.sections[4].baseUrl
      );
      this.textChange.current.innerHTML = this.props.data.sections[4].text;
    } else if (index >= 645 && index < 821) {
      newIndex = index - 645;
      this.imageRef.current.src = this.getImagePath(
        this.props.data.sections[5].name,
        newIndex,
        this.props.data.sections[5].baseUrl
      );
    } else if (index >= 821 && index < 889) {
      newIndex = index - 821;
      this.imageRef.current.src = this.getImagePath(
        this.props.data.sections[6].name,
        newIndex,
        this.props.data.sections[6].baseUrl
      );
    } else if (index >= 889 && index < 978) {
      newIndex = index - 889;
      this.imageRef.current.src = this.getImagePath(
        this.props.data.sections[7].name,
        newIndex,
        this.props.data.sections[7].baseUrl
      );
      this.textChange.current.innerHTML = ""; //this section has no text
    } else if (index >= 978 && index < 1212) {
      newIndex = index - 978;
      this.imageRef.current.src = this.getImagePath(
        this.props.data.sections[8].name,
        newIndex,
        this.props.data.sections[8].baseUrl
      );
    } else {
      newIndex = index - 1212;
      this.imageRef.current.src = this.getImagePath(
        this.props.data.sections[9].name,
        newIndex,
        this.props.data.sections[9].baseUrl
      );
      this.textChange.current.innerHTML = this.props.data.sections[9].text;
    }
  };

  render() {
    return (
      <div>
        <Head>
          {images.map((image) => {
            return <link rel="preload" as="image" href={image} />;
          })}
        </Head>
        <section>
          <div>
            <div className="div-content">
              <p ref={this.textChange}></p>
            </div>
            <img className="responsive" ref={this.imageRef} src=""></img>
          </div>
        </section>
      </div>
    );
  }
}

const GET_SECTION_DETAILS = gql`
  {
    sections {
      name
      text
      baseUrl
    }
  }
`;

export default graphql(GET_SECTION_DETAILS)(MainImage as any);
